// simplified — add robust parsing, error handling, rate-limits and safety checks in production
const fs = require('fs');
const fetch = require('node-fetch');
const core = require('@actions/core');

const DOMAIN = process.env.DOMAIN || 'estin.pro';
const CF_ZONE_ID = process.env.CF_ZONE_ID;
const CF_API_TOKEN = process.env.CF_API_TOKEN;

const issueBody = process.env.ISSUE_BODY || '';
const issueNumber = process.env.ISSUE_NUMBER;

// very simple regex: look for a line "Requested subdomain: bob" or the first code-like token
const match = issueBody.match(/Requested subdomain\D*([a-z0-9-]{2,63})/i) || issueBody.match(/`([a-z0-9-]{2,63})`/i);
if (!match) {
  console.error('Could not parse subdomain from issue body'); process.exit(1);
}
const sub = match[1].toLowerCase();
if (!/^[a-z0-9-]{2,63}$/.test(sub) || sub.startsWith('-') || sub.endsWith('-')) {
  console.error('Invalid subdomain'); process.exit(1);
}

// load mappings
const mapPath = 'mappings.json';
let mappings = {};
if (fs.existsSync(mapPath)) mappings = JSON.parse(fs.readFileSync(mapPath));

// check availability
if (mappings[sub]) {
  console.error('Subdomain already taken'); process.exit(1);
}

// Add mapping (example: map to a user URL placeholder). You may store target from issue body.
mappings[sub] = { created_at: new Date().toISOString(), owner_issue: issueNumber, target: null };

// write and commit — using git CLI and GITHUB_TOKEN will work because the Action checked out the repo
fs.writeFileSync(mapPath, JSON.stringify(mappings, null, 2));
const { execSync } = require('child_process');
execSync('git config user.name "github-actions[bot]"');
execSync('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
execSync('git add mappings.json');
execSync(`git commit -m "Add subdomain ${sub} (issue #${issueNumber})"`);
execSync('git push');

// Optional: create a Cloudflare DNS record if you're not using wildcard
if (CF_API_TOKEN && CF_ZONE_ID) {
  const dnsResp = await fetch(`https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/dns_records`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CF_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: "A",                  // or "CNAME" depending on target
      name: `${sub}.${DOMAIN}`,
      content: "203.0.113.12",    // your server IP or target
      ttl: 120,
      proxied: false
    })
  });
  const j = await dnsResp.json();
  if (!j.success) {
    console.error('Cloudflare DNS creation failed', j);
    process.exit(1);
  }
}

// Finally, comment back on the issue (use GitHub REST API with GITHUB_TOKEN) — left as an exercise
console.log(`Subdomain ${sub}.${DOMAIN} created`);

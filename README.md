# Free Subdomains for estin.pro

Get your own free subdomain on estin.pro! Perfect for personal projects, portfolios, demos, and prototypes.

## 🚀 How to Get Your Subdomain

1. **Fork this repository**
2. **Edit `subdomains.json`** and add your entry:
   ```json
   "yourname": {
     "type": "CNAME",
     "target": "yoursite.example.com"
   }
   ```
3. **Open a Pull Request**
4. **Wait for review** - After approval and merge, `yourname.estin.pro` will be live!

## 📋 Rules & Guidelines

### Allowed Record Types
- **CNAME**: Points to another domain (e.g., `yourapp.vercel.app`)
- **A**: Points to an IPv4 address (e.g., `192.0.2.1`)
- **TXT**: Text records for verification (e.g., domain verification)

### Naming Requirements
- **Lowercase only**: a-z, 0-9, and hyphens (-)
- **Maximum length**: 63 characters
- **Must start and end** with a letter or number (not a hyphen)
- **Examples**: `myapp`, `john-doe`, `project2024`

### Reserved Names
The following names are reserved and cannot be used:
- `www`, `mail`, `email`, `smtp`, `pop`, `imap`
- `ftp`, `sftp`, `ssh`, `vpn`
- `admin`, `administrator`, `root`, `api`, `cdn`
- `dns`, `ns1`, `ns2`, `mx`, `mx1`
- Other common service names at reviewer's discretion

### Content Policy
- No malicious content (malware, phishing, spam)
- No illegal content
- No copyright infringement
- No abusive or hateful content
- Must comply with applicable laws

## 📖 Advanced Configuration

### Optional Fields

You can customize your subdomain with additional fields:

```json
"yourname": {
  "type": "CNAME",
  "target": "yoursite.example.com",
  "ttl": 3600,          // Time to live in seconds (60-86400, default: 3600)
  "proxied": false      // Cloudflare proxy (true/false, default: false)
}
```

### Multiple Record Types

```json
{
  "myapp": {
    "type": "CNAME",
    "target": "myapp.vercel.app"
  },
  "api": {
    "type": "A",
    "target": "192.0.2.1"
  },
  "_verification": {
    "type": "TXT",
    "target": "verification-code-here"
  }
}
```

## 🔧 DNS Propagation

- **Initial setup**: 5-30 minutes
- **Updates**: 1-5 minutes (depending on TTL)
- Check propagation: [whatsmydns.net](https://www.whatsmydns.net/)

## ❓ FAQ

**Q: Is this really free?**  
A: Yes! This is a community service for students and developers.

**Q: How long will my subdomain last?**  
A: Indefinitely, as long as the target is active and you follow the rules.

**Q: Can I have multiple subdomains?**  
A: Yes! Just add multiple entries in your PR.

**Q: My subdomain isn't working. What should I do?**  
A: Check DNS propagation first. If issues persist after 24 hours, open an issue.

**Q: Can I update my subdomain target?**  
A: Yes! Just edit `subdomains.json` and create a new PR.

**Q: Can I delete my subdomain?**  
A: Yes! Remove your entry from `subdomains.json` and create a PR.

## 🤝 Contributing

We welcome contributions! Please:
- Review existing PRs before submitting
- Follow the JSON format exactly
- Test your target URL before submitting
- Be patient during review

## 📞 Support

- **Issues**: [GitHub Issues](../../issues)
- **Questions**: Open a discussion or issue
- **Updates**: Watch this repo for announcements

## 🙏 Acknowledgments

Thanks to all contributors who help maintain this service!

---

**Note**: This service is provided as-is. We reserve the right to remove subdomains that violate our policies or for technical/legal reasons.

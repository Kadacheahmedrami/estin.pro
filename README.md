# Free subdomains for estin.pro

To get a subdomain:
1. Fork this repo.
2. Edit `subdomains.json` and add:
   "yourname": { "type": "CNAME", "target": "yoursite.example.com" }
3. Open a Pull Request.
4. After review & merge, yourname.estin.pro will be created.

Rules:
- Allowed record types: CNAME or A.
- Name: lowercase letters, digits, hyphens; max 63 chars.
- Reserved names blocked by reviewer: eg. www, mail, admin.

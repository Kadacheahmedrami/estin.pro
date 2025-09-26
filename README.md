# ✨ estin.pro — Free School Subdomains

> **Quick note:** The DNS for `estin.pro` is pointed to a Vercel project (wildcard). That means subdomains like `yourname.estin.pro` will route to the project automatically.

---

## 🚀 What this means (short)

* `*.estin.pro` resolves to the project hosted on Vercel.
* You can **directly add a custom domain** (e.g. `yourname.estin.pro`) to *your* Vercel project and it will work instantly (subject to Vercel certs).
* If you prefer to use another provider or need a DNS A record added manually, **open a GitHub Issue** in this repository with the details — we will add it within **24 hours**.

---

## 🧭 Quick Start — Use a subdomain in Vercel

1. In your Vercel project, add the domain `yourname.estin.pro`.
2. Deploy your project. The wildcard DNS routes traffic to our Vercel project, so Vercel should accept the domain and provision TLS.
3. If Vercel requests verification, follow Vercel’s prompts — usually this completes automatically.

---

## ✉️ Request support (if you don’t want to use Vercel)

If you want us to add a DNS A record (or handle the subdomain yourself under our DNS), please open an **Issue** using the following template:

**Issue title:** `SUBDOMAIN request — e.g. [alice] request`

**Issue body (copy/paste):**

```
Requested subdomain: alice
Type: A record or CNAME (e.g. A to 1.2.3.4)
Value: 1.2.3.4
Purpose / short note: portfolio
GitHub username: @alice
```

We will verify and add the record within **24 hours** (usually much sooner). We will comment on the issue when the DNS is active.

---

## 📌 Rules & Good Practices

* Keep names simple: **lowercase letters, numbers, and dashes** only (e.g. `alice`, `john-doe`).
* Reserved names such as `www`, `admin`, `mail`, and `api` are **not allowed**.
* Subdomains are granted on a first-come, first-served basis and can be reclaimed if inactive or abused.
* If you need automatic provisioning or special DNS configuration, explain it in the issue.

---

## 🔒 Security & Abuse

* Do not use subdomains for illegal content or anything that violates school or GitHub policies. Abuse reports will be handled by the maintainers.
* If you find a problem (spoofing, phishing, etc.), open an issue or contact a maintainer immediately.

---

## 📬 Maintainers / Contact

If you need urgent help, tag a maintainer in an issue or mention `@repo-owner`. We monitor issues and will respond quickly.

---

> Want this README styled differently or translated? Open an issue and we’ll improve it.

---

*Thank you — happy building! ✨*

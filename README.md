# Jacksun Engimech website — Design Exploration V1

A multi-page Next.js website iteration using JavaScript, Pages Router, React and Yarn 1.22.22.

## Design direction
- Primary: Industrial Editorial (bold typography, asymmetry, whitespace).
- Supporting: Engineering Interface (technical labels, structured details, clear product navigation).
- Selective: Industrial Art Direction (product imagery as focal points).

## Routes
- `/` — Home
- `/about` — About, values and client names
- `/products` — Product catalogue
- `/products/[slug]` — Eight product category pages
- `/quote` — Dedicated enquiry page
- `/contact` — Contact options

## Run locally
Use Node.js LTS compatible with the selected Next.js version. From this directory:

```powershell
corepack yarn --version
corepack yarn install
corepack yarn dev
```

Open http://localhost:3000. Build check: `corepack yarn build`.

## Enquiry form limitation
The current quote form uses a `mailto:` handoff to `jacksunengimech@gmail.com`. It does not deliver directly to a server and depends on the visitor having a configured email application. A server-side form provider or API route with secure email delivery must be selected and configured before public launch. Do not add email credentials to frontend code.

## Content and launch notes
Product descriptions and company values are based on the supplied JEC company profile and A4 poster. Confirm product specifications, customer-name/logo permissions, DeVilbiss dealer wording, contact details and GST details with JEC before public launch.

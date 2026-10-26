# Deployment readiness notes

1. Install dependencies with Yarn: `corepack yarn install`.
2. Run local tests and `corepack yarn build`.
3. Before public launch, replace the `mailto:`-only quote form with a tested server-side enquiry submission mechanism.
4. Confirm company claims, product specifications, client names/logos, contact details and dealer wording with JEC.
5. Configure the production domain and deployment environment in Vercel (or another Next.js host).
6. Test every route, form validation, phone/email/social links, keyboard access, mobile widths and 404 behaviour on the deployed preview.

Do not consider the website production-ready until the production build succeeds and the enquiry workflow is tested end-to-end.

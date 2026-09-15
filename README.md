# SYSTEM D ELECTRICAL

Single-page industrial electrical engineering website for System D Electrical. Built from the Stitch design in `stitch_system_d_electrical_industrial_website/` with Astro and Tailwind CSS.

Placeholder contact details from the design mock are still in `src/data/site.ts` (`02-XXX-XXXX`, LINE, email, Ayutthaya address). Replace those before production.

## Requirements

- Node.js 22.12 or newer

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local server at `http://localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## Project structure

```text
src/
  components/   Page sections (header through footer)
  data/site.ts  Contact details, nav, brand copy
  layouts/      Document shell, fonts, SEO
  pages/        Single route: /
  styles/       Tailwind theme tokens from DESIGN.md
public/images/  Local copies of design photos and logo
stitch_system_d_electrical_industrial_website/  Original Stitch design
```

## Deploy on Vercel (free tier)

1. Create the dedicated project Gmail first. Use it for Vercel, Cloudflare, and the future domain.
2. Import `https://github.com/jinwaratt/SystemDElectric.git` into Vercel.
3. Framework preset: Astro. Output: `dist`. Node.js: 22.
4. Confirm the `*.vercel.app` URL loads before attaching a custom domain.

Vercel rebuilds on every push to `main`. No Cloudflare Pages origin is used.

## Custom domain: Cloudflare + Vercel

Cloudflare is DNS/CDN/proxy only. Vercel stays the origin.

1. Register the domain (later) and add it to Cloudflare. Keep Cloudflare nameservers.
2. In Vercel, add both the apex (`systemdelectrical.com`) and `www`. Let Vercel issue certificates.
3. In Cloudflare DNS, add the records Vercel shows (`A` / `CNAME`) and set them to **Proxied** (orange cloud).
4. SSL/TLS in Cloudflare: **Full (strict)**. Do not use Flexible — that causes HTTPS redirect loops with Vercel.
5. Optional: enable Always Use HTTPS. If a loop still appears, turn off Automatic HTTPS Rewrites.
6. Pick one canonical host (apex or `www`) and 301 the other in **either** Cloudflare **or** Vercel, not both.

After nameservers propagate, wait for the Vercel certificate, then test HTTP→HTTPS and apex/`www`.

Update `site` in [astro.config.mjs](astro.config.mjs) and `src/data/site.ts` to the real domain so sitemap and Open Graph URLs are correct.

## Client handoff (non-technical)

Do **not** transfer the GitHub repository. Ownership is the dedicated Gmail login (Vercel + Cloudflare + domain). Give the client that username, password, and 2FA recovery codes in a separate offline note — never inside the zip.

### Zip packaging

From a clean machine copy of this project:

1. Run `npm run build`.
2. Delete `node_modules`, `.astro`, `.vercel`, and any `.env*` files.
3. Do not include `.git` or Vercel tokens.

Suggested zip layout:

```text
SystemDElectric-handoff/
  README.md     This file
  source/       Full project minus node_modules / .git / .env
  dist/         Last production build (static HTML/CSS/JS)
  design/       Copy of stitch_system_d_electrical_industrial_website/
```

A future developer only needs Node 22, then `npm install` and `npm run dev` or `npm run build` inside `source/`.

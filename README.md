# SYSTEM D ELECTRICAL

Single-page website for **บริษัท ซิสเท็มดี อีเล็คทริคอล จำกัด** (System D Electrical): industrial electrical design and installation.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) from the Stitch design in `stitch_system_d_electrical_industrial_website/`.

## Requirements

- Node.js 22.12 or newer

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local server at http://localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## Update site content

Most copy and contact details live in one place. After edits, run `npm run dev` (or push to `main` if Vercel is connected) to see the change.

| What to change | File |
| --- | --- |
| Company name, phone, LINE, email, address, hours | [`src/data/site.ts`](src/data/site.ts) |
| Project portfolio | [`src/data/portfolio.ts`](src/data/portfolio.ts) |
| Partner logos | [`src/components/Brands.astro`](src/components/Brands.astro) and `public/images/brands/` |
| Hero photo / company logo | `public/images/hero.jpg`, `public/images/logo.png` |

Update the domain in both [`astro.config.mjs`](astro.config.mjs) (`site`) and `src/data/site.ts` (`url`) if it changes, so the sitemap and Open Graph tags stay correct.

## Add a portfolio project

1. Put photos in a new folder under `public/images/portfolio/`, for example `public/images/portfolio/my-project/`.
2. Open [`src/data/portfolio.ts`](src/data/portfolio.ts) and add an object to the `projects` array. The first image is the cover photo.

```ts
{
  id: "my-project",
  title: "ชื่องาน",
  client: "ชื่อลูกค้า", // optional
  body: "คำอธิบายสั้น ๆ ว่ารับผิดชอบงานไฟฟ้าอะไร",
  images: [
    {
      src: "/images/portfolio/my-project/cover.jpg",
      alt: "คำอธิบายภาพสำหรับผู้ใช้ screen reader",
      caption: "คำบรรยายใต้ภาพในแกลเลอรี",
    },
  ],
}
```

Cards show every image. Clicking a card opens a gallery (arrows, thumbnails, keyboard). Portrait photos are scaled to about the same height as landscape ones.

## Project structure

```text
src/
  components/     Page sections (header through footer)
  data/site.ts    Contact details, nav, brand copy
  data/portfolio.ts   Real project records and gallery images
  layouts/        Document shell, fonts, SEO
  pages/          Single route: /
  styles/         Tailwind theme tokens
public/images/    Logo, hero, brand marks, portfolio photos
stitch_system_d_electrical_industrial_website/   Original Stitch design
```

Page order on `/`: Hero → Services → Process → Audience → Portfolio → Stats → Brands → CTA → Footer.

## Deploy on Vercel (free tier)

1. Create the dedicated project Gmail first. Use it for Vercel, Cloudflare, and the future domain.
2. Import this repository into Vercel.
3. Framework preset: Astro. Output: `dist`. Node.js: 22.
4. Confirm the `*.vercel.app` URL loads before attaching a custom domain.

Vercel rebuilds on every push to `main`.

## Custom domain: Cloudflare + Vercel

Cloudflare is DNS/CDN/proxy only. Vercel stays the origin.

1. Register the domain and add it to Cloudflare. Keep Cloudflare nameservers.
2. In Vercel, add both the apex (`systemdelectrical.com`) and `www`. Let Vercel issue certificates.
3. In Cloudflare DNS, add the records Vercel shows (`A` / `CNAME`) and set them to **Proxied** (orange cloud).
4. SSL/TLS in Cloudflare: **Full (strict)**. Do not use Flexible — that causes HTTPS redirect loops with Vercel.
5. Optional: enable Always Use HTTPS. If a loop still appears, turn off Automatic HTTPS Rewrites.
6. Pick one canonical host (apex or `www`) and 301 the other in **either** Cloudflare **or** Vercel, not both.

After nameservers propagate, wait for the Vercel certificate, then test HTTP→HTTPS and apex/`www`.

## Client handoff (non-technical)

Do **not** transfer the GitHub repository. Ownership is the dedicated Gmail login (Vercel + Cloudflare + domain). Give the client that username, password, and 2FA recovery codes in a separate offline note — never inside the zip.

### Zip packaging

From a clean copy of this project:

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

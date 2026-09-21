# SYSTEM D ELECTRICAL

Single-page website for **บริษัท ซิสเท็มดี อีเล็คทริคอล จำกัด** (System D Electrical): industrial electrical design and installation.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) from the Stitch design in `stitch_system_d_electrical_industrial_website/`.

Live site: [https://systemdelectrical.com/](https://systemdelectrical.com/)

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

Most copy and contact details live in one place. After edits, run `npm run dev` locally, or push to `main` to update the live site.

| What to change | File |
| --- | --- |
| Company name, phone, LINE, email, address, hours | [`src/data/site.ts`](src/data/site.ts) |
| Project portfolio | [`src/data/portfolio.ts`](src/data/portfolio.ts) |
| FAQ / SEO copy | [`src/data/seo.ts`](src/data/seo.ts) |
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
  data/site.ts    Contact details, nav, brand copy, canonical URL
  data/seo.ts     FAQ answers and JSON-LD / llms.txt
  data/portfolio.ts   Real project records and gallery images
  layouts/        Document shell, fonts, SEO
  pages/          Routes: `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`
  styles/         Tailwind theme tokens
public/images/    Logo, hero, brand marks, portfolio photos
stitch_system_d_electrical_industrial_website/   Original Stitch design
```

Page order on `/`: Hero → Services → Process → Audience → Portfolio → About → Brands → FAQ → CTA → Footer.

The production build includes `/sitemap-index.xml` and `/robots.txt`. Search engines and AI crawlers are allowed.

## Live site (Vercel)

The site is already deployed from this GitHub repository. Production URL:

**https://systemdelectrical.com/**

`https://system-d-electric.vercel.app` and `www.systemdelectrical.com` redirect to the apex domain.

Vercel rebuilds on every push to `main`. Framework preset: Astro. Output: `dist`. Node.js: 22.

## Custom domain DNS (Z.com)

DNS is pointed at Vercel from Z.com (`ns-a1.cloud.z.com`, `ns-a3.cloud.z.com`, `ns-a4.cloud.z.com`):

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `216.198.79.1` |
| `A` | `@` | `64.29.17.1` |
| `CNAME` | `www` | `0479fcc9f332d563.vercel-dns-017.com` |

`www` and the `*.vercel.app` URL redirect to https://systemdelectrical.com/.

Alternatively, at Z.com change nameservers to `ns1.vercel-dns.com` and `ns2.vercel-dns.com` and Vercel will manage DNS.

## Client handoff (non-technical)

Do **not** transfer the GitHub repository. Ownership is the dedicated Gmail login (Vercel + domain). Give the client that username, password, and 2FA recovery codes in a separate offline note — never inside the zip.

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

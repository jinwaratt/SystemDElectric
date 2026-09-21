import type { APIRoute } from "astro";
import { site } from "../data/site";

const origin = site.url.replace(/\/$/, "");

const body = `# ${site.legalName}
User-agent: *
Allow: /

Sitemap: ${origin}/sitemap-index.xml
Sitemap: ${origin}/sitemap.xml
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });

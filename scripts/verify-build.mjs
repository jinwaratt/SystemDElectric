import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const html = await readFile("dist/index.html", "utf8");
const cssDir = "dist/_astro";
const cssFile = (await readdir(cssDir)).find((name) => name.endsWith(".css"));
if (!cssFile) throw new Error("No CSS file");
const css = await readFile(join(cssDir, cssFile), "utf8");

const needles = {
  primary: css.includes("#00602b"),
  thaiFont: html.includes("--font-noto-sans-thai"),
  gutter: css.includes("--spacing-gutter"),
  scrollMargin: css.includes("scroll-margin-top"),
  home: html.includes('id="home"'),
  services: html.includes('id="services"'),
  projects: html.includes('id="projects"'),
  about: html.includes('id="about"'),
  contact: html.includes('id="contact"'),
  menu: html.includes("menu-toggle"),
  portfolio: html.includes("data-portfolio"),
  lang: html.includes('lang="th"'),
  og: html.includes("og:image"),
};

console.log(needles);
console.log("css bytes", css.length);
const missing = Object.entries(needles)
  .filter(([, ok]) => !ok)
  .map(([key]) => key);
if (missing.length) {
  console.error("Missing:", missing.join(", "));
  process.exit(1);
}

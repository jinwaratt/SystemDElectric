import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(
  join(root, "stitch_system_d_electrical_industrial_website/code.html"),
  "utf8",
);
const urls = [...html.matchAll(/src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/g)].map(
  (match) => match[1],
);
const unique = [...new Set(urls)];

const names = [
  "logo.png",
  "hero.jpg",
  "audience-factory.jpg",
  "audience-office.jpg",
  "audience-mall.jpg",
  "audience-construction.jpg",
  "audience-renovation.jpg",
  "portfolio-automotive.jpg",
  "portfolio-highrise.jpg",
  "portfolio-warehouse.jpg",
  "portfolio-food.jpg",
  "portfolio-mall.jpg",
  "portfolio-substation.jpg",
];

if (unique.length !== names.length) {
  console.error(`Expected ${names.length} images, found ${unique.length}`);
  unique.forEach((url, index) => console.error(index, url.slice(0, 80)));
}

const outDir = join(root, "public/images");
await mkdir(outDir, { recursive: true });

for (const [index, url] of unique.entries()) {
  const name = names[index] ?? `image-${index}.jpg`;
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to download ${name}: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(join(outDir, name), buffer);
  console.log(`Saved ${name} (${buffer.length} bytes)`);
}

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src/icons");
const names = [
  "check_circle",
  "phone_in_talk",
  "call",
  "menu",
  "close",
  "photo_library",
  "verified",
  "chevron_left",
  "chevron_right",
  "location_on",
  "mail",
  "schedule",
  "keyboard_arrow_down",
  "electrical_services",
  "electric_meter",
  "factory",
  "view_quilt",
  "reorder",
  "power",
  "draw",
  "checklist",
  "architecture",
  "calculate",
  "inventory_2",
  "construction",
  "troubleshoot",
  "task_alt",
  "payments",
  "handshake",
];

await mkdir(outDir, { recursive: true });

for (const name of names) {
  const url = `https://cdn.jsdelivr.net/npm/@material-symbols/svg-400@0.36.3/outlined/${name}.svg`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${name}: ${response.status}`);
  }
  let svg = await response.text();
  svg = svg
    .replace(/fill="#[0-9a-fA-F]+"/g, 'fill="currentColor"')
    .replace(/width="[^"]+"/, 'width="1em"')
    .replace(/height="[^"]+"/, 'height="1em"');
  if (!svg.includes('fill="currentColor"')) {
    svg = svg.replace("<svg", '<svg fill="currentColor"');
  }
  await writeFile(join(outDir, `${name}.svg`), svg);
  console.log("ok", name);
}

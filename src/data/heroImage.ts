import { getImage } from "astro:assets";
import heroImage from "../assets/hero.jpg";

export const heroImageOptions = {
  src: heroImage,
  format: "webp" as const,
  widths: [640, 960, 1280, 1920],
  sizes: "100vw",
  quality: 72,
};

export function getHeroImage() {
  return getImage(heroImageOptions);
}

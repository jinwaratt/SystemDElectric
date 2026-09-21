import { getImage } from "astro:assets";
import heroImage from "../assets/hero.jpg";

export function getHeroImage() {
  return getImage({
    src: heroImage,
    format: "webp",
    widths: [640, 960, 1280, 1920],
    sizes: "100vw",
    quality: 72,
  });
}

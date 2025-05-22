import type { ImageMetadata } from "astro";
export interface SimplifiedProject {
  title: string;
  year: string;
  rol: string;
  technologies: string;
  webUrl?: string;
  codeUrl?: string;
  slug: string;
  description: string;
  bulletPoints: string[];
  imageSrc: ImageMetadata;
  imageAlt: string;
}

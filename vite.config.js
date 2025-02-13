import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.jpg",
    "**/*.PNG",
    "**/*.jpeg",
    "**/*.png",
    "**/*.svg",
    "**/*.gif",
    "**/*.webp",
    "**/*.ico",
    "**/*.bmp",
    "**/*.tiff",
    "**/*.avif",
    "**/*.mp4",
    "**/*.webm",
    "**/*.ogg",
    "**/*.mp3",
    "**/*.wav",
    "**/*.flac",
    "**/*.aac",
    "**/*.m4a",
  ],
  base: "/PremioImprensa/",
});

import type { MetadataRoute } from "next";

export const MANIFEST: MetadataRoute.Manifest = {
  name: "Deepfriend",
  short_name: "Deepfriend",
  description:
    "Deepfriend is a science-backed AI emotional companion for mental health. Talk to Blue — an AI built on Cognitive Behavioral Therapy (CBT) — to manage anxiety, stress and insomnia. Private, available 24/7, and your data is never sold.",
  start_url: "/",
  categories: ["health", "medical", "lifestyle", "education", "wellness"],
  display: "fullscreen",
  background_color: "#24998B",
  theme_color: "#24998B",
  icons: [
    { src: "/icon.png", sizes: "32x32", type: "image/png" },
    {
      src: "/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  ],
};

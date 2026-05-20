// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { LOCALES, DEFAULT_LOCALE } from "@/i18n/config";

const SITE = "https://dfbubbles.com";

const ROUTES = [
  "",
  "/about",
  "/contact",
  "/legal-terms",
  "/privacy-policy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  return ROUTES.flatMap((route) =>
    LOCALES.map((lang) => ({
      url: `${SITE}/${lang}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(
            LOCALES.map((l) => [l, `${SITE}/${l}${route}`]),
          ),
          "x-default": `${SITE}/${DEFAULT_LOCALE}${route}`,
        },
      },
    })),
  );
}

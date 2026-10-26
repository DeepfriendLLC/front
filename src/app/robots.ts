// src/app/robots.ts
import { SITE } from "@/constants/routes/routes";
import { ROBOTS_RULES } from "@/constants/seo/robots";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ROBOTS_RULES,
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}

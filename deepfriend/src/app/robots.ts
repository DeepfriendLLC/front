// src/app/robots.ts
import type { MetadataRoute } from "next";

const SITE = "https://dfbubbles.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },

      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },

      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/legal-terms", "/privacy-policy"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/legal-terms", "/privacy-policy"],
      },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}

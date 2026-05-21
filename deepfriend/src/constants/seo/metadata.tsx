// src/app/[lang]/layout.tsx
import type { Metadata } from "next";
import { pickLocale } from "@/i18n/config";
import { ROUTES, SITE } from "../routes/routes";
import { COPY } from "./copy-metadata";

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

type RoutesType = typeof ROUTES[number];

export async function GENERATE_METADATA({ params, route, }: { params: LayoutProps["params"], route: RoutesType }): Promise<Metadata> {
  const raw = (await params).lang;
  const lang = pickLocale(raw);
  const copy = COPY[route][lang];

  return {
    metadataBase: new URL(SITE),
    title: { default: copy.title, template: `%s | Deepfriend` },
    description: copy.description,
    alternates: {
      canonical: `/${lang}${route}`,
      languages: {
        es: `${SITE}/es${route}`,
        en: `${SITE}/en${route}`,
        de: `${SITE}/de${route}`,
        "x-default": `${SITE}/es${route}`,
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE}/${lang}${route}`,
      siteName: "Deepfriend",
      locale:
        lang === "es" ? "es_ES" : lang === "de" ? "de_DE" : "en_US",
      alternateLocale:
        lang === "es"
          ? ["en_US", "de_DE"]
          : lang === "de"
            ? ["es_ES", "en_US"]
            : ["es_ES", "de_DE"],
      title: copy.title,
      description: copy.description,
      images: [`/${lang}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      site: "@dfbubbles_app",
      creator: "@dfbubbles_app",
      title: copy.title,
      description: copy.description,
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
};

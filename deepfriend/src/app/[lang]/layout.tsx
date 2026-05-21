// src/app/[lang]/layout.tsx
import type { Metadata, Viewport } from "next";
import { LOCALES, pickLocale, type Locale } from "@/i18n/config";
import { headers } from "next/headers";
import Script from "next/script";
import { Cormorant, Mulish } from "next/font/google";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const SITE = "https://dfbubbles.com";

const COPY: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Deepfriend | IA científica para tu salud mental",
    description:
      "App de compañía emocional con IA basada en evidencia científica (TCC). 24/7, privada y sin prejuicios.",
  },
  en: {
    title: "Deepfriend | Science-backed AI for your mental health",
    description:
      "AI emotional companion app grounded in scientific evidence (CBT). 24/7, private, judgment-free.",
  },
  de: {
    title: "Deepfriend | Wissenschaftliche KI für deine mentale Gesundheit",
    description:
      "KI-App für emotionale Begleitung, gestützt auf wissenschaftliche Evidenz (KVT). Rund um die Uhr, privat, ohne Vorurteile.",
  },
};

export async function generateMetadata({ params }: { params: LayoutProps["params"] }): Promise<Metadata> {
  const raw = (await params).lang;
  const lang = pickLocale(raw);
  const copy = COPY[lang];
  return {
    metadataBase: new URL(SITE),
    title: { default: copy.title, template: `%s | Deepfriend` },
    description: copy.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: `${SITE}/es`,
        en: `${SITE}/en`,
        de: `${SITE}/de`,
        "x-default": `${SITE}/es`,
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE}/${lang}`,
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
}

export const viewport: Viewport = {
  themeColor: "#24998B",
  width: "device-width",
  initialScale: 1,
};

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mulish",
  display: "swap",
});

export default async function LangLayout({ children, params }: LayoutProps) {
  const raw = (await params).lang;
  const lang = pickLocale(raw);
  const h = await headers();
  const nonce = h.get("x-nonce") ?? undefined;

  return (
    <html lang={lang} className={`${cormorant.variable} ${mulish.variable}`}>
      <body>
        {children}
        <Script
          src="/_vercel/insights/script.js"
          nonce={nonce}
          strategy="afterInteractive"
          data-endpoint="/_vercel/insights"
        />
        <Script
          src="/_vercel/speed-insights/script.js"
          nonce={nonce}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
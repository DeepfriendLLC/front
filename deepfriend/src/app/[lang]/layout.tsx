// src/app/[lang]/layout.tsx
import type { Metadata, Viewport } from "next";
import { LOCALES, pickLocale } from "@/i18n/config";
import { headers } from "next/headers";
import Script from "next/script";
import { Cormorant, Mulish } from "next/font/google";
import { GENERATE_METADATA, LayoutProps } from "@/constants/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
};

export async function generateMetadata({ params }: { params: LayoutProps["params"] }): Promise<Metadata> {
  return GENERATE_METADATA({ params, route: "" });
};

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
};

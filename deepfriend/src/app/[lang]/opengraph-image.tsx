// src/app/[lang]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { pickLocale, type Locale } from "@/i18n/config";

export const runtime = "edge";
export const alt = "Deepfriend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COPY: Record<Locale, {
    title: string;
    subtitle: string
}> = {
    es: {
        title: "Deepfriend",
        subtitle: "Tu IA científica de bienestar mental"
    },
    en: {
        title: "Deepfriend",
        subtitle: "Your science-backed AI for mental wellness"
    },
    de: {
        title: "Deepfriend",
        subtitle: "Deine wissenschaftliche KI für mentales Wohlbefinden"
    },
};

export default async function OG({ params }: { params: Promise<{ lang: string }> }) {
    const lang = pickLocale((await params).lang);
    const copy = COPY[lang];

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg,#24998B,#0f5f55)",
                    color: "white",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div style={{ fontSize: 96, fontWeight: 700 }}>{copy.title}</div>
                <div style={{ fontSize: 40, marginTop: 24, opacity: 0.9, textAlign: "center", padding: "0 80px" }}>
                    {copy.subtitle}
                </div>
            </div>
        ),
        { ...size },
    );
}
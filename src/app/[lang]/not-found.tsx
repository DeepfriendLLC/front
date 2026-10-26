import { headers } from "next/headers";
import Link from "next/link";
import { isLocale, type Locale } from "@/i18n/config";

const T: Record<Locale, { title: string; cta: string }> = {
  es: { title: "Página no encontrada", cta: "Volver al inicio" },
  en: { title: "Page not found", cta: "Back to home" },
  de: { title: "Seite nicht gefunden", cta: "Zur Startseite" },
};

export default async function NotFound() {
  const h = await headers();
  const raw = h.get("x-locale") ?? "es";
  const lang: Locale = isLocale(raw) ? raw : "es";
  const t = T[lang];

  return (
    <main className="df-shell" style={{ padding: "96px 0", textAlign: "center" }}>
      <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brand-deep)" }}>
        404
      </p>
      <h1 style={{ fontFamily: "var(--f-serif)", fontSize: "clamp(36px, 5vw, 56px)", margin: "12px 0 24px", letterSpacing: "-0.02em" }}>
        {t.title}
      </h1>
      <Link
        href={`/${lang}` as never}
        style={{
          display: "inline-flex",
          padding: "12px 22px",
          background: "var(--ink)",
          color: "white",
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        {t.cta}
      </Link>
    </main>
  );
}

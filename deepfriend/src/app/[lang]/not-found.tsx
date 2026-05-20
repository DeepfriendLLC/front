import { headers } from "next/headers";
import Link from "next/link";

export default async function NotFound() {
    const h = await headers();
    const lang = (h.get("x-locale") ?? "es") as "es" | "en";
    const t = lang === "es"
        ? {
            title: "Página no encontrada",
            cta: "Volver al inicio",
        }
        : {
            title: "Page not found",
            cta: "Back to home",
        };

    return (
        <main style={{ padding: 48 }}>
            <h1>
                404 — {t.title}
            </h1>
            <Link href={`/${lang}`}>
                {t.cta}
            </Link>
        </main>
    );
}
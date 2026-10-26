"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LOCALES, LOCALE_LABELS, type Locale, isLocale } from "@/i18n/config";
import styles from "@/styles/LangSwitcher.module.css";

export default function LangSwitcher({
  current,
  variant = "navbar",
}: {
  current: Locale;
  variant?: "navbar" | "footer";
}) {
  const pathname = usePathname() || "/";

  const segments = pathname.split("/").filter(Boolean);
  const rest = isLocale(segments[0] ?? "") ? segments.slice(1) : segments;
  const tail = rest.length ? `/${rest.join("/")}` : "";

  return (
    <div
      className={`${styles['root']} ${variant === "footer" ? styles['footer'] : styles['navbar']}`}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={`/${l}${tail}` as never}
          className={`${styles['item']} ${l === current ? styles['active'] : ""}`}
          aria-current={l === current ? "page" : undefined}
        >
          {LOCALE_LABELS[l]}
        </Link>
      ))}
    </div>
  );
}

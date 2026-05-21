export const LOCALES = ["es", "en", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
};

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export function pickLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

export function resolveLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const candidates = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase().split("-")[0])
    .filter(Boolean) as string[];

  for (const c of candidates) if (isLocale(c)) return c;

  return DEFAULT_LOCALE;
}

import type { Locale } from "@/i18n/config";
import { TranslationTexts } from "@/constants/translations/translations";

export function getT(lang: Locale) {
  return TranslationTexts[lang];
}

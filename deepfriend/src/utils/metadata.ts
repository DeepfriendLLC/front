import { TranslationTexts } from "@/constants/translations/translations";
import { AllowedLanguagesEncodedType } from "@/hooks/slice/systemLanguage";

export type AllowedPagesType = '/' | '/about' | '/contact' | '/legal-terms' | '/privacy-policy';
const DESCRIPTION = 'Deepfriend es una app de compañía emocional basada en IA y evidencia científica. Sientete comprendida estés dónde estés, las 24 horas del día. Sin cargas emocionales ni prejuicios. El apoyo de calidad que te mereces siempre para ti.';
const KEYWORDS = 'Blue AI, Blue, Deepfriend, Deepfriemd, Deep friend, Meditaciones personalizadas.';

export const BASIC_METADATA = (
  page: AllowedPagesType,
  language: AllowedLanguagesEncodedType,
) => {
  const TITLE = TranslationTexts[language][`head_${page === "/" ? "home"
    : page === "/about" ? "about"
      : page === "/contact" ? "contact"
        : page === "/legal-terms" ? "legal_terms"
          : "privacy_policy"
    }_title`];

  return {
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: 'https://dfbubbles.com',
      siteName: 'Mi Web',
      images: [{ url: 'https://pub-1c7f9477558d4afebc1486262d64b4f3.r2.dev/deepfriend_logo.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: TITLE,
      description: DESCRIPTION,
      images: ['https://pub-1c7f9477558d4afebc1486262d64b4f3.r2.dev/deepfriend_logo.png'],
      creator: '@dfbubbles_app',
    },
  }
};

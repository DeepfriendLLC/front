import styles from "@/styles/Portada.module.css";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";
import ProfessionalsTeaserComponent from "@/components/home/professionals-teaser/professionals-teaser";

import GooglePlayLogo from "@/../public/icons/google-play/logo.png";

const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

function highlightWord(text: string, word: string, className: string) {
  const index = text.indexOf(word);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className={className}>{word}</span>
      {text.slice(index + word.length)}
    </>
  );
}

export default function PortadaComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['hero']}>
      <div className={styles['grid']} aria-hidden />
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['copy']}>

          <h1 className={styles['title']}>
            {highlightWord(
              t.hero_title,
              t.hero_highlight,
              styles['highlight'] ?? "",
            )}
          </h1>

          <p className={styles['subtitle']}>{t.hero_subtitle}</p>

          <div className={styles['actions']}>
            <a
              href={GOOGLE_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['ctaPrimary']}
              aria-label={t.hero_cta_primary}
            >
              <Image
                alt=""
                src={GooglePlayLogo}
                className={styles['ctaIcon']}
              />
              {t.hero_cta_primary}
            </a>
            <a href="#how-it-works" className={styles['ctaSecondary']}>
              {t.hero_cta_secondary}
            </a>
          </div>

          <ul className={styles['micro']}>
            <li>{t.hero_micro_downloads}</li>
            <li>{t.hero_micro_privacy}</li>
            <li>{t.hero_micro_rating}</li>
          </ul>

          <ProfessionalsTeaserComponent lang={lang} />
        </div>
      </div>
    </section>
  );
}

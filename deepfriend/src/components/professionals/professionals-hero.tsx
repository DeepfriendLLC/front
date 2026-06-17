import styles from "@/styles/ProfessionalsHero.module.css";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import BlueWhale from "@/../public/images/blue/blue-turquesa.png";

const CONTACT_HREF =
  "mailto:hello@dfbubbles.com?subject=Professionals";

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

export default function ProfessionalsHeroComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles["section"]} aria-labelledby="pro-hero-title">
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["copy"]}>

          <h1 id="pro-hero-title" className={styles["title"]}>
            {highlightWord(
              t.pro_hero_title,
              t.pro_hero_highlight,
              styles["highlight"] ?? "",
            )}
          </h1>

          <p className={styles["subtitle"]}>{t.pro_hero_subtitle}</p>

          <div className={styles["actions"]}>
            <a href={CONTACT_HREF} className={styles["ctaPrimary"]}>
              {t.pro_hero_cta_primary}
            </a>
            <a href="#dashboard" className={styles["ctaSecondary"]}>
              {t.pro_hero_cta_secondary}
            </a>
          </div>
        </div>

        <div className={styles["visual"]} aria-hidden>
          <Image
            alt=""
            src={BlueWhale}
            className={styles["whale"]}
            priority
          />
        </div>
      </div>
    </section>
  );
}

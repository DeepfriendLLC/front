import styles from "@/styles/AboutIntro.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function AboutIntroComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <span className={styles['eyebrow']}>{t.about_eyebrow}</span>
        <h1 className={styles['title']}>{t.about_title}</h1>
        <p className={styles['intro']}>{t.about_intro}</p>
      </div>
    </section>
  );
}

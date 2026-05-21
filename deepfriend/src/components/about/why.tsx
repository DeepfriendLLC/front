import styles from "@/styles/Why.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function AboutWhyComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['head']}>
          <h2 className={styles['title']}>{t.about_story_title}</h2>
          <span className={styles['rule']} aria-hidden />
        </div>
        <p className={styles['text']}>{t.about_story_text}</p>
      </div>
    </section>
  );
}

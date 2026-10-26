import styles from "@/styles/Why.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function AboutWhyComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles["section"]} aria-labelledby="about-story-title">
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.about_story_eyebrow}
          </span>
          <h2 id="about-story-title" className={styles["title"]}>
            {t.about_story_title}
          </h2>
        </div>
        <p className={styles["text"]}>{t.about_story_text}</p>
      </div>
    </section>
  );
}

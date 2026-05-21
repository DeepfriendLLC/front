import styles from "@/styles/MissionAndValues.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function MissionAndValuesComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <article className={styles['card']}>
          <span className={styles['kicker']}>01</span>
          <h3 className={styles['title']}>{t.about_mission_title}</h3>
          <p className={styles['text']}>{t.about_mission_text}</p>
        </article>
        <article className={styles['card']}>
          <span className={styles['kicker']}>02</span>
          <h3 className={styles['title']}>{t.about_values_title}</h3>
          <p className={styles['text']}>{t.about_values_text}</p>
        </article>
      </div>
    </section>
  );
}

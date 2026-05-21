import styles from "@/styles/Privacy.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function PrivacyComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const points = [
    t.privacy_point_1,
    t.privacy_point_2,
    t.privacy_point_3,
    t.privacy_point_4,
  ];

  return (
    <section className={styles['section']} aria-labelledby="privacy-title">
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['card']}>
          <div className={styles['left']}>
            <span className={styles['eyebrow']}>{t.privacy_eyebrow}</span>
            <h2 id="privacy-title" className={styles['title']}>
              {t.privacy_title}
            </h2>
            <p className={styles['text']}>{t.privacy_text}</p>
          </div>

          <ul className={styles['list']}>
            {points.map((p, i) => (
              <li key={i} className={styles['item']}>
                <span className={styles['tick']} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

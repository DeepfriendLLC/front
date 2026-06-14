import styles from "@/styles/ProfessionalsFeatures.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

const FEATURE_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 18V6" strokeLinecap="round" />
      <path d="M4 18h16" strokeLinecap="round" />
      <path d="M8 14l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 6h11M9 12h11M9 18h7" strokeLinecap="round" />
      <path d="M5 6h.01M5 12h.01M5 18h.01" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 20h16L12 3Z" strokeLinejoin="round" />
      <path d="M12 10v4M12 17h.01" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
];

export default function ProfessionalsFeaturesComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const features = [
    { title: t.pro_feature_1_title, text: t.pro_feature_1_text },
    { title: t.pro_feature_2_title, text: t.pro_feature_2_text },
    { title: t.pro_feature_3_title, text: t.pro_feature_3_text },
    { title: t.pro_feature_4_title, text: t.pro_feature_4_text },
    { title: t.pro_feature_5_title, text: t.pro_feature_5_text },
    { title: t.pro_feature_6_title, text: t.pro_feature_6_text },
  ];

  return (
    <section className={styles["section"]} aria-labelledby="pro-features-title">
      <div className={`df-shell ${styles["shell"]}`}>
        <header className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.pro_features_eyebrow}
          </span>
          <h2 id="pro-features-title" className={styles["title"]}>
            {t.pro_features_title}
          </h2>
        </header>

        <div className={styles["grid"]}>
          {features.map((f, i) => (
            <article key={f.title} className={styles["card"]}>
              <span className={styles["iconWrap"]} aria-hidden>
                {FEATURE_ICONS[i]}
              </span>
              <h3 className={styles["cardTitle"]}>{f.title}</h3>
              <p className={styles["cardText"]}>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

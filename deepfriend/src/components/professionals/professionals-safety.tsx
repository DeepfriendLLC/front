import styles from "@/styles/Privacy.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function ProfessionalsSafetyComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const points = [
    t.pro_safety_point_1,
    t.pro_safety_point_2,
    t.pro_safety_point_3,
    t.pro_safety_point_4,
    t.pro_safety_point_5,
    t.pro_safety_point_6,
  ];

  return (
    <section className={styles["section"]} aria-labelledby="pro-safety-title">
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["card"]}>
          <div className={styles["left"]}>
            <span className={styles["eyebrow"]}>{t.pro_safety_eyebrow}</span>
            <h2 id="pro-safety-title" className={styles["title"]}>
              {t.pro_safety_title}
            </h2>
            <p className={styles["text"]}>{t.pro_safety_text}</p>
          </div>

          <ul className={styles["list"]}>
            {points.map((p) => (
              <li key={p} className={styles["item"]}>
                <span className={styles["tick"]} aria-hidden>
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

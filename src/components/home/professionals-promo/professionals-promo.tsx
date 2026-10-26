import styles from "@/styles/ProfessionalsPromo.module.css";

import Link from "next/link";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function ProfessionalsPromoComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const bullets = [
    t.home_pro_promo_bullet_1,
    t.home_pro_promo_bullet_2,
    t.home_pro_promo_bullet_3,
  ];

  return (
    <section className={styles["section"]} aria-labelledby="home-pro-promo-title">
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["card"]}>
          <div className={styles["left"]}>
            <span className={styles["eyebrow"]}>{t.home_pro_promo_eyebrow}</span>
            <h2 id="home-pro-promo-title" className={styles["title"]}>
              {t.home_pro_promo_title}
            </h2>
            <p className={styles["text"]}>{t.home_pro_promo_text}</p>
            <Link
              href={`/${lang}/professionals` as never}
              className={styles["cta"]}
            >
              {t.home_pro_promo_cta}
            </Link>
          </div>

          <ul className={styles["list"]}>
            {bullets.map((bullet, i) => (
              <li key={i} className={styles["item"]}>
                <span className={styles["tick"]} aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

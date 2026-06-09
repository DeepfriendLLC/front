import styles from "@/styles/BlueProduct.module.css";
import Image from "next/image";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import BlueWhale from "@/../public/images/blue/blue-turquesa.png";

export default function BlueProductComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const bullets = [
    t.product_blue_bullet_1,
    t.product_blue_bullet_2,
    t.product_blue_bullet_3,
  ];

  return (
    <section
      className={styles["section"]}
      id="products"
      aria-labelledby="products-blue-title"
    >
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["layout"]}>
          <div className={styles["copy"]}>
            <span className={styles["eyebrow"]}>
              <span className={styles["dot"]} aria-hidden />
              {t.products_blue_eyebrow}
            </span>

            <span className={styles["label"]}>{t.product_blue_label}</span>

            <h2 id="products-blue-title" className={styles["title"]}>
              {t.product_blue_title}
            </h2>

            <p className={styles["text"]}>{t.product_blue_text}</p>

            <ul className={styles["bullets"]}>
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <aside className={styles["note"]}>
              <span className={styles["noteIcon"]} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M8 7v4M8 5.5v.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className={styles["noteBody"]}>
                <strong className={styles["noteTitle"]}>
                  {t.product_blue_note_title}
                </strong>
                <p className={styles["noteText"]}>{t.product_blue_note_text}</p>
              </div>
            </aside>
          </div>

          <div className={styles["visual"]} aria-hidden>
            <div className={styles["orb"]} />
            <div className={styles["orbInner"]} />
            <Image
              alt=""
              src={BlueWhale}
              className={styles["whale"]}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

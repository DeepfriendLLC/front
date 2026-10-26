import styles from "@/styles/ProfessionalsBenefits.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function ProfessionalsBenefitsComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const cards = [
    { num: "01", title: t.pro_benefit_1_title, text: t.pro_benefit_1_text, variant: styles["card_ink"] },
    { num: "02", title: t.pro_benefit_2_title, text: t.pro_benefit_2_text, variant: styles["card_science"] },
    { num: "03", title: t.pro_benefit_3_title, text: t.pro_benefit_3_text, variant: styles["card_teal"] },
  ];

  return (
    <section className={styles["section"]} aria-labelledby="pro-benefits-title">
      <div className={`df-shell ${styles["shell"]}`}>
        <header className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.pro_benefits_eyebrow}
          </span>
          <h2 id="pro-benefits-title" className={styles["title"]}>
            {t.pro_benefits_title}
          </h2>
        </header>

        <div className={styles["grid"]}>
          {cards.map((c) => (
            <article
              key={c.num}
              className={`${styles["card"]} ${c.variant}`}
            >
              <div className={styles["cardNum"]}>{c.num}</div>
              <h3 className={styles["cardTitle"]}>{c.title}</h3>
              <p className={styles["cardText"]}>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

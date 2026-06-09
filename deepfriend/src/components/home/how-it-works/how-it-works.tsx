import styles from "@/styles/HowItWorks.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function HowItWorksComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const steps = [
    { num: "01", title: t.how_step_1_title, text: t.how_step_1_text },
    { num: "02", title: t.how_step_2_title, text: t.how_step_2_text },
    { num: "03", title: t.how_step_3_title, text: t.how_step_3_text },
  ];

  return (
    <section
      className={styles["section"]}
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className={`df-shell ${styles["shell"]}`}>
        <header className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.how_eyebrow}
          </span>
          <h2 id="how-title" className={styles["title"]}>
            {t.how_title}
          </h2>
        </header>

        <div className={styles["grid"]}>
          {steps.map((step) => (
            <article key={step.num} className={styles["card"]}>
              <div className={styles["cardNum"]}>{step.num}</div>
              <h3 className={styles["cardTitle"]}>{step.title}</h3>
              <p className={styles["cardText"]}>{step.text}</p>
            </article>
          ))}
        </div>

        <p className={styles["disclaimer"]}>{t.how_disclaimer}</p>
      </div>
    </section>
  );
}

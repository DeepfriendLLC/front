import styles from "@/styles/HowItWorks.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

const STEP_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6h16v12H4z" />
      <path d="M8 10h8M8 14h5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 16.5H8l-4 3v-13Z"
        strokeLinejoin="round"
      />
      <path d="M8 10.5h8M8 13.5h5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  ),
];

export default function ProfessionalsWorkflowComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const steps = [
    { num: "01", title: t.pro_workflow_step_1_title, text: t.pro_workflow_step_1_text },
    { num: "02", title: t.pro_workflow_step_2_title, text: t.pro_workflow_step_2_text },
    { num: "03", title: t.pro_workflow_step_3_title, text: t.pro_workflow_step_3_text },
  ];

  return (
    <section className={styles["section"]} aria-labelledby="pro-workflow-title">
      <div className={`df-shell ${styles["shell"]}`}>
        <header className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.pro_workflow_eyebrow}
          </span>
          <h2 id="pro-workflow-title" className={styles["title"]}>
            {t.pro_workflow_title}
          </h2>
        </header>

        <div className={styles["grid"]}>
          {steps.map((step, i) => (
            <article key={step.num} className={styles["card"]}>
              <div className={styles["cardTop"]}>
                <span className={styles["iconWrap"]} aria-hidden>
                  {STEP_ICONS[i]}
                </span>
                <div className={styles["cardNum"]}>{step.num}</div>
              </div>
              <h3 className={styles["cardTitle"]}>{step.title}</h3>
              <p className={styles["cardText"]}>{step.text}</p>
            </article>
          ))}
        </div>

        <p className={styles["disclaimer"]}>{t.pro_workflow_disclaimer}</p>
      </div>
    </section>
  );
}

import styles from "@/styles/HowItWorks.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

const STEP_ICONS = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" strokeLinecap="round" />
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
      <path d="M4 18V6" strokeLinecap="round" />
      <path d="M4 18h16" strokeLinecap="round" />
      <path d="M8 14l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

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

        <p className={styles["disclaimer"]}>{t.how_disclaimer}</p>

        {/* VIDEO_FOUNDER_SLOT — embed founder story or app demo video here */}
      </div>
    </section>
  );
}

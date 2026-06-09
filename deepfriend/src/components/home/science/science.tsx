import styles from "@/styles/Science.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

function highlightWord(text: string, word: string, className: string) {
  const index = text.indexOf(word);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className={className}>{word}</span>
      {text.slice(index + word.length)}
    </>
  );
}

export default function ScienceComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const pillars = [
    { num: "01", title: t.science_pillar_1_title, text: t.science_pillar_1_text },
    { num: "02", title: t.science_pillar_2_title, text: t.science_pillar_2_text },
    { num: "03", title: t.science_pillar_3_title, text: t.science_pillar_3_text },
  ];

  return (
    <section className={styles["section"]} id="science" aria-labelledby="science-title">
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["layout"]}>
          <div className={styles["copy"]}>
            <span className={styles["eyebrow"]}>
              <span className={styles["dot"]} aria-hidden />
              {t.science_eyebrow}
            </span>
            <h2 id="science-title" className={styles["title"]}>
              {highlightWord(
                t.science_title,
                t.science_highlight,
                styles["highlight"] ?? "",
              )}
            </h2>
            <p className={styles["text"]}>{t.science_text}</p>
          </div>

          <div className={styles["visual"]} aria-hidden>
            <div className={styles["orb"]} />
            <div className={styles["orbInner"]} />
            <div className={styles["iconStack"]}>
              <span className={styles["iconWrap"]}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 17V7a3 3 0 0 1 3-3h2v16H7a3 3 0 0 1-3-3Z" />
                  <path d="M15 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2V4Z" />
                  <path d="M9 12h6" />
                </svg>
              </span>
              <span className={styles["iconWrap"]}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3v18M3 12h18" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <span className={styles["iconWrap"]}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className={styles["grid"]}>
          {pillars.map((p) => (
            <article key={p.num} className={styles["card"]}>
              <div className={styles["cardNum"]}>{p.num}</div>
              <h3 className={styles["cardTitle"]}>{p.title}</h3>
              <p className={styles["cardText"]}>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

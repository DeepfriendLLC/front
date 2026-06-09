import styles from "@/styles/Science.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";
import type { TranslationDictionary } from "@/constants/translations/translations";

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

function CbtTriangleDiagram({
  labels,
}: {
  labels: Pick<
    TranslationDictionary,
    "science_diagram_thought" | "science_diagram_emotion" | "science_diagram_behavior"
  >;
}) {
  return (
    <figure className={styles["diagram"]}>
      <svg
        className={styles["diagramSvg"]}
        viewBox="0 0 320 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`TCC: ${labels.science_diagram_thought}, ${labels.science_diagram_emotion}, ${labels.science_diagram_behavior}`}
      >
        <polygon
          points="160,36 288,228 32,228"
          className={styles["diagramTriangle"]}
        />
        <line x1="160" y1="36" x2="32" y2="228" className={styles["diagramLine"]} />
        <line x1="160" y1="36" x2="288" y2="228" className={styles["diagramLine"]} />
        <line x1="32" y1="228" x2="288" y2="228" className={styles["diagramLine"]} />
        <circle cx="160" cy="36" r="6" className={styles["diagramNode"]} />
        <circle cx="32" cy="228" r="6" className={styles["diagramNode"]} />
        <circle cx="288" cy="228" r="6" className={styles["diagramNodeAccent"]} />
        <circle cx="160" cy="132" r="5" className={styles["diagramNodeCenter"]} />
      </svg>
      <figcaption className={styles["diagramLabels"]}>
        <span className={styles["diagramLabel"]}>{labels.science_diagram_thought}</span>
        <span className={styles["diagramLabel"]}>{labels.science_diagram_emotion}</span>
        <span className={styles["diagramLabelAccent"]}>
          {labels.science_diagram_behavior}
        </span>
      </figcaption>
    </figure>
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

          <div className={styles["visual"]}>
            <CbtTriangleDiagram
              labels={{
                science_diagram_thought: t.science_diagram_thought,
                science_diagram_emotion: t.science_diagram_emotion,
                science_diagram_behavior: t.science_diagram_behavior,
              }}
            />
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

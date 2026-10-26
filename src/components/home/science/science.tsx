import styles from "@/styles/Science.module.css";

import PhoneMockup, { type PhoneMockupClasses } from "@/components/ui/phone-mockup";
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

function ScienceVisual({
  labels,
  cbtLabel,
}: {
  labels: Pick<
    TranslationDictionary,
    "science_diagram_thought" | "science_diagram_emotion" | "science_diagram_behavior"
  >;
  cbtLabel: string;
}) {
  const cx = 100;
  const side = 108;
  const height = (side * Math.sqrt(3)) / 2;
  const centroidY = 178;
  const yTop = centroidY - (2 * height) / 3;
  const yBase = yTop + height;
  const halfBase = side / 2;

  const triTop = { x: cx, y: yTop };
  const triLeft = { x: cx - halfBase, y: yBase };
  const triRight = { x: cx + halfBase, y: yBase };
  const triCenter = { x: cx, y: centroidY };

  const phoneClasses: PhoneMockupClasses = {
    phone: styles["phone"] ?? "",
    phoneFrame: styles["phoneFrame"] ?? "",
    phoneScreen: styles["phoneScreen"] ?? "",
    phoneLine: styles["phoneLine"] ?? "",
    phoneHome: styles["phoneHome"] ?? "",
  };

  const ariaLabel = `TCC: ${labels.science_diagram_thought}, ${labels.science_diagram_emotion}, ${labels.science_diagram_behavior}`;

  return (
    <PhoneMockup
      clipPathId="science-screen"
      classes={phoneClasses}
      ariaLabel={ariaLabel}
    >
      <rect
        x={40}
        y={56}
        width={120}
        height={264}
        rx={8}
        className={styles["screenBg"]}
      />

      <polygon
        points={`${triTop.x},${triTop.y} ${triLeft.x},${triLeft.y} ${triRight.x},${triRight.y}`}
        className={styles["screenTriangle"]}
      />

      <line
        x1={triTop.x}
        y1={triTop.y}
        x2={triLeft.x}
        y2={triLeft.y}
        className={styles["screenLine"]}
      />
      <line
        x1={triTop.x}
        y1={triTop.y}
        x2={triRight.x}
        y2={triRight.y}
        className={styles["screenLine"]}
      />
      <line
        x1={triLeft.x}
        y1={triLeft.y}
        x2={triRight.x}
        y2={triRight.y}
        className={styles["screenLine"]}
      />

      <line
        x1={triTop.x}
        y1={triTop.y}
        x2={triCenter.x}
        y2={triCenter.y}
        className={styles["screenLineInner"]}
      />
      <line
        x1={triLeft.x}
        y1={triLeft.y}
        x2={triCenter.x}
        y2={triCenter.y}
        className={styles["screenLineInner"]}
      />
      <line
        x1={triRight.x}
        y1={triRight.y}
        x2={triCenter.x}
        y2={triCenter.y}
        className={styles["screenLineInner"]}
      />

      <circle cx={triTop.x} cy={triTop.y} r={7} className={styles["screenNode"]} />
      <circle cx={triLeft.x} cy={triLeft.y} r={7} className={styles["screenNode"]} />
      <circle
        cx={triRight.x}
        cy={triRight.y}
        r={7}
        className={styles["screenNodeAccent"]}
      />
      <circle
        cx={triCenter.x}
        cy={triCenter.y}
        r={18}
        className={styles["screenNodeCenter"]}
      />

      <text
        x={triCenter.x}
        y={triCenter.y + 4}
        textAnchor="middle"
        className={styles["screenCbtLabel"]}
      >
        {cbtLabel}
      </text>

      <text
        x={triTop.x}
        y={triTop.y - 14}
        textAnchor="middle"
        className={styles["screenLabel"]}
      >
        {labels.science_diagram_thought}
      </text>
      <text
        x={triLeft.x}
        y={triLeft.y + 22}
        textAnchor="start"
        className={styles["screenLabel"]}
      >
        {labels.science_diagram_emotion}
      </text>
      <text
        x={triRight.x}
        y={triRight.y + 22}
        textAnchor="end"
        className={styles["screenLabelAccent"]}
      >
        {labels.science_diagram_behavior}
      </text>
    </PhoneMockup>
  );
}

export default function ScienceComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const pillars = [
    { num: "01", title: t.science_pillar_1_title, text: t.science_pillar_1_text },
    { num: "02", title: t.science_pillar_2_title, text: t.science_pillar_2_text },
    { num: "03", title: t.science_pillar_3_title, text: t.science_pillar_3_text },
  ];

  const cbtLabel =
    lang === "en" ? "CBT" : lang === "de" ? "KVT" : "TCC";

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
            <ScienceVisual
              labels={{
                science_diagram_thought: t.science_diagram_thought,
                science_diagram_emotion: t.science_diagram_emotion,
                science_diagram_behavior: t.science_diagram_behavior,
              }}
              cbtLabel={cbtLabel}
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

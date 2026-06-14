import styles from "@/styles/ProfessionalsDashboard.module.css";

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

function DashboardMockup({
  labels,
}: {
  labels: {
    patient: string;
    sheet: string;
    behavior: string;
    history: string;
    phases: string;
  };
}) {
  return (
    <figure className={styles["mockup"]}>
      <svg
        className={styles["mockupSvg"]}
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Dashboard: ${labels.patient}, ${labels.sheet}, ${labels.history}`}
      >
        <rect
          x="8"
          y="8"
          width="384"
          height="284"
          rx="12"
          className={styles["mockFrame"]}
        />
        <rect x="8" y="8" width="56" height="284" rx="12" className={styles["mockSidebar"]} />
        <rect x="20" y="28" width="32" height="32" rx="8" className={styles["mockAccent"]} />
        <rect x="20" y="72" width="32" height="32" rx="8" className={styles["mockText"]} />
        <rect x="20" y="116" width="32" height="32" rx="8" className={styles["mockText"]} />

        <text x="80" y="36" className={styles["mockLabel"]}>
          {labels.patient}
        </text>
        <rect x="80" y="48" width="120" height="10" rx="4" className={styles["mockText"]} />
        <rect x="80" y="64" width="80" height="8" rx="3" className={styles["mockText"]} />

        <rect x="80" y="88" width="148" height="72" rx="8" className={styles["mockFrame"]} />
        <text x="92" y="108" className={styles["mockLabelMuted"]}>
          {labels.sheet}
        </text>
        <rect x="92" y="116" width="124" height="6" rx="2" className={styles["mockText"]} />
        <rect x="92" y="128" width="100" height="6" rx="2" className={styles["mockText"]} />
        <rect x="92" y="140" width="110" height="6" rx="2" className={styles["mockText"]} />

        <rect x="240" y="88" width="144" height="72" rx="8" className={styles["mockFrame"]} />
        <text x="252" y="108" className={styles["mockLabelMuted"]}>
          {labels.behavior}
        </text>
        <rect x="252" y="116" width="120" height="6" rx="2" className={styles["mockText"]} />
        <rect x="252" y="128" width="90" height="6" rx="2" className={styles["mockText"]} />

        <rect x="80" y="172" width="304" height="56" rx="8" className={styles["mockFrame"]} />
        <text x="92" y="192" className={styles["mockLabelMuted"]}>
          {labels.phases}
        </text>
        <rect x="92" y="200" width="200" height="8" rx="4" className={styles["mockScience"]} />
        <rect x="92" y="214" width="140" height="6" rx="2" className={styles["mockText"]} />

        <rect x="80" y="240" width="304" height="44" rx="8" className={styles["mockFrame"]} />
        <text x="92" y="260" className={styles["mockLabelMuted"]}>
          {labels.history}
        </text>
        <rect x="92" y="268" width="260" height="6" rx="2" className={styles["mockText"]} />

        <line x1="64" y1="8" x2="64" y2="292" className={styles["mockLine"]} />
      </svg>
      {/* DASHBOARD_SCREENSHOT_SLOT — replace SVG with real dashboard capture when available */}
    </figure>
  );
}

export default function ProfessionalsDashboardComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const cards = [
    { num: "01", title: t.pro_dashboard_card_1_title, text: t.pro_dashboard_card_1_text },
    { num: "02", title: t.pro_dashboard_card_2_title, text: t.pro_dashboard_card_2_text },
    { num: "03", title: t.pro_dashboard_card_3_title, text: t.pro_dashboard_card_3_text },
  ];

  return (
    <section
      className={styles["section"]}
      id="dashboard"
      aria-labelledby="pro-dashboard-title"
    >
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["layout"]}>
          <div className={styles["copy"]}>
            <span className={styles["eyebrow"]}>
              <span className={styles["dot"]} aria-hidden />
              {t.pro_dashboard_eyebrow}
            </span>
            <h2 id="pro-dashboard-title" className={styles["title"]}>
              {highlightWord(
                t.pro_dashboard_title,
                t.pro_dashboard_highlight,
                styles["highlight"] ?? "",
              )}
            </h2>
            <p className={styles["text"]}>{t.pro_dashboard_text}</p>
          </div>

          <div className={styles["visual"]}>
            <DashboardMockup
              labels={{
                patient: t.pro_dashboard_mock_patient,
                sheet: t.pro_dashboard_mock_sheet,
                behavior: t.pro_dashboard_mock_behavior,
                history: t.pro_dashboard_mock_history,
                phases: t.pro_dashboard_mock_phases,
              }}
            />
          </div>
        </div>

        <div className={styles["grid"]}>
          {cards.map((c) => (
            <article key={c.num} className={styles["card"]}>
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

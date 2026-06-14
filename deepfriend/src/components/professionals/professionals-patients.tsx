import styles from "@/styles/ProfessionalsPatients.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

function PhoneMockup() {
  const frame = { x: 20, y: 8, w: 160, h: 344, rx: 24 };
  const screen = { x: 32, y: 48, w: 136, h: 280, rx: 12 };
  const pad = 12;
  const contentL = screen.x + pad;
  const contentR = screen.x + screen.w - pad;
  const contentW = contentR - contentL;
  const screenBottom = screen.y + screen.h;
  const frameBottom = frame.y + frame.h;
  const homeY = (screenBottom + frameBottom) / 2;

  return (
    <figure className={styles["phone"]}>
      <svg
        viewBox="0 0 200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden
      >
        <defs>
          <clipPath id="pro-patients-screen">
            <rect
              x={screen.x}
              y={screen.y}
              width={screen.w}
              height={screen.h}
              rx={screen.rx}
            />
          </clipPath>
        </defs>

        <rect
          x={frame.x}
          y={frame.y}
          width={frame.w}
          height={frame.h}
          rx={frame.rx}
          className={styles["phoneFrame"]}
        />
        <rect
          x={screen.x}
          y={screen.y}
          width={screen.w}
          height={screen.h}
          rx={screen.rx}
          className={styles["phoneScreen"]}
        />

        <rect
          x={100 - 20}
          y={frame.y + 14}
          width={40}
          height={5}
          rx={2.5}
          className={styles["phoneLine"]}
        />

        <g clipPath="url(#pro-patients-screen)">
          <rect
            x={contentL}
            y={68}
            width={70}
            height={24}
            rx={10}
            className={styles["phoneBubble"]}
          />
          <rect
            x={contentL}
            y={100}
            width={54}
            height={5}
            rx={2.5}
            className={styles["phoneLine"]}
          />
          <rect
            x={contentL}
            y={111}
            width={62}
            height={5}
            rx={2.5}
            className={styles["phoneLine"]}
          />
          <rect
            x={contentR - 64}
            y={132}
            width={64}
            height={22}
            rx={10}
            className={styles["phoneBubbleUser"]}
          />
          <rect
            x={contentL}
            y={168}
            width={78}
            height={24}
            rx={10}
            className={styles["phoneBubble"]}
          />
          <rect
            x={contentL}
            y={200}
            width={46}
            height={5}
            rx={2.5}
            className={styles["phoneLine"]}
          />
          <rect
            x={contentL}
            y={218}
            width={Math.min(92, contentW)}
            height={28}
            rx={10}
            className={styles["phoneBubble"]}
          />
        </g>

        <rect
          x={100 - 24}
          y={homeY - 2.5}
          width={48}
          height={5}
          rx={2.5}
          className={styles["phoneHome"]}
        />
      </svg>
    </figure>
  );
}

export default function ProfessionalsPatientsComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const bullets = [
    t.pro_patients_bullet_1,
    t.pro_patients_bullet_2,
    t.pro_patients_bullet_3,
  ];

  return (
    <section className={styles["section"]} aria-labelledby="pro-patients-title">
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["layout"]}>
          <div className={styles["copy"]}>
            <span className={styles["eyebrow"]}>
              <span className={styles["dot"]} aria-hidden />
              {t.pro_patients_eyebrow}
            </span>
            <span className={styles["label"]}>{t.pro_patients_label}</span>
            <h2 id="pro-patients-title" className={styles["title"]}>
              {t.pro_patients_title}
            </h2>
            <p className={styles["text"]}>{t.pro_patients_text}</p>
            <ul className={styles["bullets"]}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className={styles["visual"]}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

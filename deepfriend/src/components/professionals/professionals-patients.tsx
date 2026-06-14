import styles from "@/styles/ProfessionalsPatients.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

function PhoneMockup() {
  return (
    <figure className={styles["phone"]}>
      <svg
        viewBox="0 0 200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden
      >
        <rect
          x="20"
          y="8"
          width="160"
          height="344"
          rx="24"
          className={styles["phoneFrame"]}
        />
        <rect
          x="32"
          y="48"
          width="136"
          height="280"
          rx="12"
          className={styles["phoneScreen"]}
        />
        <rect x="80" y="24" width="40" height="6" rx="3" className={styles["phoneLine"]} />
        <rect x="48" y="72" width="72" height="28" rx="10" className={styles["phoneBubble"]} />
        <rect x="48" y="108" width="56" height="8" rx="3" className={styles["phoneLine"]} />
        <rect x="48" y="122" width="64" height="8" rx="3" className={styles["phoneLine"]} />
        <rect x="88" y="156" width="64" height="24" rx="10" className={styles["phoneBubbleUser"]} />
        <rect x="48" y="196" width="80" height="28" rx="10" className={styles["phoneBubble"]} />
        <rect x="48" y="232" width="48" height="8" rx="3" className={styles["phoneLine"]} />
        <rect x="48" y="268" width="104" height="32" rx="10" className={styles["phoneBubble"]} />
        <circle cx="100" cy="340" r="16" fill="rgba(36, 153, 139, 0.35)" />
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

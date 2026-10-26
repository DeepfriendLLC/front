import styles from "@/styles/ProfessionalsPatients.module.css";

import PhoneMockup, { type PhoneMockupClasses, PHONE_SCREEN } from "@/components/ui/phone-mockup";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

function PatientsPhoneContent() {
  const screen = PHONE_SCREEN;
  const pad = 12;
  const contentL = screen.x + pad;
  const contentR = screen.x + screen.w - pad;
  const contentW = contentR - contentL;

  return (
    <>
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
    </>
  );
}

export default function ProfessionalsPatientsComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const bullets = [
    t.pro_patients_bullet_1,
    t.pro_patients_bullet_2,
    t.pro_patients_bullet_3,
  ];

  const phoneClasses: PhoneMockupClasses = {
    phone: styles["phone"] ?? "",
    phoneFrame: styles["phoneFrame"] ?? "",
    phoneScreen: styles["phoneScreen"] ?? "",
    phoneLine: styles["phoneLine"] ?? "",
    phoneHome: styles["phoneHome"] ?? "",
  };

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
            <PhoneMockup clipPathId="pro-patients-screen" classes={phoneClasses}>
              <PatientsPhoneContent />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}

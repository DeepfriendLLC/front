import styles from "@/styles/Trust.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

const ICONS = {
  cbt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 17V7a3 3 0 0 1 3-3h2v16H7a3 3 0 0 1-3-3Z" />
      <path d="M15 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2V4Z" />
      <path d="M9 12h6" />
    </svg>
  ),
  control: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  notes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  ),
  crisis: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 20h16L12 3Z" strokeLinejoin="round" />
      <path d="M12 10v4M12 17h.01" strokeLinecap="round" />
    </svg>
  ),
};

export default function ProfessionalsTrustComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const items = [
    { icon: ICONS.cbt, label: t.pro_trust_cbt, science: true },
    { icon: ICONS.control, label: t.pro_trust_control, science: true },
    { icon: ICONS.notes, label: t.pro_trust_notes },
    { icon: ICONS.crisis, label: t.pro_trust_crisis },
  ];

  return (
    <section className={styles["section"]} aria-label="Professionals trust">
      <div className={`df-shell ${styles["shell-professionals"]}`}>
        <ul className={styles["grid"]}>
          {items.map((it, i) => (
            <li key={i} className={styles["item"]}>
              <span
                className={`${styles["icon"]}${it.science ? ` ${styles["iconScience"]}` : ""}`}
              >
                {it.icon}
              </span>
              <span className={styles["label"]}>{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

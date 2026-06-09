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
  privacy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  investor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M5 5l14 14" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
};

export default function TrustComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const items = [
    { icon: ICONS.cbt, label: t.trust_cbt, science: true },
    { icon: ICONS.privacy, label: t.trust_privacy },
    { icon: ICONS.investor, label: t.trust_independent },
    { icon: ICONS.clock, label: t.trust_24_7 },
  ];

  return (
    <section className={styles['section']} aria-label="Trust">
      <div className={`df-shell ${styles['shell']}`}>
        <ul className={styles['grid']}>
          {items.map((it, i) => (
            <li key={i} className={styles['item']}>
              <span
                className={`${styles['icon']}${it.science ? ` ${styles['iconScience']}` : ""}`}
              >
                {it.icon}
              </span>
              <span className={styles['label']}>{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

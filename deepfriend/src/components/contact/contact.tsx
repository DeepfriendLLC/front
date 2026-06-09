import styles from "@/styles/Contact.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

const CHANNELS = [
  {
    href: "mailto:hello@dfbubbles.com",
    email: "hello@dfbubbles.com",
    titleKey: "contact_email_title" as const,
    descKey: "contact_email_desc" as const,
    variant: "general" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 7l9 6 9-6" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    href: "mailto:help@dfbubbles.com",
    email: "help@dfbubbles.com",
    titleKey: "contact_help_title" as const,
    descKey: "contact_help_desc" as const,
    variant: "support" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4" strokeLinecap="round" />
        <path d="M12 17h.01" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
];

export function ContactComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles["section"]} aria-labelledby="contact-title">
      <div className={styles["gridBg"]} aria-hidden />
      <div className={`df-shell ${styles["shell"]}`}>
        <header className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.contact_eyebrow}
          </span>
          <h1 id="contact-title" className={styles["title"]}>
            {t.contact_title}
          </h1>
          <p className={styles["text"]}>{t.contact_text}</p>
        </header>

        <div className={styles["grid"]}>
          {CHANNELS.map((channel) => (
            <a
              key={channel.email}
              href={channel.href}
              className={`${styles["card"]} ${styles[`card_${channel.variant}`]}`}
            >
              <span className={styles["iconWrap"]} aria-hidden>
                {channel.icon}
              </span>
              <div className={styles["cardBody"]}>
                <span className={styles["cardLabel"]}>{t[channel.titleKey]}</span>
                <p className={styles["cardDesc"]}>{t[channel.descKey]}</p>
                <span className={styles["cardValue"]}>{channel.email}</span>
              </div>
              <span className={styles["arrow"]} aria-hidden>
                →
              </span>
            </a>
          ))}
        </div>

        <p className={styles["note"]}>{t.contact_note}</p>
      </div>
    </section>
  );
}

import styles from "@/styles/Contact.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export function ContactComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['head']}>
          <span className={styles['eyebrow']}>{t.contact_eyebrow}</span>
          <h1 className={styles['title']}>{t.contact_title}</h1>
          <p className={styles['text']}>{t.contact_text}</p>
        </div>

        <div className={styles['grid']}>
          <a href="mailto:hello@dfbubbles.com" className={styles['card']}>
            <div className={styles['iconWrap']} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 7l9 6 9-6" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
              </svg>
            </div>
            <div className={styles['cardBody']}>
              <span className={styles['cardLabel']}>{t.contact_email_title}</span>
              <span className={styles['cardValue']}>hello@dfbubbles.com</span>
            </div>
            <span className={styles['arrow']} aria-hidden>→</span>
          </a>

          <a href="mailto:help@dfbubbles.com" className={styles['card']}>
            <div className={styles['iconWrap']} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <div className={styles['cardBody']}>
              <span className={styles['cardLabel']}>{t.contact_help_title}</span>
              <span className={styles['cardValue']}>help@dfbubbles.com</span>
            </div>
            <span className={styles['arrow']} aria-hidden>→</span>
          </a>

          <div className={`${styles['card']} ${styles['cardInfo']}`}>
            <div className={styles['iconWrap']} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div className={styles['cardBody']}>
              <span className={styles['cardLabel']}>{t.contact_response_title}</span>
              <span className={styles['cardValueSmall']}>{t.contact_response_text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

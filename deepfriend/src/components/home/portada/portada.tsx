import styles from "@/styles/Portada.module.css";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import BlueWhale from "@/../public/images/blue/blue-white.png";
import GooglePlayLogo from "@/../public/icons/google-play/logo.png";

const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

export default function PortadaComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['hero']}>
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['copy']}>
          <span className={styles['eyebrow']}>
            <span className={styles['dot']} aria-hidden />
            {t.hero_eyebrow}
          </span>

          <h1 className={styles['title']}>{t.hero_title}</h1>
          <p className={styles['subtitle']}>{t.hero_subtitle}</p>

          <div className={styles['actions']}>
            <a
              href={GOOGLE_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['ctaPrimary']}
              aria-label={t.hero_cta_primary}
            >
              <Image
                alt=""
                src={GooglePlayLogo}
                className={styles['ctaIcon']}
              />
              {t.hero_cta_primary}
            </a>
            <a href="#approach" className={styles['ctaSecondary']}>
              {t.hero_cta_secondary} →
            </a>
          </div>

          <ul className={styles['micro']}>
            <li>{t.hero_micro_downloads}</li>
            <li>{t.hero_micro_privacy}</li>
            <li>{t.hero_micro_rating}</li>
          </ul>
        </div>

        <div className={styles['visual']} aria-hidden>
          <div className={styles['visualCard']}>
            <div className={styles['gridBg']} />
            <Image
              alt="Blue, the whale"
              src={BlueWhale}
              className={styles['whale']}
              priority
            />
            <div className={styles['chat']}>
              <div className={styles['bubble']}>
                {lang === "es"
                  ? "Estoy aquí. Cuéntame qué te pasa por la cabeza."
                  : lang === "de"
                  ? "Ich bin hier. Erzähl mir, was dir durch den Kopf geht."
                  : "I'm here. Tell me what's on your mind."}
              </div>
              <div className={`${styles['bubble']} ${styles['bubbleAlt']}`}>
                {lang === "es"
                  ? "Llevo varios días con mucha ansiedad."
                  : lang === "de"
                  ? "Ich habe seit Tagen starke Angst."
                  : "I've been very anxious for several days."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

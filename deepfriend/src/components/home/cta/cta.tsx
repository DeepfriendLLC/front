import styles from "@/styles/Cta.module.css";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import GooglePlayLogo from "@/../public/icons/google-play/logo.png";

const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

export default function CtaComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <h2 className={styles['title']}>{t.cta_title}</h2>
        <p className={styles['text']}>{t.cta_text}</p>
        <a
          href={GOOGLE_PLAY}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['cta']}
        >
          <Image alt="" src={GooglePlayLogo} className={styles['icon']} />
          {t.cta_button}
        </a>
      </div>
    </section>
  );
}

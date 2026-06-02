import styles from "@/styles/Team.module.css";
import Image from "next/image";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import PabloImage from "@/../public/images/pablo/pablo.png";

export default function TeamComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['head']}>
          <span className={styles['eyebrow']}>{t.about_pablo_title} · {t.about_psy_title}</span>
          <h2 className={styles['title']}>
            {lang === "es"
              ? "Las personas detrás de Deepfriend."
              : lang === "de"
                ? "Die Menschen hinter Deepfriend."
                : "The people behind Deepfriend."}
          </h2>
        </div>

        <div className={styles['grid']}>
          <article className={styles['card']}>
            <div className={styles['media']}>
              <Image
                alt={t.about_pablo_name}
                src={PabloImage}
                className={styles['image']}
              />
            </div>
            <div className={styles['body']}>
              <span className={styles['label']}>{t.about_pablo_title}</span>
              <h3 className={styles['name']}>{t.about_pablo_name}</h3>
              <span className={styles['role']}>{t.about_pablo_role}</span>
              <p className={styles['text']}>{t.about_pablo_text}</p>
            </div>
          </article>

        </div>

        <div className={styles['independent']}>
          <h3 className={styles['independentTitle']}>{t.about_independent_title}</h3>
          <p className={styles['independentText']}>{t.about_independent_text}</p>
        </div>
      </div>
    </section>
  );
}

/*
<article className={`${styles['card']} ${styles['cardAdvisor']}`}>
  <div className={`${styles['media']} ${styles['mediaAdvisor']}`} aria-hidden>
    <span className={styles['monogram']}>AG</span>
  </div>
  <div className={styles['body']}>
    <span className={styles['label']}>{t.about_psy_title}</span>
    <h3 className={styles['name']}>{t.about_psy_name}</h3>
    <span className={styles['role']}>{t.about_psy_role}</span>
    <p className={styles['text']}>{t.about_psy_text}</p>
  </div>
</article>
*/
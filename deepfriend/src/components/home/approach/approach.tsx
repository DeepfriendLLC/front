import styles from "@/styles/Approach.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function ApproachComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles['section']} id="approach" aria-labelledby="approach-title">
      <div className={`df-shell ${styles['shell']}`}>
        <header className={styles['head']}>
          <span className={styles['eyebrow']}>{t.approach_eyebrow}</span>
          <h2 id="approach-title" className={styles['title']}>{t.approach_title}</h2>
          <p className={styles['text']}>{t.approach_text}</p>
        </header>

        <div className={styles['grid']}>
          <article className={styles['card']}>
            <div className={styles['cardNum']}>01</div>
            <h3 className={styles['cardTitle']}>{t.approach_pillar_1_title}</h3>
            <p className={styles['cardText']}>{t.approach_pillar_1_text}</p>
          </article>
          <article className={styles['card']}>
            <div className={styles['cardNum']}>02</div>
            <h3 className={styles['cardTitle']}>{t.approach_pillar_2_title}</h3>
            <p className={styles['cardText']}>{t.approach_pillar_2_text}</p>
          </article>
          <article className={styles['card']}>
            <div className={styles['cardNum']}>03</div>
            <h3 className={styles['cardTitle']}>{t.approach_pillar_3_title}</h3>
            <p className={styles['cardText']}>{t.approach_pillar_3_text}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

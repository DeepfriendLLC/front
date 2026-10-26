import styles from "@/styles/Team.module.css";
import Image from "next/image";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import PabloImage from "@/../public/images/pablo/pablo.png";

export default function TeamComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles["section"]} aria-labelledby="about-team-title">
      <div className={`df-shell ${styles["shell"]}`}>
        <header className={styles["head"]}>
          <span className={styles["eyebrow"]}>
            <span className={styles["dot"]} aria-hidden />
            {t.about_pablo_title}
          </span>
          <h2 id="about-team-title" className={styles["title"]}>
            {t.about_team_title}
          </h2>
        </header>

        <article className={styles["card"]}>
          <div className={styles["media"]}>
            <Image
              alt={t.about_pablo_name}
              src={PabloImage}
              className={styles["image"]}
            />
          </div>
          <div className={styles["body"]}>
            <span className={styles["label"]}>{t.about_pablo_title}</span>
            <h3 className={styles["name"]}>{t.about_pablo_name}</h3>
            <span className={styles["role"]}>{t.about_pablo_role}</span>
            <p className={styles["text"]}>{t.about_pablo_text}</p>
          </div>
        </article>

        <aside className={styles["independent"]} aria-labelledby="about-independent-title">
          <h3 id="about-independent-title" className={styles["independentTitle"]}>
            {t.about_independent_title}
          </h3>
          <p className={styles["independentText"]}>{t.about_independent_text}</p>
        </aside>
      </div>
    </section>
  );
}

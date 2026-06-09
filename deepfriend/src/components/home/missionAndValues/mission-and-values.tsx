import styles from "@/styles/MissionAndValues.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function MissionAndValuesComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const items = [
    { num: "01", title: t.about_mission_title, text: t.about_mission_text },
    { num: "02", title: t.about_values_title, text: t.about_values_text },
  ];

  return (
    <section className={styles["section"]} aria-label={`${t.about_mission_title} · ${t.about_values_title}`}>
      <div className={`df-shell ${styles["shell"]}`}>
        {items.map((item) => (
          <article key={item.num} className={styles["card"]}>
            <div className={styles["cardNum"]}>{item.num}</div>
            <h3 className={styles["title"]}>{item.title}</h3>
            <p className={styles["text"]}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

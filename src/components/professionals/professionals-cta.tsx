import styles from "@/styles/ProfessionalsCta.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

const CONTACT_HREF =
  "mailto:hello@dfbubbles.com?subject=Professionals";

export default function ProfessionalsCtaComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <section className={styles["section"]}>
      <div className={`df-shell ${styles["shell"]}`}>
        <h2 className={styles["title"]}>{t.pro_cta_title}</h2>
        <p className={styles["text"]}>{t.pro_cta_text}</p>
        <a href={CONTACT_HREF} className={styles["cta"]}>
          {t.pro_cta_button}
        </a>
      </div>
    </section>
  );
}

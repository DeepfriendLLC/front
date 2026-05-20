import styles from "@/styles/MissionAndValues.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function MissionAndValuesComponent({ lang }: { lang: Locale }) {

  return (
    <div className={styles['container']}>
      <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_mission_title']}
        </h1>
        <h1 className={styles['text']}>
          {TranslationTexts[lang]!['home_mission_text']}
        </h1>
      </div>
      <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_values_title']}
        </h1>
        <h1 className={styles['text']}>
          {TranslationTexts[lang]!['home_values_text']}
        </h1>
      </div>
    </div>
  );
}

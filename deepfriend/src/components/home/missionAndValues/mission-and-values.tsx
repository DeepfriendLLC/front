"use client";

import styles from "@/styles/MissionAndValues.module.css";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export default function MissionAndValuesComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_mission_title}
        </h1>
        <h1 className={styles.text}>
          {TranslationTexts[systemLanguage].home_mission_text}
        </h1>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_values_title}
        </h1>
        <h1 className={styles.text}>
          {TranslationTexts[systemLanguage].home_values_text}
        </h1>
      </div>
    </div>
  );
}

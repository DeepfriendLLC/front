"use client";

import styles from "@/styles/Properties.module.css";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export default function HomeProperties5Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  const googlePlayLink = "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

  const goToPlayStore = () => {
    window.open(googlePlayLink, "_blank");
  };

  return (
    <div className={styles.badgeCard}>
      <h1 className={styles.badgeTitle}>
        {TranslationTexts[systemLanguage].home_properties_5_title}
      </h1>
      <button
        onClick={goToPlayStore}
        className={styles.badgeButton}
        aria-label="Prueba Deepfriend"
      >
        {TranslationTexts[systemLanguage].home_portada_button_text}
      </button>
    </div>
  );
}

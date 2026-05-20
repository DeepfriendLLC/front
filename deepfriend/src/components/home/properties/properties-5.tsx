"use client";

import styles from "@/styles/Properties.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { useWindowWidth } from "@/hooks/width/width";
import { Locale } from "@/i18n/config";

import PcBackground from "@/../public/images/properties-badge/pc.png";
import PhoneBackground from "@/../public/images/properties-badge/phone.png";

import { CSSProperties } from "react";

export default function HomeProperties5Component({ lang }: { lang: Locale }) {
  const width = useWindowWidth();

  const googlePlayLink = "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

  const goToPlayStore = () => {
    window.open(googlePlayLink, "_blank");
  };

  const cardStyle: CSSProperties = {
    backgroundImage: `url(${width >= 1000 ? PcBackground.src : PhoneBackground.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles['badgeCard']} style={cardStyle}>
      <h1 className={styles['badgeTitle']}>
        {TranslationTexts[lang]!['home_properties_5_title']}
      </h1>
      <button
        onClick={goToPlayStore}
        className={styles['badgeButton']}
        aria-label="Prueba Deepfriend"
      >
        {TranslationTexts[lang]!['home_portada_button_text']}
      </button>
    </div>
  );
}

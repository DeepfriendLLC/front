"use client";

import styles from "@/styles/Properties.module.css";

import ZenverseImage from "@/../public/images/zenverse/zenverse.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

const BadgeComponent = ({
  title,
  text,
  backgroundColor,
  color,
}: { title: string, text: string, backgroundColor: string, color: string, }) => <div
  className={styles.badge}
  style={{
    backgroundColor,
    color,
  }}
>
    <h1 className={styles.badgeTitle}>
      {title}
    </h1>
    <h1 className={styles.badgeText}>
      {text}
    </h1>
  </div>;

export default function HomeProperties2Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.reverseContainer}>
      <div className={styles.imageContainer}>
        <Image
          alt="Deepfriend Zenverse Logo"
          src={ZenverseImage}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_properties_zenverse_title}
        </h1>
        <h1 className={styles.text}>
          {TranslationTexts[systemLanguage].home_properties_zenverse_text}
        </h1>
        <div className={styles.badgeRow}>
          <BadgeComponent
            title={TranslationTexts[systemLanguage].home_properties_zenverse_badge_0_title}
            text={TranslationTexts[systemLanguage].home_properties_zenverse_badge_0_text}
            backgroundColor="#e5b3e5"
            color="black"
          />
          <BadgeComponent
            title={TranslationTexts[systemLanguage].home_properties_zenverse_badge_1_title}
            text={TranslationTexts[systemLanguage].home_properties_zenverse_badge_1_text}
            backgroundColor="#c77dc7"
            color="white"
          />
          <BadgeComponent
            title={TranslationTexts[systemLanguage].home_properties_zenverse_badge_2_title}
            text={TranslationTexts[systemLanguage].home_properties_zenverse_badge_2_text}
            backgroundColor="#a855a8"
            color="white"
          />
        </div>
      </div>
    </div>
  );
}

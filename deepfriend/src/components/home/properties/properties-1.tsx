"use client";

import styles from "@/styles/Properties.module.css";

import MindfulnessImage from "@/../public/images/mindfulness/minffulness.png";

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

export default function HomeProperties1Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt="Deepfriend Scientific Mindfulness Logo"
          src={MindfulnessImage}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_properties_mindfulness_title}
        </h1>
        <h1 className={styles.text}>
          {TranslationTexts[systemLanguage].home_properties_mindfulness_text}
        </h1>
        <div className={styles.badgeRow}>
          <BadgeComponent
            title={TranslationTexts[systemLanguage].home_properties_mindfulness_badge_0_title}
            text={TranslationTexts[systemLanguage].home_properties_mindfulness_badge_0_text}
            backgroundColor="#24998B"
            color="white"
          />
          <BadgeComponent
            title={TranslationTexts[systemLanguage].home_properties_mindfulness_badge_1_title}
            text={TranslationTexts[systemLanguage].home_properties_mindfulness_badge_1_text}
            backgroundColor="#24998B"
            color="white"
          />
          <BadgeComponent
            title={TranslationTexts[systemLanguage].home_properties_mindfulness_badge_2_title}
            text={TranslationTexts[systemLanguage].home_properties_mindfulness_badge_2_text}
            backgroundColor="#24998B"
            color="white"
          />
        </div>
      </div>
    </div>
  );
}

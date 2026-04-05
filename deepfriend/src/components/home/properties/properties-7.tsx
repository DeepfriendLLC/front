"use client";

import styles from "@/styles/Properties.module.css";

import MindfulnessImage from "@/../public/images/mindfulness/stars-white.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export default function HomeProperties7Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.reverseContainer}>
      <div className={styles.imageContainerProduct}>
        <Image
          alt="Deepfriend Mindfulness"
          src={MindfulnessImage}
          className={styles.productImage}
        />
        <h1 className={styles.productText}>
          {TranslationTexts[systemLanguage].home_properties_7_product}
        </h1>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_properties_7_title}
        </h1>
      </div>
    </div>
  );
}

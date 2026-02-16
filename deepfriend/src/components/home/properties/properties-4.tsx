"use client";

import styles from "@/styles/Properties.module.css";

import ParejaImage from "@/../public/images/peeps/pareja.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export default function HomeProperties4Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.reverseContainer}>
      <div className={styles.imageContainer}>
        <Image
          alt="Deepfriend Peeps image"
          src={ParejaImage}
          className={styles.imagePeeps}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_properties_4_title}
        </h1>
        <h1 className={styles.text}>
          {TranslationTexts[systemLanguage].home_properties_4_text}
        </h1>
      </div>
    </div>
  );
}

"use client";

import styles from "@/styles/Properties.module.css";

import LibraryImage from "@/../public/images/library/library-white.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export default function HomeProperties8Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainerProduct}>
        <Image
          alt="Deepfriend Library"
          src={LibraryImage}
          className={styles.productImage}
        />
        <h1 className={styles.productText}>
          {TranslationTexts[systemLanguage].home_properties_8_product}
        </h1>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {TranslationTexts[systemLanguage].home_properties_8_title}
        </h1>
      </div>
    </div>
  );
}

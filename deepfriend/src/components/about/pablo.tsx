"use client";

import styles from "@/styles/Pablo.module.css";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";
import { TranslationTexts } from "@/constants/translations/translations";
import Image from "next/image";

import PabloImage from "@/../public/images/pablo/pablo.png";


export function AboutPabloComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    alt="DF Contact banner image"
                    src={PabloImage}
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].about_pablo_title}
                </h1>
                <h1 className={styles.subtitle}>
                    Pablo Vallejo
                </h1>
                <h1 className={styles.text}>
                    {TranslationTexts[systemLanguage].about_pablo_text}
                </h1>
            </div>
        </div>
    );
}

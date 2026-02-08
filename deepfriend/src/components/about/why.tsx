"use client";

import styles from "@/styles/Why.module.css";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";
import { TranslationTexts } from "@/constants/translations/translations";


export function AboutWhyComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].about_why_title}
                </h1>
                <h1 className={styles.text}>
                    {TranslationTexts[systemLanguage].about_why_text}
                </h1>
            </div>
        </div>
    );
}

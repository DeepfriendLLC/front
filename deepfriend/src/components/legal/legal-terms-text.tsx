"use client";

import styles from "@/styles/Legal.module.css";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export default function LegalTermsTextContainerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_0_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_0_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_1_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_1_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_2_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_2_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_3_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_3_0_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_3_1_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_4_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_0_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_1_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_2_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_3_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_4_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_5_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_4_6_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_5_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_5_0_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_5_1_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_5_2_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_6_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_6_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_7_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_7_0_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_7_1_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_7_2_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_7_3_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_8_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_8_0_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_8_1_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_8_2_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_9_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_9_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_10_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_10_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_11_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_11_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_12_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_12_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_13_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_13_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_14_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_14_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_15_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_15_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_16_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_16_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_17_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_17_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_18_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_18_0_text}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_18_1_text}
            </h1>
            <h1 className={styles.title}>
                {TranslationTexts[systemLanguage].legal_terms_19_title}
            </h1>
            <h1 className={styles.text}>
                {TranslationTexts[systemLanguage].legal_terms_19_text}
            </h1>
        </div>
    );
}

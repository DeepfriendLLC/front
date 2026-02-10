"use client";

import styles from "@/styles/Contact.module.css";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";
import { TranslationTexts } from "@/constants/translations/translations";


export function ContactComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].contact_title}
                </h1>
                <h1 className={styles.text}>
                    {TranslationTexts[systemLanguage].contact_text}
                </h1>
            </div>
            <div className={styles.socialTextContainer}>
                <h1 className={styles.socialTitle}>
                    {TranslationTexts[systemLanguage].contact_subtitle_email}
                </h1>
                <h1 className={styles.socialText}>
                    hello@dfbubbles.com
                </h1>
                <h1 className={styles.socialText}>
                    help@dfbubbles.com
                </h1>
            </div>
        </div>
    );
}

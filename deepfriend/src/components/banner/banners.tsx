"use client";

import styles from "@/styles/Badge.module.css";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";

import ParejaImage from "@/../public/images/peeps/pareja.png";
import PandillaImage from "@/../public/images/peeps/pandilla.png";

export function AboutBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    alt="DF About banner image"
                    src={ParejaImage}
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].banner_about_title}
                </h1>
            </div>
        </div>
    );
}

export function ContactBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    alt="DF Contact banner image"
                    src={PandillaImage}
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].banner_contact_title}
                </h1>
            </div>
        </div>
    );
}

export function PrivacyPolicyBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    alt="DF Contact banner image"
                    src={PandillaImage}
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].banner_privacy_policy_title}
                </h1>
            </div>
        </div>
    );
}

export function LegalTermsBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    alt="DF Contact banner image"
                    src={PandillaImage}
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {TranslationTexts[systemLanguage].banner_legal_terms_title}
                </h1>
            </div>
        </div>
    );
}

"use client";

import styles from "@/styles/Footer.module.css";

import Image from "next/image";
import Link from "next/link";

import HeadLogoWhite from "../../../public/icon-clean.png";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

export function FooterComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    const scrollToTop = () => window.scrollTo({ top: 0, });

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <button
                    className={styles.button}
                    onClick={scrollToTop}
                >
                    <Image
                        alt="Deepfriend logo"
                        src={HeadLogoWhite}
                        className={styles.image}
                    />
                </button>
            </div>
            <div className={styles.legalContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        {TranslationTexts[systemLanguage].footer_contact}
                    </h1>
                    <h1 className={styles.text}>
                        hello@dfbubbles.com
                    </h1>
                    <h1 className={styles.text}>
                        help@dfbubbles.com
                    </h1>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        {TranslationTexts[systemLanguage].footer_links}
                    </h1>
                    <Link href={'/privacy-policy'}>
                        <h1 className={styles.text}>
                            {TranslationTexts[systemLanguage].footer_links_privacy_policy}
                        </h1>
                    </Link>
                    <Link href={'/legal-terms'}>
                        <h1 className={styles.text}>
                            {TranslationTexts[systemLanguage].footer_links_legal_terms}
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

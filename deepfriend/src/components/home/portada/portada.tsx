"use client";

import styles from "@/styles/Portada.module.css";

import { CSSProperties } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";

import Peeps from "@/../public/peeps/peeps-horizontal.png";
import GooglePlayLogo from "@/../public/icons/google-play/google-play-logo.png";

export default function PortadaComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    const googlePlayLink = "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

    const goToPlayStore = () => {
        window.open(googlePlayLink, "_blank");
    };

    const cardStyle: CSSProperties = {
        backgroundImage: `url(${Peeps.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.card}
                style={cardStyle}
            >
                <div className={styles.textCard}>
                    <div className={styles.textInnerCard}>
                        <h1 className={styles.title}>
                            Deepfriend
                        </h1>
                        <h1 className={styles.subtitle}>
                            {TranslationTexts[systemLanguage].home_portada_subtitle}
                        </h1>
                        <h1 className={styles.text}>
                            {TranslationTexts[systemLanguage].home_portada_text}
                        </h1>
                    </div>
                </div>
                <button
                    onClick={goToPlayStore}
                    className={styles.button}
                    aria-label="Download Deepfriend at Google Play Store"
                >
                    <Image
                        alt="Google Play Store Logo"
                        src={GooglePlayLogo}
                        className={styles.buttonImage}
                    />
                    {TranslationTexts[systemLanguage].home_portada_button_text}
                </button>
            </div>
        </div>
    );
}

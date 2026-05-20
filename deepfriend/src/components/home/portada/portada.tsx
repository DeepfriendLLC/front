"use client";

import styles from "@/styles/Portada.module.css";

import { CSSProperties } from "react";
import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import PcBackground from "@/../public/images/portada/pc.png";
import PhoneBackground from "@/../public/images/portada/phone.jpg";
import GooglePlayLogo from "@/../public/icons/google-play/logo.png";
import { useWindowWidth } from "@/hooks/width/width";

export default function PortadaComponent({ lang }: { lang: Locale }) {
    const width = useWindowWidth();

    const googlePlayLink = "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

    const goToPlayStore = () => {
        window.open(googlePlayLink, "_blank");
    };

    const cardStyle: CSSProperties = {
        backgroundImage: `url(${width >= 1000 ? PcBackground.src : PhoneBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className={styles['container']}>
            <div
                className={styles['card']}
                style={cardStyle}
            >
                <div className={styles['textInnerCard']}>
                    <h1 className={styles['title']}>
                        {TranslationTexts[lang]!['home_portada_title']}
                    </h1>
                    <button
                        onClick={goToPlayStore}
                        className={styles['button']}
                        aria-label="Prueba Deepfriend"
                    >
                        <Image
                            alt="Google Play Store Logo"
                            src={GooglePlayLogo}
                            className={styles['buttonImage']}
                        />
                        {TranslationTexts[lang]!['home_portada_button_text']}
                    </button>
                </div>
            </div>
        </div>
    );
}

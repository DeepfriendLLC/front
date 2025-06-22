"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import ContactBannerImageWhite from "../../public/images/contact-banner-image-white.png";
import ContactBannerImageDark from "../../public/images/contact-banner-image-dark.png";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function ContactBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container">
                <div className="page-banner-letters-0-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-title">
                        {TranslationTexts[systemLanguage].contact_banner_title}
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF Contact banner image"
                        src={systemColor === "light" ? ContactBannerImageWhite : ContactBannerImageDark}
                        className="contact-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-text">
                        {TranslationTexts[systemLanguage].contact_banner_text}
                    </h1>
                </div>
            </div>
        </div>
    );
}

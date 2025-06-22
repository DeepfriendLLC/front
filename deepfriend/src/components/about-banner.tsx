"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import AboutBannerImageWhite from "../../public/images/about-banner-image-white.png";
import AboutBannerImageDark from "../../public/images/about-banner-image-dark.png";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function AboutBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container">
                <div className="page-banner-letters-0-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-title">
                        {TranslationTexts[systemLanguage].about_badge_0_title}
                        <br />
                        {TranslationTexts[systemLanguage].about_badge_1_title}
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF About banner image"
                        src={systemColor === "light" ? AboutBannerImageWhite : AboutBannerImageDark}
                        className="about-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-text">
                        {TranslationTexts[systemLanguage].about_badge_text}
                    </h1>
                </div>
            </div>
        </div>
    );
}

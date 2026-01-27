"use client";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";

import Peep from "../../public/peeps/peep-100.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";

export default function AboutBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container">
                <div className="page-banner-letters-0-container">
                    <h1 className="basic-title">
                        {TranslationTexts[systemLanguage].about_badge_0_title}
                        <br />
                        {TranslationTexts[systemLanguage].about_badge_1_title}
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF About banner image"
                        src={Peep}
                        className="about-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container">
                    <h1 className="basic-text">
                        {TranslationTexts[systemLanguage].about_badge_text}
                    </h1>
                </div>
            </div>
        </div>
    );
}

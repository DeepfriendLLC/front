"use client";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";

import Peep from "../../public/peeps/peep-101.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";

export default function ContactBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container">
                <div className="page-banner-letters-0-container">
                    <h1 className="home-properties-1-title">
                        {TranslationTexts[systemLanguage].contact_banner_title}
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF Contact banner image"
                        src={Peep}
                        className="contact-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container">
                    <h1 className="home-properties-1-text">
                        {TranslationTexts[systemLanguage].contact_banner_text}
                    </h1>
                </div>
            </div>
        </div>
    );
}

"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import PricingBannerImageWhite from "../../public/images/pricing-banner-image-white.png";
import PricingBannerImageDark from "../../public/images/pricing-banner-image-dark.png";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function PricingBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container">
                <div className="page-banner-letters-0-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-title">
                        {TranslationTexts[systemLanguage].pricing_banner_title}
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF Pricing banner image"
                        src={systemColor === "light" ? PricingBannerImageDark : PricingBannerImageWhite}
                        className="pricing-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-text">
                        {TranslationTexts[systemLanguage].pricing_banner_text}
                    </h1>
                </div>
            </div>
        </div>
    );
}

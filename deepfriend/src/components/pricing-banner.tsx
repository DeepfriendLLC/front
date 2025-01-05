"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import PrivacyPolicyBackgroundDark from "../../public/backgrounds/legal-banner-background-dark.svg";
import PrivacyPolicyBackgroundLight from "../../public/backgrounds/legal-banner-background-light.png";

import PricingBannerImageWhite from "../../public/images/pricing-banner-image-white.png";

import Image from "next/image";
import { CSSProperties } from "react";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function PricingBannerComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        //backgroundImage: `url(${systemColor === "light" ? PrivacyPolicyBackgroundLight.src : PrivacyPolicyBackgroundDark.src})`,
    };

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container" style={cardStyle}>
                <div className="page-banner-letters-0-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-title">
                        Try the welcome Package for
                        <strong> a unique $1</strong>
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF Pricing banner image"
                        src={systemColor === "light" ? PricingBannerImageWhite : PricingBannerImageWhite}
                        className="pricing-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-text">
                        Choose the plan that best suits your needs and start your journey to better mental health today.
                    </h1>
                </div>
            </div>
        </div>
    );
}

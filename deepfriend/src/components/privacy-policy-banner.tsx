"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import PrivacyPolicyBackgroundDark from "../../public/backgrounds/legal-banner-background-dark.svg";
import PrivacyPolicyBackgroundLight from "../../public/backgrounds/legal-banner-background-light.png";

import PrivacyPolicyImageWhite from "../../public/images/privacy-policy-banner-image-white.png";
import PrivacyPolicyImageDark from "../../public/images/privacy-policy-banner-image-dark.png";

import Image from "next/image";
import { CSSProperties } from "react";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function PrivacyPolicyBannerComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        backgroundImage: `url(${systemColor === "light" ? PrivacyPolicyBackgroundLight.src : PrivacyPolicyBackgroundDark.src})`,
    };

    return (
        <div className="privacy-policy-banner-wrapper">
            <div className="privacy-policy-banner-container" style={cardStyle}>
                <div className="privacy-policy-banner-letters-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="privacy-policy-banner-letters-subtitle">
                        Read our privacy policy
                    </h1>
                    <h1 className="privacy-policy-banner-letters-title">
                        Your Rights and Our Responsibilities
                    </h1>
                </div>
                <div className="privacy-policy-banner-image-container">
                    <Image
                        alt="DF Privacy Policy image"
                        src={systemColor === "light" ? PrivacyPolicyImageWhite : PrivacyPolicyImageDark}
                        className="privacy-policy-banner-image-image"
                    />
                </div>
            </div>
        </div>
    );
}

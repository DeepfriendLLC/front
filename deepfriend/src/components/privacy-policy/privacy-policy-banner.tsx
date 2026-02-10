"use client";

import PrivacyPolicyImageWhite from "@/../public/images/privacy-policy-banner-image-white.png";

import Image from "next/image";
import { CSSProperties } from "react";

export default function PrivacyPolicyBannerComponent() {
    const cardStyle: CSSProperties = {
        //backgroundImage: `url(${PrivacyPolicyBackgroundLight.src})`,
    };

    return (
        <div className="privacy-policy-banner-wrapper">
            <div className="privacy-policy-banner-container" style={cardStyle}>
                <div className="privacy-policy-banner-letters-container" style={{ color: "black" }}>
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
                        src={PrivacyPolicyImageWhite}
                        className="privacy-policy-banner-image-image"
                    />
                </div>
            </div>
        </div>
    );
}

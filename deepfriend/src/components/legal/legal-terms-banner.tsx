"use client";

import LegalTermsImageWhite from "@/../public/images/legal-terms-banner-image-white.png";

import Image from "next/image";
import { CSSProperties } from "react";

export default function LegalTermsBannerComponent() {
    const cardStyle: CSSProperties = {
        //backgroundImage: `url(${PrivacyPolicyBackgroundLight.src})`,
    };

    return (
        <div className="privacy-policy-banner-wrapper">
            <div className="privacy-policy-banner-container" style={cardStyle}>
                <div className="privacy-policy-banner-letters-container" style={{ color: "black" }}>
                    <h1 className="privacy-policy-banner-letters-subtitle">
                        Learn about the legal guidelines
                    </h1>
                    <h1 className="privacy-policy-banner-letters-title">
                        Transparency and Compliance
                    </h1>
                </div>
                <div className="privacy-policy-banner-image-container">
                    <Image
                        alt="DF Privacy Policy image"
                        src={LegalTermsImageWhite}
                        className="legal-terms-banner-image-image"
                    />
                </div>
            </div>
        </div>
    );
}

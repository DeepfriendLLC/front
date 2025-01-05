"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import PrivacyPolicyBackgroundDark from "../../public/backgrounds/legal-banner-background-dark.svg";
import PrivacyPolicyBackgroundLight from "../../public/backgrounds/legal-banner-background-light.png";

import AboutBannerImageWhite from "../../public/images/about-banner-image-white.png";

import Image from "next/image";
import { CSSProperties } from "react";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function AboutBannerComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        //backgroundImage: `url(${systemColor === "light" ? PrivacyPolicyBackgroundLight.src : PrivacyPolicyBackgroundDark.src})`,
    };

    return (
        <div className="page-banner-wrapper">
            <div className="page-banner-container" style={cardStyle}>
                <div className="page-banner-letters-0-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-title">
                        Meet our team
                        <br />
                        Meet our process
                    </h1>
                </div>
                <div className="page-banner-image-container">
                    <Image
                        alt="DF About banner image"
                        src={systemColor === "light" ? AboutBannerImageWhite : AboutBannerImageWhite}
                        className="about-banner-image-image"
                    />
                </div>
                <div className="page-banner-letters-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <h1 className="home-properties-1-text">
                        Deepfriend was built by developers, designers, and psychologists  to take care of you.
                    </h1>
                </div>
            </div>
        </div>
    );
}

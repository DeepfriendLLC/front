"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BASIC_LIGHT_COLOR } from "../app/layout";

//import HomeBackgroundDark from "../../public/backgrounds/home_background_0_dark.svg";
//import HomeBackgroundLight from "../../public/backgrounds/home_background_0_light.svg";
import HomeBackgroundLight from "../../public/backgrounds/home_background_0_light_2.svg";
//import HomePhone from "../../public/phones/home_phone_1.svg";
import HomePhone1 from "../../public/phones/home_phone_3.svg";
import GoogleplayLogo from "../../public/icons/googleplay-logo.png";

import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeBannerComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    //const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        //backgroundImage: `url(${systemColor === "light" ? HomeBackgroundLight.src : HomeBackgroundDark.src})`,
        backgroundImage: `url(${HomeBackgroundLight.src})`,
    };

    const lettersSubContainer: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
    };

    const buttonStoresStyle: CSSProperties = {
        backgroundColor: "transparent"
    };

    const imageStoresStyle: CSSProperties = {
        width: 141,
        height: 41,
        alignSelf: "center"
    };

    return (
        <div className="home-banner-wrapper">
            <div className="home-banner-download-container">
                <h1 className="home-banner-downlowad-text" style={{
                    color: BASIC_LIGHT_COLOR,
                }}>
                    {TranslationTexts[systemLanguage].home_badge_download}
                </h1>
                <div style={lettersSubContainer}>
                    <Link href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"}>
                        <button className="btn" style={buttonStoresStyle}>
                            <Image
                                alt="DF Phone screenshot"
                                src={GoogleplayLogo}
                                style={imageStoresStyle}
                            />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="home-banner-container" style={cardStyle}>
                <div className="home-banner-letters-container">
                    <h1 className="home-banner-title" style={{
                        color: BASIC_LIGHT_COLOR,
                    }}>
                        {TranslationTexts[systemLanguage].home_badge_title}
                    </h1>
                    <h1 className="home-banner-text" style={{
                        color: BASIC_LIGHT_COLOR,
                    }}>
                        {TranslationTexts[systemLanguage].home_badge_text}
                    </h1>
                </div>
                <div className="home-banner-image-container">
                    <Image
                        alt="Deepfriend screenshot"
                        src={HomePhone1}
                        className="home-banner-image-image"
                    />
                </div>
            </div>
        </div>
    );
}

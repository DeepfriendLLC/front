"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BASIC_LIGHT_COLOR } from "../app/layout";

import HomeBackgroundDark from "../../public/backgrounds/home_background_0_dark.svg";
//import HomeBackgroundLight from "../../public/backgrounds/home_background_0_light.svg";
import HomeBackgroundLight from "../../public/backgrounds/home_background_0_light_2.svg";
//import HomePhone from "../../public/phones/home_phone_1.svg";
//import HomePhone1 from "../../public/phones/home_phone_3.svg";
import HomePhone from "../../public/phones/home_phone.png";
//import GoogleplayLogo from "../../public/icons/googleplay-logo.png";
import GoogleplayLogo from "../../public/icons/google-play-logo.png";

import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";

export default function HomeBannerComponent() {
    const router = useRouter();

    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        backgroundImage: `url(${systemColor === "light" ? HomeBackgroundLight.src : HomeBackgroundDark.src})`,
        //backgroundImage: `url(${HomeBackgroundLight.src})`,
    };

    const scrollToNext = () => {
        router.push('#🫧', { scroll: true });
    };

    return (
        <div className="home-banner-wrapper">
            <div className="home-banner-container" style={cardStyle} onClick={scrollToNext}>
                <div className="home-banner-container-0">
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
                <div className="home-banner-container-1">
                    <Image
                        alt="Deepfriend screenshot"
                        src={HomePhone}
                        className="home-banner-image"
                    />
                    <div className="home-banner-buttons-row">
                        <button className="button-0">
                            <h1 className="button-text">
                                {TranslationTexts[systemLanguage].home_badge_button_download_0}
                            </h1>
                        </button>
                        <Link href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"} style={{ textDecoration: "none" }}>
                            <button className="button-1">
                                <h1 className="button-text" style={{ textDecoration: "none" }}>
                                    {TranslationTexts[systemLanguage].home_badge_button_download_1}
                                    <Image
                                        alt="DF Phone screenshot"
                                        src={GoogleplayLogo}
                                        className="button-image"
                                    />
                                </h1>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


/*

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

            */
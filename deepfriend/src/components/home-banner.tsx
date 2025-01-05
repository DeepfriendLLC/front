"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BASIC_LIGHT_COLOR } from "../app/layout";

import HomeBackgroundDark from "../../public/backgrounds/home_background_0_dark.svg";
import HomeBackgroundLight from "../../public/backgrounds/home_background_0_light.svg";
import HomePhone from "../../public/phones/home_phone_0.svg";
import GoogleplayLogo from "../../public/icons/googleplay-logo.png";

import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";

export default function HomeBannerComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        backgroundImage: `url(${systemColor === "light" ? HomeBackgroundLight.src : HomeBackgroundDark.src})`,
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
        width: 145,
        height: 46.5,
        alignSelf: "center"
    };

    const imageStyle: CSSProperties = {
        width: 400,
        height: 400,
    };

    return (
        <div className="home-banner-wrapper">
            <div className="home-banner-download-container">
                <h1 className="home-banner-downlowad-text" style={{
                    color: BASIC_LIGHT_COLOR,
                }}>
                    Download at
                </h1>
                <div style={lettersSubContainer}>
                    <Link href={"https://play.google.com/store/apps/details?id=com.deepfriend.deepfriend"} target={"_blank"}>
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
                        Strengthen your emotional well-being
                    </h1>
                    <h1 className="home-banner-text" style={{
                        color: BASIC_LIGHT_COLOR,
                    }}>
                        Meet your personalized AI Whale for a healthier and happier you.
                    </h1>
                </div>
                <div className="home-banner-image-container">
                    <Image
                        alt="Deepfriend screenshot"
                        src={HomePhone}
                        className="home-banner-image-image"
                    />
                </div>
            </div>
        </div>
    );
}

"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BASIC_DARK_COLOR } from "../../app/layout";

import Blanca from "../../../public/people/blanca.png";

import GoogleplayLogo from "../../../public/icons/google-play-logo.png";

import Image from "next/image";
import { CSSProperties } from "react";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function PortadaComponent() {
    const router = useRouter();

    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);
    const { sessionId } = useSelector((state: RootState) => state.sessionId);

    const scrollToNext = async () => {
        await SendMetricsSessionClickAPI(sessionId, "/", "0", "in", systemColor, systemLanguage);
        router.push('#🫧', { scroll: true });
    };

    const goToGooglePlay = async () => {
        await SendMetricsSessionClickAPI(sessionId, "/", "0", "out", systemColor, systemLanguage);
        router.push(`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`);
    };

    return (
        <div className="portada-wrapper">
            <div className="portada-container" onClick={scrollToNext}>
                <div className="portada-container-0">
                    <div className="col">
                        <h1 className="portada-title" style={{
                            color: BASIC_DARK_COLOR,
                        }}>
                            {TranslationTexts[systemLanguage].home_badge_title}
                        </h1>
                        <h1 className="portada-text" style={{
                            color: BASIC_DARK_COLOR,
                        }}>
                            {TranslationTexts[systemLanguage].home_badge_text}
                        </h1>
                    </div>
                    <div className="portada-buttons-row">
                        <button className="button-0">
                            <h1 className="button-text">
                                {TranslationTexts[systemLanguage].home_badge_button_download_0}
                            </h1>
                        </button>
                        <button className="button-yellow" onClick={goToGooglePlay}>
                            <h1 className="button-text" style={{ textDecoration: "none" }}>
                                {TranslationTexts[systemLanguage].home_badge_button_download_1}
                                <Image
                                    alt="DF Phone screenshot"
                                    src={GoogleplayLogo}
                                    className="button-image"
                                />
                            </h1>
                        </button>
                    </div>
                </div>
                <div className="portada-container-1">
                    <Image
                        alt="Deepfriend screenshot"
                        src={Blanca}
                        className="portada-image"
                    />
                </div>
            </div>
        </div>
    );
}


/*
                        <Link href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"} style={{ textDecoration: "none" }}>
                        </Link>



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
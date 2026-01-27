"use client";

import { useSelector } from "react-redux";

import Peeps from "../../../public/peeps/peeps-horizontal.png";

import GoogleplayLogo from "../../../public/icons/google-play-logo.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import Link from "next/link";
import { CSSProperties } from "react";
import { RootState } from "@/hooks/store";

export default function PortadaComponent() {
    const googlePlayLink = "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    const containerCard: CSSProperties = {
        width: "100%",
        height: "auto",
    };

    const card: CSSProperties = {
        width: "100%",
        height: "auto",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    };

    const cardBackground: CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
    };

    const imageBackground: CSSProperties = {
        width: "cover",
        height: "cover",
        alignSelf: "center",
    };

    const title: CSSProperties = {
        width: "100%",
        fontFamily: "Cormorant",
        fontSize: 48,
        fontWeight: "700",
        textAlign: "center",
    };

    const subtitle: CSSProperties = {
        width: "100%",
        fontFamily: "Mulish",
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
    };

    return (
        <div style={containerCard}>
            <div style={card}>
                <h1 style={title}>
                    Deepfriend
                </h1>
                <h1 style={subtitle}>
                    Deepfriend
                </h1>
            </div>
            <div style={cardBackground}>
                <Image
                    alt="Deepfriend Peeps background"
                    src={Peeps}
                    style={imageBackground}
                />
            </div>
        </div>
    );
}

"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import PabloImage from "../../public/images/pablo.jpg";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function AboutProperties0Component() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="about-properties-0-container" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
            <div className="about-properties-0-pablo-container">
                <Image
                    alt="Pablo Vallejo, Deepfriend founder."
                    src={PabloImage}
                    className="about-properties-0-pablo-image"
                />
                <h1 className="about-properties-0-pablo-title">
                    Pablo Vallejo
                </h1>
                <h1 className="about-properties-0-pablo-founder-text">
                    {TranslationTexts[systemLanguage].about_properties_0_0_subtitle}
                </h1>
                <h1 className="about-properties-0-pablo-text">
                    {TranslationTexts[systemLanguage].about_properties_0_0_text}
                </h1>
            </div>
            <div className="about-properties-0-letters-container">
                <h1 className="about-properties-0-title">
                    {TranslationTexts[systemLanguage].about_properties_0_1_title}
                </h1>
                <h1 className="about-properties-0-text">
                    {TranslationTexts[systemLanguage].about_properties_0_1_text}
                </h1>
            </div>
        </div>
    );
}

"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import AdrianImage from "../../public/images/adrian.png";
import DeniseImage from "../../public/images/denise.png";
import AstoraLogo from "../../public/images/astora-logo.png";
import CanaryDesignLogo from "../../public/images/canary-design.png";

import AboutProperties1LinkLogoWhite from "../../public/icons/about-properties-1-card-link-logo-white.png";
import AboutProperties1LinkLogoDark from "../../public/icons/about-properties-1-card-link-logo-dark.png";

import AboutProperties1CardIconAstoraWhite from "../../public/icons/about-properties-1-card-astora-icon-white.png";
import AboutProperties1CardIconAstoraDark from "../../public/icons/about-properties-1-card-astora-icon-dark.png";

import AboutProperties1CardIconAdrianWhite from "../../public/icons/about-properties-1-card-adrian-icon-white.png";
import AboutProperties1CardIconAdrianDark from "../../public/icons/about-properties-1-card-adrian-icon-dark.png";

import AboutProperties1CardIconIvanWhite from "../../public/icons/about-properties-1-card-ivan-icon-white.png";
import AboutProperties1CardIconIvanDark from "../../public/icons/about-properties-1-card-ivan-icon-dark.png";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import Link from "next/link";
import { TranslationTexts } from "@/store/translations/translations";

export default function AboutProperties1Component() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="about-properties-1-container" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
            <h1 className="about-properties-0-title">
                {TranslationTexts[systemLanguage].about_properties_1_title}
            </h1>
            <h1 className="about-properties-0-text">
                {TranslationTexts[systemLanguage].about_properties_1_subtitle}
            </h1>
            <div className="about-properties-1-cards-container">
                <div className="about-properties-1-cards-container-card-big" style={{ borderColor: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <div className="about-properties-1-cards-container-card-container-image">
                        <Image
                            alt="Astora logo"
                            src={AstoraLogo}
                            className="about-properties-1-cards-image"
                        />
                        <Image
                            alt="Denise de Astora"
                            src={DeniseImage}
                            className="about-properties-1-cards-image"
                        />
                    </div>
                    <div className="about-properties-1-cards-container-card-container-letters">
                        <h1 className="about-properties-1-card-title">
                            {TranslationTexts[systemLanguage].about_properties_1_0_title}
                        </h1>
                        <h1 className="about-properties-1-card-subtitle">
                            ESTUDIO ASTORA
                        </h1>
                        <h1 className="about-properties-1-card-text">
                            {TranslationTexts[systemLanguage].about_properties_1_0_text}
                        </h1>
                        <div className="about-properties-1-cards-container-card-container-link">
                            <Link href={"https://estudioastora.com/"} target="_blank" className="about-properties-1-cards-container-card-container-link-image">
                                <Image
                                    alt="DF link logo"
                                    src={systemColor === "light" ? AboutProperties1LinkLogoDark : AboutProperties1LinkLogoWhite}
                                    className="about-properties-1-cards-container-card-container-link-image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="about-properties-1-cards-container-card-icon">
                        <Image
                            alt="DF Icon"
                            src={systemColor === "light" ? AboutProperties1CardIconAstoraDark : AboutProperties1CardIconAstoraWhite}
                            className="about-properties-1-cards-container-card-icon-image"
                        />
                    </div>
                </div>
                <div className="about-properties-1-cards-container-card-big" style={{ borderColor: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    <div className="about-properties-1-cards-container-card-container-image">
                        <Image
                            alt="Adrián González, psicólogo profesional."
                            src={AdrianImage}
                            className="about-properties-1-cards-image"
                        />
                    </div>
                    <div className="about-properties-1-cards-container-card-container-letters">
                        <h1 className="about-properties-1-card-title">
                            {TranslationTexts[systemLanguage].about_properties_1_1_title}
                        </h1>
                        <h1 className="about-properties-1-card-subtitle">
                            Adrián González
                        </h1>
                        <h1 className="about-properties-1-card-text">
                            {TranslationTexts[systemLanguage].about_properties_1_1_text}
                        </h1>
                        <div className="about-properties-1-cards-container-card-container-link">
                            <Link href={"https://psicoterapiadriangonzalez.simdif.com/"} target="_blank" className="about-properties-1-cards-container-card-container-link-image">
                                <Image
                                    alt="DF link logo"
                                    src={systemColor === "light" ? AboutProperties1LinkLogoDark : AboutProperties1LinkLogoWhite}
                                    className="about-properties-1-cards-container-card-container-link-image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="about-properties-1-cards-container-card-icon">
                        <Image
                            alt="DF Icon"
                            src={systemColor === "light" ? AboutProperties1CardIconAdrianDark : AboutProperties1CardIconAdrianWhite}
                            className="about-properties-1-cards-container-card-icon-image"
                        />
                    </div>
                </div>
            </div>
            <div className="about-properties-1-cards-container-card-little" style={{ borderColor: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                <div className="about-properties-1-cards-container-card-container-image">
                    <Image
                        alt="Canary design logo"
                        src={CanaryDesignLogo}
                        className="about-properties-1-cards-image"
                    />
                </div>
                <div className="about-properties-1-cards-container-card-container-letters">
                    <h1 className="about-properties-1-card-title">
                        {TranslationTexts[systemLanguage].about_properties_1_2_title}
                    </h1>
                    <h1 className="about-properties-1-card-subtitle">
                        Ivan @canary_design
                    </h1>
                    <h1 className="about-properties-1-card-text">
                        {TranslationTexts[systemLanguage].about_properties_1_2_text}
                    </h1>
                    <div className="about-properties-1-cards-container-card-container-link">
                        <Link href={"https://www.fiverr.com/canary_design"} target="_blank" className="about-properties-1-cards-container-card-container-link-image">
                            <Image
                                alt="DF link logo"
                                src={systemColor === "light" ? AboutProperties1LinkLogoDark : AboutProperties1LinkLogoWhite}
                                className="about-properties-1-cards-container-card-container-link-image"
                            />
                        </Link>
                    </div>
                </div>
                <div className="about-properties-1-cards-container-card-icon">
                    <Image
                        alt="DF Icon"
                        src={systemColor === "light" ? AboutProperties1CardIconIvanDark : AboutProperties1CardIconIvanWhite}
                        className="about-properties-1-cards-container-card-icon-image"
                    />
                </div>
            </div>
        </div>
    );
}

"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import AdrianImage from "../../public/images/adrian.png";
import DeniseImage from "../../public/images/denise.png";
import AstoraLogo from "../../public/images/astora-logo.png";
import CanaryDesignLogo from "../../public/images/canary-design.png";
import MatiasLogo from "../../public/images/matias-logo.png";

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

export default function AboutProperties1Component() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="about-properties-1-container" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
            <h1 className="about-properties-0-title">
                The Building Blocks
            </h1>
            <h1 className="about-properties-0-text">
                This app is the result of the cooperative and harmonious work of diverse teams united by a common purpose. Specialists in their respective fields, agencies, and professionals have built a product for you, guided by our mision.
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
                            User Interface and Experience design
                        </h1>
                        <h1 className="about-properties-1-card-subtitle">
                            ESTUDIO ASTORA
                        </h1>
                        <h1 className="about-properties-1-card-text">
                            We are a professional team dedicated to brand creation, packaging, and digital product design. We craft the visual aspect, interaction, and user experience of Deepfriend. We extend the graphic universe into a comprehensive visual world.
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
                            Psicology
                        </h1>
                        <h1 className="about-properties-1-card-subtitle">
                            Adrián Gonzalez
                        </h1>
                        <h1 className="about-properties-1-card-text">
                            Licensed psychologist with honors specialized in cognitive-behavioral therapy (CBT) with 7+ years of clinical experience.
                            Focused on anxiety, stress and depression crafting personalized strategies to empower growth.
                            Passionate about guiding clients to unlock their potential through collaborative, present-focused therapy.
                            Dedicated to fostering resilience in private and corporate settings.
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
                        Bubbles design
                    </h1>
                    <h1 className="about-properties-1-card-subtitle">
                        Ivan @canary_design
                    </h1>
                    <h1 className="about-properties-1-card-text">
                        Self-taught graphic & web designer with a focus on brand identity and logo creation.
                        Combining years of freelance experience with relentless attention to detail, I craft polished, business-driven designs.
                        Ivan is the designer who has been in charge of creating the look of Bubbles.
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

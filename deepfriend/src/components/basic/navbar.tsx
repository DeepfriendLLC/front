"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/icon-clean.png";

import NavbarDropdownImageWhite from "../../../public/icons/navbar-dropdown-image-white.png";
import NavbarDropdownImageDark from "../../../public/icons/navbar-dropdown-image-dark.png";

import XLogo from "../../../public/icons/x.png";
import TiktokLogo from "../../../public/icons/tiktok.png";
import InstagramLogo from "../../../public/icons/instagram.png";

import USA from "../../../public/icons/usa.png";
import España from "../../../public/icons/españa.png";

import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { CSSProperties } from "react";
import { TranslationTexts } from "@/constants/translations/translations";
import { AllowedLanguagesEncodedType } from "@/hooks/slice/systemLanguage";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";
import { useRouter } from "next/navigation";
import { BASIC_HORIZONTAL_PADDING } from "@/constants/general";

export function Navbar(props: {
    pathname: string,
    sessionId: string,
    systemColor: "light" | "dark",
    updateSystemColor: (_systemColor: "light" | "dark") => void,
    systemLanguage: AllowedLanguagesEncodedType,
    updateSystemLanguage: (_systemLanguage: AllowedLanguagesEncodedType) => void,
}) {
    const router = useRouter();

    const pathname = props.pathname;
    const sessionId = props.sessionId;

    const systemColor = props.systemColor;
    const updateSystemColor = props.updateSystemColor;

    const systemLanguage = props.systemLanguage;
    const updateSystemLanguage = props.updateSystemLanguage;

    const updateLanguage = () => updateSystemLanguage(systemLanguage === "en" ? "es" : "en");

    const socialButtonContainerStyle: CSSProperties = {
        width: 40,
        height: 64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    };

    const phoneSocialButtonContainerStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        marginTop: 8,
    };

    const languageButtonContainerStyle: CSSProperties = {
        width: 40,
        height: 64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 8,
    };

    const socialButtonStyle: CSSProperties = {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
    };

    const socialImagenStyle: CSSProperties = {
        width: 24,
        height: 24,
        alignSelf: "center"
    };

    const changeLanguageButtonStyle: CSSProperties = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 8,
        marginBottom: 16,
    };

    const changeLanguage = <div className="col-lg-4 mx-auto" style={changeLanguageButtonStyle}>
        <button className="btn" style={socialButtonStyle} onClick={updateLanguage}>
            <Image
                alt={systemLanguage === "es" ? "Bandera España" : "Bandera USA"}
                src={systemLanguage === "es" ? España : USA}
                style={socialImagenStyle}
            />
        </button>
    </div>;

    const socialUrls: Record<"x" | "instagram" | "tiktok", string> = {
        x: `https://x.com/dfbubbles_app`,
        instagram: `https://www.instagram.com/dfbubbles_app`,
        tiktok: `https://www.tiktok.com/@dfbubbles_app`,
    };

    const goToSocial = async (type: "x" | "instagram" | "tiktok") => {
        await SendMetricsSessionClickAPI(sessionId, pathname, "0", "social", systemColor, systemLanguage);
        router.push(socialUrls[type]);
    };

    const navbarContainer: CSSProperties = {
        width: "100vw",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",

        paddingRight: BASIC_HORIZONTAL_PADDING,
        paddingLeft: BASIC_HORIZONTAL_PADDING,
    };

    const titleContainer: CSSProperties = {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
    };

    const title: CSSProperties = {
        fontFamily: "Cormorant",
        fontSize: 32,
        fontWeight: "700",

        textAlign: "left",
        marginLeft: 16,

        color: BASIC_DARK_COLOR,
    };

    const titleLinkContainer: CSSProperties = {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
    };

    const logoImage: CSSProperties = {
        width: 48,
        height: 48,
        alignSelf: "center",
    };

    const dropdownWrapper: CSSProperties = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    };

    const dropdown: CSSProperties = {
        display: "display",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",

        position: "relative",
    };

    return (
        <div style={navbarContainer}>
            <div style={titleContainer}>
                <Link style={titleLinkContainer} href={'/'}>
                    <Image
                        alt="Deepfriend logo"
                        src={Logo}
                        style={logoImage}
                    />
                    <h1 style={title}>
                        Deepfriend
                    </h1>
                </Link>
            </div>
        </div>
    );
};


/*

<div style={dropdownWrapper}>
    <div style={dropdown}>
        <div className="dropdown-image-container">
            <Image
                alt="DF menu icon"
                src={systemColor === "light" ? NavbarDropdownImageDark : NavbarDropdownImageWhite}
                className="dropdown-image"
            />
        </div>
        <div className="dropdown-content" style={{ backgroundColor: systemColor === "light" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
            <Link href={'/'}>
                <h1 className="dropdown-content-text" style={{
                    ...(pathname === "/" ?
                        { color: "#7DB3D7", fontWeight: "800", }
                        : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
                }}>
                    {TranslationTexts[systemLanguage].navbar_0}
                </h1>
            </Link>
            <Link href={'/about'}>
                <h1 className="dropdown-content-text" style={{
                    ...(pathname === "/about" ?
                        { color: "#7DB3D7", fontWeight: "800", }
                        : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
                }}>
                    {TranslationTexts[systemLanguage].navbar_1}
                </h1>
            </Link>
            <Link href={'/contact'}>
                <h1 className="dropdown-content-text" style={{
                    ...(pathname === "/contact" ?
                        { color: "#7DB3D7", fontWeight: "800", }
                        : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
                }}>
                    {TranslationTexts[systemLanguage].navbar_2}
                </h1>
            </Link>
            <Link href={'/pricing'}>
                <h1 className="dropdown-content-text" style={{
                    ...(pathname === "/pricing" ?
                        { color: "#7DB3D7", fontWeight: "800", }
                        : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
                }}>
                    {TranslationTexts[systemLanguage].navbar_3}
                </h1>
            </Link>
            <div className="col-lg-2 mx-auto" style={phoneSocialButtonContainerStyle}>
                <button className="btn" style={socialButtonStyle} onClick={async () => await goToSocial("instagram")}>
                    <Image
                        alt="X logo"
                        src={InstagramLogo}
                        style={socialImagenStyle}
                    />
                </button>
            </div>
            <div className="col-lg-2 mx-auto" style={phoneSocialButtonContainerStyle}>
                <button className="btn" style={socialButtonStyle} onClick={async () => await goToSocial("x")}>
                    <Image
                        alt="X logo"
                        src={XLogo}
                        style={socialImagenStyle}
                    />
                </button>
            </div>
            <div className="col-lg-2 mx-auto" style={phoneSocialButtonContainerStyle}>
                <button className="btn" style={socialButtonStyle} onClick={async () => await goToSocial("tiktok")}>
                    <Image
                        alt="Tiktok logo"
                        src={TiktokLogo}
                        style={socialImagenStyle}
                    />
                </button>
            </div>
            {
                changeLanguage
            }
            {
                //checkbox
            }
        </div>
    </div>
</div>
<div className="navbar-navigation-container">
    <Link href={'/'}>
        <div className="navbar-navigation-card">
            <h1 className="navbar-navigation-text" style={{
                ...(pathname === "/" ?
                    { color: "#7DB3D7", fontWeight: "800", }
                    : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
            }}>
                {TranslationTexts[systemLanguage].navbar_0}
            </h1>
        </div>
    </Link>
    <Link href={'/about'}>
        <div className="navbar-navigation-card">
            <h1 className="navbar-navigation-text" style={{
                ...(pathname === "/about" ?
                    { color: "#7DB3D7", fontWeight: "800", }
                    : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
            }}>
                {TranslationTexts[systemLanguage].navbar_1}
            </h1>
        </div>
    </Link>
    <Link href={'/contact'}>
        <div className="navbar-navigation-card">
            <h1 className="navbar-navigation-text" style={{
                ...(pathname === "/contact" ?
                    { color: "#7DB3D7", fontWeight: "800", }
                    : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
            }}>
                {TranslationTexts[systemLanguage].navbar_2}
            </h1>
        </div>
    </Link>
</div>
<div className="navbar-social-container">
    <div className="col-lg-2 mx-auto" style={socialButtonContainerStyle}>
        <button className="btn" style={socialButtonStyle} onClick={async () => await goToSocial("tiktok")}>
            <Image
                alt="Tiktok logo"
                src={TiktokLogo}
                style={socialImagenStyle}
            />
        </button>
    </div>
    <div className="col-lg-2 mx-auto" style={languageButtonContainerStyle}>
        <button className="btn" style={socialButtonStyle} onClick={updateLanguage}>
            <Image
                alt={systemLanguage === "es" ? "Bandera España" : "Bandera USA"}
                src={systemLanguage === "es" ? España : USA}
                style={socialImagenStyle}
            />
        </button>
    </div>
    {
        //<div className="col-lg-4 mx-auto" style={socialButtonContainerInputStyle}> {checkbox} </div>
    }
</div>

*/
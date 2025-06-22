"use client";

import Image from "next/image";
import Link from "next/link";

import HeadLogoWhite from "../../public/logo/whale/logo_white.png";
import HeadLogoDark from "../../public/logo/whale/logo_dark_blue.png";

import NavbarDropdownImageWhite from "../../public/icons/navbar-dropdown-image-white.png";
import NavbarDropdownImageDark from "../../public/icons/navbar-dropdown-image-dark.png";

import XWhite from "../../public/icons/x_white.png";
import XDark from "../../public/icons/x_dark.png";

import InstagramWhite from "../../public/icons/instagram_white.png";
import InstagramDark from "../../public/icons/instagram_dark.png";

import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { CSSProperties } from "react";
import { TranslationTexts } from "@/store/translations/translations";
import { AllowedLanguagesEncodedType } from "@/store/slice/systemLanguage";

export function Navbar(props: {
    pathname: string,
    systemColor: "light" | "dark",
    updateSystemColor: (_systemColor: "light" | "dark") => void,
    systemLanguage: AllowedLanguagesEncodedType,
    updateSystemLanguage: (_systemLanguage: AllowedLanguagesEncodedType) => void,
}) {
    const pathname = props.pathname;

    const systemColor = props.systemColor;
    const updateSystemColor = props.updateSystemColor;

    const systemLanguage = props.systemLanguage;
    const updateSystemLanguage = props.updateSystemLanguage;

    const checkbox = <div className="dropdown-change-theme-checkbox-container">
        <label className="theme-switch">
            <input type="checkbox" className="theme-switch__checkbox" checked={systemColor === "light" ? false : true} onChange={() => updateSystemColor(systemColor === "light" ? "dark" : "light")} />
            <div className="theme-switch__container">
                <div className="theme-switch__clouds"></div>
                <div className="theme-switch__stars-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="theme-switch__circle-container">
                    <div className="theme-switch__sun-moon-container">
                        <div className="theme-switch__moon">
                            <div className="theme-switch__spot"></div>
                            <div className="theme-switch__spot"></div>
                            <div className="theme-switch__spot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>;

    const socialButtonContainerStyle: CSSProperties = {
        width: 54,
        height: 64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    };

    const socialButtonContainerInputStyle: CSSProperties = {
        width: 80,
        height: 64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    };

    const socialButtonStyle: CSSProperties = {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    };

    const socialImagenStyle: CSSProperties = {
        width: 24,
        height: 24,
        alignSelf: "center"
    };

    return (
        <div className="navbar-container" id="🫧">
            <div className="navbar-logo-container">
                <Image
                    alt="Deepfriend logo"
                    src={systemColor === "light" ? HeadLogoDark : HeadLogoWhite}
                    className="navbar-logo-image"
                />
                <h1 className="navbar-logo-text" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                    Deepfriend
                </h1>
            </div>
            <div className="dropdown-wrapper">
                <div className="dropdown">
                    <div className="dropdown-image-container">
                        <Image
                            alt="DF menu icon"
                            src={systemColor === "light" ? NavbarDropdownImageDark : NavbarDropdownImageWhite}
                            className="dropdown-image"
                        />
                    </div>
                    <div className="dropdown-content" style={{ backgroundColor: systemColor === "light" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                        <Link href={'/'}>
                            <h1 className="dropdown-content-text" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                                {TranslationTexts[systemLanguage].navbar_0}
                            </h1>
                        </Link>
                        <Link href={'/about'}>
                            <h1 className="dropdown-content-text" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                                {TranslationTexts[systemLanguage].navbar_1}
                            </h1>
                        </Link>
                        <Link href={'/contact'}>
                            <h1 className="dropdown-content-text" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                                {TranslationTexts[systemLanguage].navbar_2}
                            </h1>
                        </Link>
                        <Link href={'/pricing'}>
                            <h1 className="dropdown-content-text" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                                {TranslationTexts[systemLanguage].navbar_3}
                            </h1>
                        </Link>
                        {checkbox}
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
                <Link href={'/pricing'}>
                    <div className="navbar-navigation-card">
                        <h1 className="navbar-navigation-text" style={{
                            ...(pathname === "/pricing" ?
                                { color: "#7DB3D7", fontWeight: "800", }
                                : { color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, fontWeight: "500", })
                        }}>
                            {TranslationTexts[systemLanguage].navbar_3}
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-social-container">
                <Link href={'https://x.com/dfbubbles_app'} target="_blank">
                    <div className="col-lg-4 mx-auto" style={socialButtonContainerStyle}>
                        <button className="btn" style={socialButtonStyle}>
                            <Image
                                alt="X logo"
                                src={systemColor === "light" ? XDark : XWhite}
                                style={socialImagenStyle}
                            />
                        </button>
                    </div>
                </Link>
                <Link href={'https://www.instagram.com/dfbubbles_app/'} target="_blank">
                    <div className="col-lg-4 mx-auto" style={socialButtonContainerStyle}>
                        <button className="btn" style={socialButtonStyle}>
                            <Image
                                alt="X logo"
                                src={systemColor == "light" ? InstagramDark : InstagramWhite}
                                style={socialImagenStyle}
                            />
                        </button>
                    </div>
                </Link>
                <div className="col-lg-4 mx-auto" style={socialButtonContainerInputStyle}> {checkbox} </div>
            </div>
        </div>
    );
};

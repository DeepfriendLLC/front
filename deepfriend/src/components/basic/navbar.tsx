"use client";

import styles from "@/styles/Navbar.module.css";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { usePathname } from "next/navigation";

import Logo from "@/../public/icon-clean.png";
import NavbarDropdownImageDark from "@/../public/icons/navbar/dark.png";
import TiktokLogo from "@/../public/icons/social/tiktok/dark.png";

import { TranslationTexts } from "@/constants/translations/translations";

export function NavbarComponent() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToTiktok = () => {
        window.open("https://www.tiktok.com/@deepfriendlatam", "_blank");
    };

    return (
        <nav
            className={styles.navbar}
        >
            <div className={styles.leftSection}>
                <Link
                    href="/" className={styles.logoLink}
                    style={{ textDecoration: "none" }}
                >
                    <Image
                        alt="Deepfriend logo"
                        src={Logo}
                        width={40}
                        height={40}
                        priority
                    />
                    <h1 className={styles.navTitle} style={{
                        color: "black",
                    }}>
                        Deepfriend
                    </h1>
                </Link>
            </div>

            <div className={styles.desktopNav}>
                <Link
                    href="/"
                    className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
                    style={{
                        color: pathname === "/" ? "#7DB3D7" : "black",
                        alignSelf: "center",
                    }}
                >
                    {TranslationTexts[systemLanguage].navbar_home}
                </Link>
                <Link
                    href="/about"
                    className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}
                    style={{
                        color: pathname === "/about" ? "#7DB3D7" : "black",
                        alignSelf: "center",
                    }}
                >
                    {TranslationTexts[systemLanguage].navbar_about}
                </Link>
                <Link
                    href="/contact"
                    className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`}
                    style={{
                        color: pathname === "/contact" ? "#7DB3D7" : "black",
                        alignSelf: "center",
                    }}
                >
                    {TranslationTexts[systemLanguage].navbar_contact}
                </Link>
            </div>
            <div className={styles.desktopNavButton}>
                <button
                    onClick={goToTiktok}
                    className={styles.tiktokButton}
                    aria-label="Visit our TikTok"
                >
                    <Image
                        alt="TikTok"
                        src={TiktokLogo}
                        width={24}
                        height={24}
                    />
                </button>

                <button
                    onClick={toggleMenu}
                    className={styles.menuButton}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <Image
                        alt="Menu"
                        src={NavbarDropdownImageDark}
                        width={28}
                        height={28}
                    />
                </button>
            </div>

            {isMenuOpen && (
                <div className={styles.dropdown}>
                    <Link
                        href="/"
                        className={`${styles.dropdownLink} ${pathname === "/" ? styles.active : ""}`}
                        style={{
                            color: pathname === "/" ? "#7DB3D7" : "black",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {TranslationTexts[systemLanguage].navbar_home}
                    </Link>
                    <Link
                        href="/about"
                        className={`${styles.dropdownLink} ${pathname === "/about" ? styles.active : ""}`}
                        style={{
                            color: pathname === "/about" ? "#7DB3D7" : "black",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {TranslationTexts[systemLanguage].navbar_about}
                    </Link>
                    <Link
                        href="/contact"
                        className={`${styles.dropdownLink} ${pathname === "/contact" ? styles.active : ""}`}
                        style={{
                            color: pathname === "/contact" ? "#7DB3D7" : "black",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {TranslationTexts[systemLanguage].navbar_contact}
                    </Link>

                    <div className={styles.dropdownDivider}></div>

                    <div
                        className={styles.dropdownTiktok}
                        onClick={() => {
                            goToTiktok();
                            setIsMenuOpen(false);
                        }}
                    >
                        <Image
                            alt="TikTok"
                            src={TiktokLogo}
                            width={24}
                            height={24}
                            style={{
                                alignSelf: "center"
                            }}
                        />
                        <span
                            className={styles.dropdownTiktokText}
                            style={{
                                color: "black",
                            }}>
                            TikTok
                        </span>
                    </div>
                </div>
            )}

            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999,
                    }}
                />
            )}
        </nav>
    );
}
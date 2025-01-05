"use client";

import Image from "next/image";
import Link from "next/link";

import HeadLogoWhite from "../../public/logo/whale/logo_white.png";

export function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <Link href={'/'} className="footer-logo-image-link">
                    <Image
                        alt="Deepfriend logo"
                        src={HeadLogoWhite}
                        className="footer-logo-image"
                    />
                </Link>
            </div>
            <div className="footer-letters-container">
                <h1 className="footer-letters-title">
                    Contact Us
                </h1>
                <h1 className="footer-letters-text">
                    marketing@dfbubbles.com
                </h1>
                <h1 className="footer-letters-text">
                    it@dfbubbles.com
                </h1>
            </div>
            <div className="footer-letters-legal-container">
                <h1 className="footer-letters-title">
                    Important links
                </h1>
                <Link href={'/privacy-policy'}>
                    <h1 className="footer-letters-text" style={{ color: "#F8F8F8", textDecoration: "underline" }}>
                        Privacy Policy
                    </h1>
                </Link>
                <Link href={'/legal-terms'}>
                    <h1 className="footer-letters-text" style={{ color: "#F8F8F8", textDecoration: "underline" }}>
                        Legal Terms
                    </h1>
                </Link>
            </div>

        </div>
    );
};

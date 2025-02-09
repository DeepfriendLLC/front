"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import ContactProperties0ChainImageWhite from "../../public/images/contact-properties-0-chain-white.png";
import ContactProperties0ChainImageDark from "../../public/images/contact-properties-0-chain-dark.png";

import ContactProperties0MailImageWhite from "../../public/images/contact-properties-0-mail-white.png";
import ContactProperties0MailImageDark from "../../public/images/contact-properties-0-mail-dark.png";

import XWhite from "../../public/icons/x_white.png";
import XDark from "../../public/icons/x_dark.png";

import InstagramWhite from "../../public/icons/instagram_white.png";
import InstagramDark from "../../public/icons/instagram_dark.png";

import Image from "next/image";
import { CSSProperties } from "react";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import Link from "next/link";

export default function ContactProperties0Component() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const cardStyle: CSSProperties = {
        //backgroundImage: `url(${systemColor === "light" ? PrivacyPolicyBackgroundLight.src : PrivacyPolicyBackgroundDark.src})`,
    };

    return (
        <div className="contact-properties-0-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            <div className="contact-properties-0-letters-container">
                <h1 className="contact-properties-0-title">
                    Get in Touch
                </h1>
                <h1 className="contact-properties-0-text">
                    Feel free to contact us for suggestions and comments. We would be happy to know your opinion or help you if you need assistance or wish to report an issue with the app.
                </h1>
            </div>
            <div className="contact-properties-0-letters-container">
                <div className="contact-properties-0-letters-inner-container">
                    <div className="contact-properties-0-letters-inner-image-container">
                        <Image
                            alt="DF Contact Email image"
                            src={systemColor === "light" ? ContactProperties0MailImageWhite : ContactProperties0MailImageDark}
                            className="contact-properties-0-letters-inner-image-image"
                        />
                    </div>
                    <div className="contact-properties-0-letters-inner-letters-container">
                        <h1 className="contact-properties-0-inner-container-text">
                            hello@dfbubbles.com
                        </h1>
                        <h1 className="contact-properties-0-inner-container-text">
                            help@dfbubbles.com
                        </h1>
                    </div>
                </div>
                <div className="contact-properties-0-letters-inner-container">
                    <div className="contact-properties-0-letters-inner-image-container">
                        <Image
                            alt="DF Contact Email image"
                            src={systemColor === "light" ? ContactProperties0ChainImageWhite : ContactProperties0ChainImageDark}
                            className="contact-properties-0-letters-inner-image-image"
                        />
                    </div>
                    <div className="contact-properties-0-letters-inner-letters-container">
                        <h1 className="contact-properties-0-inner-container-text">
                            @dfbubbles
                        </h1>
                        <div className="contact-properties-0-letters-inner-letters-social-container">
                            <Link className="contact-properties-0-letters-inner-letters-social-link" href={'https://www.instagram.com/dfbubbles_app/'} target="_blank">
                                <Image
                                    alt="X logo"
                                    src={systemColor == "light" ? InstagramDark : InstagramWhite}
                                    className="contact-properties-0-letters-inner-letters-social-image"
                                />
                            </Link>
                            <Link className="contact-properties-0-letters-inner-letters-social-link" href={'https://x.com/dfbubbles_app'} target="_blank">
                                <Image
                                    alt="X logo"
                                    src={systemColor === "light" ? XDark : XWhite}
                                    className="contact-properties-0-letters-inner-letters-social-image"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

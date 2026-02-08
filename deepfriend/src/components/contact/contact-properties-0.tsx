"use client";

import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";

import ContactProperties0ChainImageWhite from "@/../public/images/contact-properties-0-chain-white.png";

import ContactProperties0MailImageWhite from "@/../public/images/contact-properties-0-mail-white.png";

import XDark from "@/../public/icons/x_dark.png";

import InstagramDark from "@/../public/icons/instagram_dark.png";

import Image from "next/image";
import Link from "next/link";
import { TranslationTexts } from "@/constants/translations/translations";

export default function ContactProperties0Component() {
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

    return (
        <div className="contact-properties-0-container">
            <div className="contact-properties-0-letters-container">
                <h1 className="contact-properties-0-title">
                    {TranslationTexts[systemLanguage].contact_properties_0_title}
                </h1>
                <h1 className="contact-properties-0-text">
                    {TranslationTexts[systemLanguage].contact_properties_0_text}
                </h1>
            </div>
            <div className="contact-properties-0-letters-container">
                <div className="contact-properties-0-letters-inner-container">
                    <div className="contact-properties-0-letters-inner-image-container">
                        <Image
                            alt="DF Contact Email image"
                            src={ContactProperties0MailImageWhite}
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
                            src={ContactProperties0ChainImageWhite}
                            className="contact-properties-0-letters-inner-image-image"
                        />
                    </div>
                    <div className="contact-properties-0-letters-inner-letters-container">
                        <h1 className="contact-properties-0-inner-container-text">
                            @dfbubbles_app
                        </h1>
                        <div className="contact-properties-0-letters-inner-letters-social-container">
                            <Link className="contact-properties-0-letters-inner-letters-social-link" href={'https://www.instagram.com/dfbubbles_app/'} target="_blank">
                                <Image
                                    alt="X logo"
                                    src={InstagramDark}
                                    className="contact-properties-0-letters-inner-letters-social-image"
                                />
                            </Link>
                            <Link className="contact-properties-0-letters-inner-letters-social-link" href={'https://x.com/dfbubbles_app'} target="_blank">
                                <Image
                                    alt="X logo"
                                    src={XDark}
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

"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import ContactBannerImageWhite from "../../public/images/contact-banner-image-white.png";
import ContactBannerImageDark from "../../public/images/contact-banner-image-dark.png";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { useState } from "react";

export default function AdminLoginComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    const [email, setEmail] = useState<string>(``);

    return (
        <div className="admin-login-container">
            <div className="admin-login-inner-container">
                <h1 className="admin-login-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    Admin sign in
                </h1>
                <h1 className="admin-login-subtitle" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    Email
                </h1>
                <input
                    type="email"
                    placeholder="Write your e-mail"
                    className="admin-login-input"
                    onChange={(event) => setEmail(event.target.value)}
                    style={{
                        color: systemColor === "light" ? "#031521" : BASIC_LIGHT_COLOR,
                        borderColor: systemColor === "light" ? "#031521" : BASIC_LIGHT_COLOR
                    }}
                />
                <h1 className="admin-login-subtitle" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                    Password
                </h1>
                <input
                    type="password"
                    placeholder="Write your password"
                    className="admin-login-input"
                    onChange={(event) => setEmail(event.target.value)}
                    style={{
                        color: systemColor === "light" ? "#031521" : BASIC_LIGHT_COLOR,
                        borderColor: systemColor === "light" ? "#031521" : BASIC_LIGHT_COLOR
                    }}
                />
                <div className="admin-login-forgot-password-container">
                    <button className="btn admin-login-forgot-password-button">
                        <h1 className="admin-login-forgot-password-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
                            Forgot your password?
                        </h1>
                    </button>
                </div>
                <button className="btn">
                    Sign in
                </button>
            </div>
        </div>
    );
}

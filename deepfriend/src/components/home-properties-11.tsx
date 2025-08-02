"use client";

import BackgroundImage from "../../public/backgrounds/ventana-background.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import Link from "next/link";
import { CSSProperties } from "react";

import GoogleplayLogo from "../../public/icons/google-play-logo.png";

export default function HomeProperties11Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const cardStyle: CSSProperties = {
    backgroundImage: `url('${BackgroundImage.src}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="home-properties-11-wrapper">
      <Link className="home-banner-link" href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"} style={{ textDecoration: "none" }}>
        <div className="home-properties-8-container" style={{
          backgroundColor: systemColor === "dark" ? BASIC_LIGHT_COLOR : "#011C2F",
        }}>
          <h1 className="home-properties-8-title" style={{
            color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR
          }}>
            {TranslationTexts[systemLanguage].home_properties_11_title}
          </h1>
          <div className="home-properties-8-container-image">
            <button className={systemColor === "light" ? "button-2" : "button-3"} style={{ alignSelf: "center", marginTop: 24 }}>
              <h1 className="button-text">
                {TranslationTexts[systemLanguage].home_badge_button_download_1}
                <Image
                  alt="DF Phone screenshot"
                  src={GoogleplayLogo}
                  className="home-banner-button-image"
                />
              </h1>
            </button>
          </div>
        </div >
      </Link>
    </div >
  );
}

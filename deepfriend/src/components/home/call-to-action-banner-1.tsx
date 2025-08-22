"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import Link from "next/link";

import GoogleplayLogo from "../../../public/icons/google-play-logo.png";

export default function CallToActionBanner1Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className="basic-wrapper">
      <Link className="home-banner-link" href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"} style={{ textDecoration: "none" }}>
        <div className="basic-container-color">
          <h1 className="basic-title" style={{
            color: BASIC_LIGHT_COLOR
          }}>
            {TranslationTexts[systemLanguage].home_properties_11_title}
            {TranslationTexts[systemLanguage].home_properties_11_title}
            {TranslationTexts[systemLanguage].home_properties_11_title}
            {TranslationTexts[systemLanguage].home_properties_11_title}
            {TranslationTexts[systemLanguage].home_properties_11_title}
          </h1>
          <button className={"button-yellow"} style={{ alignSelf: "center", marginTop: 24 }}>
            <h1 className="button-text">
              {TranslationTexts[systemLanguage].home_badge_button_download_1}
              <Image
                alt="DF Phone screenshot"
                src={GoogleplayLogo}
                className="button-image"
              />
            </h1>
          </button>
        </div >
      </Link>
    </div >
  );
}

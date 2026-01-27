"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";
import Link from "next/link";
import { CSSProperties } from "react";

import Peeps from "../../../public/peeps/peeps-horizontal.png";

export default function CallToActionBanner1Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  const containerStyle: CSSProperties = {
    backgroundImage: `url(${Peeps.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="basic-wrapper">
      <Link className="home-banner-link" href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"} style={{ textDecoration: "none" }}>
        <div className="basic-container-color" id="💞" style={containerStyle}>
          <div className="call-to-action-1-container-title">
          <h1 className="call-to-action-1-title">
            {TranslationTexts[systemLanguage].call_to_action_1_title}
          </h1>
          <h1 className="call-to-action-1-subtitle">
            {TranslationTexts[systemLanguage].call_to_action_1_subtitle}
          </h1>
          </div>
          <button className={"button-yellow"} style={{ alignSelf: "center", marginTop: 24 }}>
            <h1 className="button-text">
              {TranslationTexts[systemLanguage].download}
            </h1>
          </button>
        </div >
      </Link>
    </div >
  );
}

"use client";

import Checkimage from "../../public/icons/check.svg";
import GooglePlayLogo from "../../public/icons/googleplay-logo.png";
import BackgroundImage from "../../public/backgrounds/ventana-background.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import Link from "next/link";
import { CSSProperties } from "react";

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
      <div className="home-properties-11-container">
        <h1 className="home-properties-8-title" style={{ color: BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_11_title}
        </h1>
        <Link href={`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`} target="_blank">
          <Image
            alt="Google Play logo"
            className="home-properties-8-image"
            src={GooglePlayLogo}
          />
        </Link>
      </div >
    </div >
  );
}

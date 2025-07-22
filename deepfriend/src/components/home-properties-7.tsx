"use client";

import SafetyImage from "../../public/images/home-properties-7-1.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties7Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-1-container">
      <div className="home-properties-1-container-card">
        <Image
          alt="Deepfriend app screenshots"
          className="home-properties-7-container-image"
          src={SafetyImage}
        />
        <h1 className="home-properties-1-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_7_title}
        </h1>
        <h1 className="home-properties-1-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_7_text}
        </h1>
      </div>
    </div>
  );
}

"use client";

import Psychology from "../../public/backgrounds/psychology.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties10Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-1-container">
      <div className="home-properties-1-card">
          <Image
            alt="Deepfriend app screenshots"
            className="home-properties-10-image"
            src={Psychology}
          />
        <h1 className="home-properties-10-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_10_title}
        </h1>
        <h1 className="home-properties-10-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_10_text}
        </h1>
      </div>
    </div >
  );
}

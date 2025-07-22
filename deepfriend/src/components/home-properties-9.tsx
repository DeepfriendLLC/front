"use client";

import LevelsImageWhite from "../../public/images/phase-levels-white.svg";
import LevelsImageDark from "../../public/images/phase-levels-dark.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties9Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-9-container">
      <div className="home-properties-9-card">
        <h1 className="home-properties-9-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_9_title}
        </h1>
        <h1 className="home-properties-9-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_9_text}
        </h1>
      </div>
      <div className="home-properties-9-container-image">
        <Image
          alt="Deepfriend app screenshots"
          className="home-properties-9-image"
          src={systemColor === 'light' ? LevelsImageDark : LevelsImageWhite}
        />
      </div>
    </div >
  );
}

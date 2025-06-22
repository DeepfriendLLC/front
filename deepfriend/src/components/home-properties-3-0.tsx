"use client";

import ImageProperties30 from "../../public/phones/home-properties-3-screenshot-0.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties30Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-3-container" style={{ backgroundColor: "#7DB3D7" }}>
      <h1 className="home-properties-2-card-title" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        {TranslationTexts[systemLanguage].home_properties_3_0_title}
      </h1>
      <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        {TranslationTexts[systemLanguage].home_properties_3_0_text}
      </h1>
      <div className="home-properties-3-card-image">
        <Image
          alt="Deepfriend app screenshot"
          src={ImageProperties30}
          className="home-properties-3-image"
        />
      </div>
    </div>
  );
}

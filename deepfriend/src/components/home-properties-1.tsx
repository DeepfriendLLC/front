"use client";

import Phones from "../../public/phones/home-properties-1.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties1Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-1-container">
      <div className="home-properties-1-container-image">
        <Image
          alt="Deepfriend app screenshots"
          className="home-properties-1-image"
          src={Phones}
        />
      </div>
      <div className="home-properties-1-container-letters">
        <h1 className="home-properties-1-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_1_title}
        </h1>
        <h1 className="home-properties-1-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_1_text}
        </h1>
      </div>
    </div >
  );
}

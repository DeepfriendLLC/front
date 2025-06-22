"use client";

import Icon0Dark from "../../public/icons/home-properties-card-0-dark-1.png";
import Icon0White from "../../public/icons/home-properties-card-0-white-1.png";
import Icon1Dark from "../../public/icons/home-properties-card-1-dark.png";
import Icon1White from "../../public/icons/home-properties-card-1-white.png";
import Icon2Dark from "../../public/icons/home-properties-card-2-dark-1.png";
import Icon2White from "../../public/icons/home-properties-card-2-white-1.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties0Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-0-container">
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon0Dark : Icon0White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          {TranslationTexts[systemLanguage].home_properties_0_0_title}
        </h1>
        <h1 className="home-properties-0-text">
          {TranslationTexts[systemLanguage].home_properties_0_0_text}
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon1Dark : Icon1White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          {TranslationTexts[systemLanguage].home_properties_0_1_title}
        </h1>
        <h1 className="home-properties-0-text">
          {TranslationTexts[systemLanguage].home_properties_0_1_text}
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon2Dark : Icon2White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          {TranslationTexts[systemLanguage].home_properties_0_2_title}
        </h1>
        <h1 className="home-properties-0-text">
          {TranslationTexts[systemLanguage].home_properties_0_2_text}
        </h1>
      </div>
    </div>
  );
}

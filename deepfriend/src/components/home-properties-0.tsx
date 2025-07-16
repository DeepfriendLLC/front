"use client";

import Icon0Dark from "../../public/icons/home-properties-card-0-dark-1.png";
import Icon0White from "../../public/icons/home-properties-card-0-white-1.png";
import Icon1Dark from "../../public/icons/home-properties-card-1-dark.png";
import Icon1White from "../../public/icons/home-properties-card-1-white.png";
import Icon2Dark from "../../public/icons/home-properties-card-2-dark-1.png";
import Icon2White from "../../public/icons/home-properties-card-2-white-1.png";
import Icon3Dark from "../../public/icons/home-properties-0-clock-dark.svg";
import Icon3White from "../../public/icons/home-properties-0-clock-light.svg";
import Icon4Dark from "../../public/icons/home-properties-0-robot-dark.svg";
import Icon4White from "../../public/icons/home-properties-0-robot-light.svg";
import Icon5Dark from "../../public/icons/home-properties-0-cheap-dark.png";
import Icon5White from "../../public/icons/home-properties-0-cheap-light.png";

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
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={systemColor === "light" ? Icon3Dark : Icon3White}
            className="home-properties-0-icon"
          />
        </div>
        <div className="home-properties-0-container-letters">
          <h1 className="home-properties-0-title">
            {TranslationTexts[systemLanguage].home_properties_0_3_title}
          </h1>
          <h1 className="home-properties-0-text">
            {TranslationTexts[systemLanguage].home_properties_0_3_text}
          </h1>
        </div>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={systemColor === "light" ? Icon4Dark : Icon4White}
            className="home-properties-0-icon"
          />
        </div>
        <div className="home-properties-0-container-letters">
          <h1 className="home-properties-0-title">
            {TranslationTexts[systemLanguage].home_properties_0_1_title}
          </h1>
          <h1 className="home-properties-0-text">
            {TranslationTexts[systemLanguage].home_properties_0_1_text}
          </h1>
        </div>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={systemColor === "light" ? Icon5Dark : Icon5White}
            className="home-properties-0-icon"
          />
        </div>
        <div className="home-properties-0-container-letters">
          <h1 className="home-properties-0-title">
            {TranslationTexts[systemLanguage].home_properties_0_4_title}
          </h1>
          <h1 className="home-properties-0-text">
            {TranslationTexts[systemLanguage].home_properties_0_4_text}
          </h1>
        </div>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={systemColor === "light" ? Icon0Dark : Icon0White}
            className="home-properties-0-icon"
          />
        </div>
        <div className="home-properties-0-container-letters">
          <h1 className="home-properties-0-title">
            {TranslationTexts[systemLanguage].home_properties_0_0_title}
          </h1>
          <h1 className="home-properties-0-text">
            {TranslationTexts[systemLanguage].home_properties_0_0_text}
          </h1>
        </div>
      </div>
    </div>
  );
}

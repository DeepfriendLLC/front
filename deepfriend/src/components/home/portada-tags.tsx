"use client";

import Science from "../../../public/tag-icons/science.png";
import Privacy from "../../../public/tag-icons/incognito.png";
import Security from "../../../public/tag-icons/shield.png";
import Heal from "../../../public/tag-icons/heal.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function PortadaTagsComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-0-container">
      <div className={"home-properties-0-card"} style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={Science}
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
      <div className={"home-properties-0-card"} style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={Privacy}
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
      <div className={"home-properties-0-card"} style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={Security}
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
      <div className={"home-properties-0-card"} style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className='home-properties-0-container-icon'>
          <Image
            alt="DF Web icon"
            src={Heal}
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

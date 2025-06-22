"use client";

import ImageProperties2Phone from "../../public/phones/home-properties-2.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties2Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-2-wrapped">
      <div className="home-properties-2-container" style={{ backgroundColor: systemColor === 'light' ? "#011C2F" : "#F8F8F8" }}>
        <div className="home-properties-2-card-image">
          <Image
            alt="DF Web icon"
            src={ImageProperties2Phone}
            className="home-properties-2-image-image"
          />
        </div>
        <div className="home-properties-2-card-letters">
          <h1 className="home-properties-2-card-title" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            {TranslationTexts[systemLanguage].home_properties_2_title}
          </h1>
          <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            {TranslationTexts[systemLanguage].home_properties_2_0_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_2_1_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_2_2_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_2_3_text}
          </h1>
          {
            /*
          <div className="home-properties-2-card-letters-row">
            <Image
              alt="DF Web icon"
              src={systemColor === "dark" ? ImageProperties2Letters0Dark : ImageProperties2Letters0White}
              style={imageLetters0Style}
            />
            <Image
              alt="DF Web icon"
              src={systemColor === "dark" ? ImageProperties2Letters1Dark : ImageProperties2Letters1White}
              style={imageLetters1Style}
            />
          </div>
            */
          }
        </div>
      </div>
    </div>
  );
}

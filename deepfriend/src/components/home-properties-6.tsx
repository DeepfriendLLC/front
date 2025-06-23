"use client";

import PabloImage from "../../public/images/pablo-sin-fondo.png";

import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties6Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-6-container">
      <div className="home-properties-6-card" style={{
        backgroundColor: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR,
      }}>
        <div className="home-properties-6-card-letters">
          <h1 className="home-properties-6-title" style={{
            color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
          }}>
            Pablo Vallejo
          </h1>
          <h1 className="home-properties-6-text" style={{
            color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
          }}>
            {TranslationTexts[systemLanguage].home_properties_6_0_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_6_1_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_6_2_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_6_3_text}
            <br />
            <br />
            {TranslationTexts[systemLanguage].home_properties_6_4_text}
          </h1>
        </div>
        <div className="home-properties-6-card-image-container">
          <Image
            alt="Pablo Vallejo, Deepfriend founder"
            src={PabloImage}
            className="home-properties-5-card-image"
            style={{
              backgroundColor: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
            }}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import ImageProperties4White from "../../public/icons/home-properties-4-check-white.png";
import ImageProperties4Dark from "../../public/icons/home-properties-4-check-dark.png";

import ImagePenguin from "../../public/images/home-properties-4-penguin.png";

import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties4Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-4-container">
      <Link className="basic-link" href={'https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend'} target={"_blank"} style={{ textDecoration: "none", color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
        <div className="home-properties-4-cards-row">
          <div className="home-properties-4-card-container-big" style={{
            borderColor: systemColor === "light" ? "#011C2F" : BASIC_LIGHT_COLOR,
          }}>
            <div className="home-properties-4-card-container-big-letters-container">
              <h1 className="home-properties-4-card-title" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : "#011C2F", textDecoration: "none" }}>
                {TranslationTexts[systemLanguage].home_properties_4_0_title}
              </h1>
              <h1 className="home-properties-4-card-money-text">
                <strong style={{ fontSize: 54, marginRight: 4 }}>
                  $1
                </strong>
                {TranslationTexts[systemLanguage].home_properties_4_0_0_text}
              </h1>
              <h1 className="home-properties-4-card-penguin-text">
                {TranslationTexts[systemLanguage].home_properties_4_0_1_text}
              </h1>
              <h1 className="home-properties-4-card-tokens-text">
                <Image
                  alt="DF Web icon"
                  src={systemColor === "light" ? ImageProperties4Dark : ImageProperties4White}
                  className="home-properties-4-card-check-image"
                />
                18 DF
              </h1>
              <h1 className="home-properties-4-card-dashed-text">
                1DF = 0,05$
              </h1>
              <div style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                alignContent: "flex-end",
                marginTop: 24,
              }}>
                <button className={systemColor === "dark" ? "button-2" : "button-1"} style={{
                  width: "100%",
                  alignSelf: "flex-end",
                }}>
                  <h1 className="button-text">
                    {TranslationTexts[systemLanguage].home_properties_4_0_button}
                  </h1>
                </button>
              </div>
            </div>
            <div className="home-properties-4-card-container-big-image-container">
              <Image
                alt="DF Penguin package logo"
                src={ImagePenguin}
                className="home-properties-4-card-container-big-image-image"
              />
            </div>
          </div>
          <div className="home-properties-4-card-container-little" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, backgroundColor: systemColor === 'light' ? "#011C2F" : BASIC_LIGHT_COLOR }}>
            <h1 className="home-properties-4-card-title" style={{ color: systemColor === "dark" ? "#011C2F" : BASIC_LIGHT_COLOR }}>
              {TranslationTexts[systemLanguage].home_properties_4_1_title}
            </h1>
            <h1 className="home-properties-4-card-money-text">
              <strong style={{ fontSize: 54, marginRight: 4 }}>
                $29
              </strong>
              {TranslationTexts[systemLanguage].home_properties_4_1_text}
            </h1>
            <h1 className="home-properties-4-card-tokens-text">
              <Image
                alt="DF Web icon"
                src={systemColor === "dark" ? ImageProperties4Dark : ImageProperties4White}
                className="home-properties-4-card-check-image"
              />
              700 DF
            </h1>
            <h1 className="home-properties-4-card-dashed-text">
              1DF = 0.04$
            </h1>
            <button className={systemColor === "dark" ? "button-3" : "button-2"} style={{
              width: "100%",
              alignSelf: "flex-end",
            }}>
              <h1 className="button-text">
                {TranslationTexts[systemLanguage].home_properties_4_1_button}
              </h1>
            </button>
          </div>
          <div className="home-properties-4-card-container-little" style={{ color: BASIC_DARK_COLOR }}>
            <h1 className="home-properties-4-card-title" style={{ color: "#011C2F" }}>
              {TranslationTexts[systemLanguage].home_properties_4_2_title}
            </h1>
            <h1 className="home-properties-4-card-money-text">
              <strong style={{ fontSize: 54, marginRight: 4 }}>
                $57
              </strong>
              {TranslationTexts[systemLanguage].home_properties_4_2_text}
            </h1>
            <h1 className="home-properties-4-card-tokens-text">
              <Image
                alt="DF Web icon"
                src={ImageProperties4Dark}
                className="home-properties-4-card-check-image"
              />
              1 800 DF
            </h1>
            <h1 className="home-properties-4-card-dashed-text">
              1DF = 0,03$
            </h1>
            <button className="button-1-2" style={{
              width: "100%",
              alignSelf: "flex-end",
            }}>
              <h1 className="button-text">
                {TranslationTexts[systemLanguage].home_properties_4_1_button}
              </h1>
            </button>
          </div>
        </div>
      </Link>
    </div >
  );
}

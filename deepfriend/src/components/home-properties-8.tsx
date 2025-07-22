"use client";

import Checkimage from "../../public/icons/check.svg";
import GooglePlayLogo from "../../public/icons/googleplay-logo.png";
import BackgroundImage from "../../public/backgrounds/sea-and-boat-little.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import Link from "next/link";
import { CSSProperties } from "react";

export default function HomeProperties8Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const cardStyle: CSSProperties = {
    backgroundImage: `url('${BackgroundImage.src}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="home-properties-8-wrapper">
      <div className="home-properties-8-container" style={cardStyle}>
        <h1 className="home-properties-8-title" style={{ color: BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_8_title}
        </h1>
        <h1 className="home-properties-8-text" style={{ color: BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_8_text}
        </h1>
        <div className="home-properties-8-container-tags">
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={Checkimage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag" style={{ color: BASIC_LIGHT_COLOR }}>
                {TranslationTexts[systemLanguage].home_properties_8_tag_5}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={Checkimage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag" style={{ color: BASIC_LIGHT_COLOR }}>
                {TranslationTexts[systemLanguage].home_properties_8_tag_3}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={Checkimage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag" style={{ color: BASIC_LIGHT_COLOR }}>
                {TranslationTexts[systemLanguage].home_properties_8_tag_4}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={Checkimage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag" style={{ color: BASIC_LIGHT_COLOR }}>
                {TranslationTexts[systemLanguage].home_properties_8_tag_1}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={Checkimage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag" style={{ color: BASIC_LIGHT_COLOR }}>
                {TranslationTexts[systemLanguage].home_properties_8_tag_2}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={Checkimage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag" style={{ color: BASIC_LIGHT_COLOR }}>
                {TranslationTexts[systemLanguage].home_properties_8_tag_0}
              </h1>
            </div>
          </div>
        </div>
        <div className="home-properties-8-container-image">
          <Link href={`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`} target="_blank">
            <Image
              alt="Google Play logo"
              className="home-properties-8-image"
              src={GooglePlayLogo}
            />
          </Link>
        </div>
      </div >
    </div >
  );
}

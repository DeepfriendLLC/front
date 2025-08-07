"use client";

import LevelsImageWhiteEN from "../../public/images/phase-levels-white-en.svg";
import LevelsImageDarkEN from "../../public/images/phase-levels-dark-en.svg";

import LevelsImageWhiteES from "../../public/images/phase-levels-white-es.svg";
import LevelsImageDarkES from "../../public/images/phase-levels-dark-es.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import Link from "next/link";

export default function HomeProperties9Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const checkCorrectImageSRC = () => {
    if (systemLanguage === "es") {
      if (systemColor === "dark") return LevelsImageWhiteES;
      else return LevelsImageDarkES;

    } else if (systemLanguage === "en") {

      if (systemColor === "dark") return LevelsImageWhiteEN;
      else return LevelsImageDarkEN;

    } else return LevelsImageWhiteEN;
  };

  const correctImageSRC = checkCorrectImageSRC();

  return (
    <div className="home-properties-9-container" id="🐧">
      <div className="home-properties-9-card">
        <Link className="basic-link" href={`/#🐬`} target="_self" scroll>
          <h1 className="home-properties-9-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            {TranslationTexts[systemLanguage].home_properties_9_title}
          </h1>
        </Link>
        <h1 className="home-properties-9-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_9_text}
        </h1>
      </div>
      <div className="home-properties-9-container-image">
        <Link className="basic-link" href={`/#🐬`} target="_self" scroll>
          <Image
            alt="Deepfriend app screenshots"
            className="home-properties-9-image"
            src={correctImageSRC}
          />
        </Link>
      </div>
    </div >
  );
}

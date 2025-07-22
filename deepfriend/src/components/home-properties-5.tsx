"use client";

import AdrianImage from "../../public/images/adrian-1.svg";

import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function HomeProperties5Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-5-container">
      <div className="home-properties-5-card" style={{
        backgroundColor: systemColor === "dark" ? BASIC_LIGHT_COLOR : "#011C2F",
      }}>
        <h1 className="home-properties-5-name" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
        }}>
          Adrián González
        </h1>
        <h1 className="home-properties-5-text" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
        }}>
          {TranslationTexts[systemLanguage].home_properties_5_text}
        </h1>
        <Image
          alt="Adrián González, Deepfriend psichologist"
          src={AdrianImage}
          className="home-properties-5-card-image"
          style={{
            backgroundColor: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
          }}
        />
      </div>
    </div>
  );
}

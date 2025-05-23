"use client";

import { CSSProperties } from "react";

import LogoShadow from "../../public/logo/whale/logo_light_blue_shadow.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties1Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const imageStyle: CSSProperties = {
    width: 146,
    height: 113,
    alignSelf: "center"
  };

  return (
    <div className="home-properties-1-container">
      <Image
        alt="DF Web icon"
        src={LogoShadow}
        style={imageStyle}
      />
      <h1 className="home-properties-1-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Designed with a psychologist's mind and a friend's heart.
      </h1>
      <h1 className="home-properties-1-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Supervised by psychology professionals
      </h1>
    </div>
  );
}

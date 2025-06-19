"use client";

import { CSSProperties } from "react";

import ImageProperties2White from "../../public/images/home-properties-3-screenshot-0.svg";
import ImageProperties30 from "../../public/phones/home-properties-3-screenshot-0.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties30Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const imageStyle: CSSProperties = {
    width: 500,
    height: 500,
    alignSelf: "flex-end"
  };

  return (
    <div className="home-properties-3-container" style={{ backgroundColor: "#7DB3D7" }}>
      <h1 className="home-properties-2-card-title" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Customize
      </h1>
      <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Here you have the <strong> power to do it your way </strong>,
        change Bubbles' personality and configure it the way you want it to be.
        <strong> Control the psychological technique </strong>.
        Your path is unique and deserves a unique Bubbles.
      </h1>
      <div className="home-properties-3-card-image">
        <Image
          alt="Deepfriend app screenshot"
          src={ImageProperties30}
          className="home-properties-3-image"
        />
      </div>
    </div>
  );
}

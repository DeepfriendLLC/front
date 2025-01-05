"use client";

import { CSSProperties } from "react";

import ImageProperties2White from "../../public/images/home-properties-3-screenshot-1.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties31Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const imageStyle: CSSProperties = {
    width: 500,
    height: 500,
    alignSelf: "center"
  };

  return (
    <div className="home-properties-3-container" style={{ backgroundColor: "#24998B" }}>
      <h1 className="home-properties-2-card-title" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Speak freely
      </h1>
      <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Deepfriend provides a safe space for you to express yourself openly and without fear. Our call system with Bubbles will give you the perfect space for you to grow.
      </h1>
      <div className="home-properties-3-card-image">
        <Image
          alt="DF Web screenshot"
          src={ImageProperties2White}
          layout="responsive"
          style={imageStyle}
        />
      </div>
    </div>
  );
}

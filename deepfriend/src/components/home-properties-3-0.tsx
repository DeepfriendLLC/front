"use client";

import { CSSProperties } from "react";

import ImageProperties2White from "../../public/images/home-properties-3-screenshot-0.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties30Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const imageStyle: CSSProperties = {
    width: 500,
    height: 500,
    alignSelf: "center"
  };

  return (
    <div className="home-properties-3-container" style={{ backgroundColor: "#7DB3D7" }}>
      <h1 className="home-properties-2-card-title" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Customize
      </h1>
      <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        We understand that each person is unique and therefore needs unique and tailored support.
        With Bubbles, you can customize the entire process,
        choose the type of support and ensure you receive what you truly want and need.
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

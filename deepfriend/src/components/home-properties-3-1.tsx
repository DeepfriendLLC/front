"use client";

import { CSSProperties } from "react";

import ImageProperties2White from "../../public/images/home-properties-3-screenshot-1.svg";
import ImageProperties31 from "../../public/phones/home-properties-3-screenshot-1.svg";

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
        Speak
      </h1>
      <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        You don't need to write it all down,
        here you can <strong> talk directly to Bubbles</strong>.
        Express yourself comfortably in a safe environment.
        Enter the call and discover how <strong> easy and fun it can be to heal</strong>.
      </h1>
      <div className="home-properties-3-card-image">
        <Image
          alt="Deepfriend app screenshot"
          src={ImageProperties31}
          className="home-properties-3-image"
        />
      </div>
    </div>
  );
}

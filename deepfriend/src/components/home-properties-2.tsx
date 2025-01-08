"use client";

import { CSSProperties } from "react";

import ImageProperties2White from "../../public/images/image-properties-2-white.png";
import ImageProperties2Dark from "../../public/images/image-properties-2-dark.png";

import ImageProperties2Letters0White from "../../public/images/image-properties-2-letters-0-white.png";
import ImageProperties2Letters1White from "../../public/images/image-properties-2-letters-1-white.png";
import ImageProperties2Letters0Dark from "../../public/images/image-properties-2-letters-0-dark.png";
import ImageProperties2Letters1Dark from "../../public/images/image-properties-2-letters-1-dark.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties2Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const imageStyle: CSSProperties = {
    width: 514,
    height: 342,
    alignSelf: "center",
    padding: 24
  };

  const imageLetters0Style: CSSProperties = {
    width: 90,
    height: 52.5,
    alignSelf: "center"
  };

  const imageLetters1Style: CSSProperties = {
    width: 157.5,
    height: 52.5,
    alignSelf: "center",
  };

  return (
    <div className="home-properties-2-wrapped">
      <div className="home-properties-2-container" style={{ backgroundColor: systemColor === 'light' ? "#011C2F" : "#F8F8F8" }}>
        <div className="home-properties-2-card-image">
          <Image
            alt="DF Web icon"
            src={systemColor === "dark" ? ImageProperties2Dark : ImageProperties2White}
            className="home-properties-2-image-image"
          />
        </div>
        <div className="home-properties-2-card-letters">
          <h1 className="home-properties-2-card-title" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            Chat with Bubbles
          </h1>
          <h1 className="home-properties-2-card-text" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            She will support you during difficult times. Your AI whale is a reliable friend who will remember your experiences, progress, and improvements, whether in <strong>individual</strong> or <strong>group sessions</strong>.
          </h1>
          <div className="home-properties-2-card-letters-row">
            <Image
              alt="DF Web icon"
              src={systemColor === "dark" ? ImageProperties2Letters0Dark : ImageProperties2Letters0White}
              style={imageLetters0Style}
            />
            <Image
              alt="DF Web icon"
              src={systemColor === "dark" ? ImageProperties2Letters1Dark : ImageProperties2Letters1White}
              style={imageLetters1Style}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

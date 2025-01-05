"use client";

import { CSSProperties } from "react";

import Icon0Dark from "../../public/icons/home-properties-card-0-dark.png";
import Icon0White from "../../public/icons/home-properties-card-0-white.png";
import Icon1Dark from "../../public/icons/home-properties-card-1-dark.png";
import Icon1White from "../../public/icons/home-properties-card-1-white.png";
import Icon2Dark from "../../public/icons/home-properties-card-2-dark.png";
import Icon2White from "../../public/icons/home-properties-card-2-white.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties0Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const imageStyle: CSSProperties = {
    width: 54,
    height: 54,
  };

  return (
    <div className="home-properties-0-container">
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon0Dark : Icon0White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          24/7
        </h1>
        <h1 className="home-properties-0-text">
          Available whenever you need, no more appointments needed. Now support is always on call.
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon1Dark : Icon1White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          AI-Powered
        </h1>
        <h1 className="home-properties-0-text">
          Our advanced AI memory and reasoning systems allows Bubbles to give you the best support.
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon2Dark : Icon2White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          Completely Safe
        </h1>
        <h1 className="home-properties-0-text">
          We keep your data encrypted and we strongly commit to never sell it for any reason.
        </h1>
      </div>
    </div>
  );
}

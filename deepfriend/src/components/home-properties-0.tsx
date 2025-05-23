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

  return (
    <div className="home-properties-0-container">
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon1Dark : Icon1White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          Adaptable
        </h1>
        <h1 className="home-properties-0-text">
          Configure Bubbles to suit your needs.
          Choose the type of help you want.
          Bubbles has a complex memory that allows it to remember all the important things you discuss,
          no matter how much time has passed.
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon0Dark : Icon0White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          Always ready
        </h1>
        <h1 className="home-properties-0-text">
          Available wherever and whenever you want, always with the best performance and price.
          No more appointments or waiting.
          Now support is on call.
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon2Dark : Icon2White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          Scientifically based
        </h1>
        <h1 className="home-properties-0-text">
          We are committed to providing the best possible care,
          which is why we implement the most cutting-edge research in psychology.
          Deepfriend draws on Cognitive Behavioral Therapy CBT and DSM standards.
        </h1>
      </div>
    </div>
  );
}

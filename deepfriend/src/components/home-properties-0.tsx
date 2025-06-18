"use client";

import Icon0Dark from "../../public/icons/home-properties-card-0-dark-1.png";
import Icon0White from "../../public/icons/home-properties-card-0-white-1.png";
import Icon1Dark from "../../public/icons/home-properties-card-1-dark.png";
import Icon1White from "../../public/icons/home-properties-card-1-white.png";
import Icon2Dark from "../../public/icons/home-properties-card-2-dark-1.png";
import Icon2White from "../../public/icons/home-properties-card-2-white-1.png";

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
          src={systemColor === "light" ? Icon0Dark : Icon0White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          Improve your mental health with goals
        </h1>
        <h1 className="home-properties-0-text">
          Set a goal you want to achieve,
          such as "overcoming anxiety," share it with Bubbles,
          customize the process to your liking,
          and work your way up to achieve your goals.
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon1Dark : Icon1White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          More than a chatGPT prompt
        </h1>
        <h1 className="home-properties-0-text">
          Bubbles is a complex system of multiple AIs united into a large and wise whale.
          Has a great memory to remember everything you discuss,
          and is so intelligent that will truly understand you and not just give you immediate solutions.
        </h1>
      </div>
      <div className="home-properties-0-card" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <Image
          alt="DF Web icon"
          src={systemColor === "light" ? Icon2Dark : Icon2White}
          className="home-properties-0-icon"
        />
        <h1 className="home-properties-0-title">
          Science behind
        </h1>
        <h1 className="home-properties-0-text">
          Deepfriend implements the newest and most solid scientific advances in psychology.
          We are based on Cognitive Behavioral Therapy (CBT).
        </h1>
      </div>
    </div>
  );
}

"use client";

import ImageProperties4White from "../../public/icons/home-properties-4-check-white.png";
import ImageProperties4Dark from "../../public/icons/home-properties-4-check-dark.png";

import ImagePenguin from "../../public/images/home-properties-4-penguin.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import Link from "next/link";

export default function HomeProperties4Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-4-container">
      <div className="home-properties-4-cards-row">
        <div className="home-properties-4-card-container-big" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR, borderColor: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          <div className="home-properties-4-card-container-big-letters-container">
            <h1 className="home-properties-4-card-title">
              Penguin Plan
            </h1>
            <h1 className="home-properties-4-card-money-text">
              <strong style={{ fontSize: 54, marginRight: 4 }}>
                $1
              </strong>
              single payment
            </h1>
            <h1 className="home-properties-4-card-penguin-text">
              Available to buy with or without a subscription
            </h1>
            <h1 className="home-properties-4-card-tokens-text">
              <Image
                alt="DF Web icon"
                src={systemColor === "light" ? ImageProperties4Dark : ImageProperties4White}
                className="home-properties-4-card-check-image"
              />
              100 DF
            </h1>
            <h1 className="home-properties-4-card-dashed-text">
              1DF = 0,01 dollars
            </h1>
            <Link href={'https://play.google.com/store/apps/details?id=com.deepfriend.deepfriend'} target={"_blank"}>
              <button className="home-properties-4-card-button" style={{ backgroundColor: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR, color: systemColor === "light" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR }}>
                <h1 className="home-properties-4-card-button-text">
                  Try Deepfriend
                </h1>
              </button>
            </Link>
          </div>
          <div className="home-properties-4-card-container-big-image-container">
            <Image
              alt="DF Penguin package logo"
              src={ImagePenguin}
              className="home-properties-4-card-container-big-image-image"
            />
          </div>
        </div>
        <div className="home-properties-4-card-container-little" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, backgroundColor: systemColor === 'light' ? "#011C2F" : BASIC_LIGHT_COLOR }}>
          <h1 className="home-properties-4-card-title">
            Dolphin
          </h1>
          <h1 className="home-properties-4-card-money-text">
            <strong style={{ fontSize: 54, marginRight: 4 }}>
              $30
            </strong>
            per month
          </h1>
          <h1 className="home-properties-4-card-tokens-text">
            <Image
              alt="DF Web icon"
              src={systemColor === "dark" ? ImageProperties4Dark : ImageProperties4White}
              className="home-properties-4-card-check-image"
            />
            5000 DF
          </h1>
          <h1 className="home-properties-4-card-dashed-text">
            1DF = 0,006 dollars
          </h1>
          <Link href={'https://play.google.com/store/apps/details?id=com.deepfriend.deepfriend'} target={"_blank"}>
            <button className="home-properties-4-card-button" style={{ backgroundColor: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
              <h1 className="home-properties-4-card-button-text">
                Suscribe
              </h1>
            </button>
          </Link>
        </div>
        <div className="home-properties-4-card-container-little" style={{ color: BASIC_DARK_COLOR }}>
          <h1 className="home-properties-4-card-title">
            Blue Whale
          </h1>
          <h1 className="home-properties-4-card-money-text">
            <strong style={{ fontSize: 54, marginRight: 4 }}>
              $50
            </strong>
            per month
          </h1>
          <h1 className="home-properties-4-card-tokens-text">
            <Image
              alt="DF Web icon"
              src={ImageProperties4Dark}
              className="home-properties-4-card-check-image"
            />
            10000 DF
          </h1>
          <h1 className="home-properties-4-card-dashed-text">
            1DF = 0,005 dollars
          </h1>
          <Link href={'https://play.google.com/store/apps/details?id=com.deepfriend.deepfriend'} target={"_blank"}>
            <button className="home-properties-4-card-button" style={{ backgroundColor: BASIC_DARK_COLOR, color: BASIC_LIGHT_COLOR }}>
              <h1 className="home-properties-4-card-button-text">
                Suscribe
              </h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

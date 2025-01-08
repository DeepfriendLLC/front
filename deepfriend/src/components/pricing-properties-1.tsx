"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import PricingProperties1MessageWhite from "../../public/images/pricing-properties-1-message-white.png";
import PricingProperties1MessageDark from "../../public/images/pricing-properties-1-message-dark.png";

import PricingProperties1AudioWhite from "../../public/images/pricing-properties-1-audio-white.png";
import PricingProperties1AudioDark from "../../public/images/pricing-properties-1-audio-dark.png";

import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function PricingProperties1Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="pricing-properties-1-wrapper">
      <div className="pricing-properties-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className="pricing-properties-1-container-letters">
          <h1 className="pricing-properties-1-container-letters-title">
            DF stands for DeepFriend tokens
          </h1>
          <h1 className="pricing-properties-1-container-letters-text">
            These are the digital currency used within our platform to access messages and calls.
            Each message to Bubbles costs 1 DF, while each call costs 2 DF.
            We are committed to transparency and strive to be clear about any transaction involving DFs.
            <strong> You can unsubscribe from any plan whenever you desire.</strong>
          </h1>
        </div>
        <div className="pricing-properties-1-container-image">
          <Image
            alt="DF Web pricing icon"
            src={systemColor === "light" ? PricingProperties1MessageWhite : PricingProperties1MessageDark}
            className="pricing-properties-1-image-message"
          />
          <h1 className="pricing-properties-1-image-text">
            Write a message for 1 DF
          </h1>
        </div>
        <div className="pricing-properties-1-container-image">
          <Image
            alt="DF Web pricing icon"
            src={systemColor === "light" ? PricingProperties1AudioWhite : PricingProperties1AudioDark}
            className="pricing-properties-1-image-audio"
          />
          <h1 className="pricing-properties-1-image-text">
            Make a call for 2 DF per input
          </h1>
        </div>
      </div>
    </div>
  );
}

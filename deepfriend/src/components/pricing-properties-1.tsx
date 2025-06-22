"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import PricingProperties1MessageWhite from "../../public/images/pricing-properties-1-message-white.png";
import PricingProperties1MessageDark from "../../public/images/pricing-properties-1-message-dark.png";

import PricingProperties1AudioWhite from "../../public/images/pricing-properties-1-audio-white.png";
import PricingProperties1AudioDark from "../../public/images/pricing-properties-1-audio-dark.png";

import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

export default function PricingProperties1Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="pricing-properties-1-wrapper">
      <div className="pricing-properties-1-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        <div className="pricing-properties-1-container-letters">
          <h1 className="pricing-properties-1-container-letters-title">
            {TranslationTexts[systemLanguage].pricing_properties_1_title}
          </h1>
          <h1 className="pricing-properties-1-container-letters-text">
            {TranslationTexts[systemLanguage].pricing_properties_1_text}
          </h1>
        </div>
        <div className="pricing-properties-1-container-image">
          <Image
            alt="DF Web pricing icon"
            src={systemColor === "light" ? PricingProperties1MessageWhite : PricingProperties1MessageDark}
            className="pricing-properties-1-image-message"
          />
          <h1 className="pricing-properties-1-image-text">
            {TranslationTexts[systemLanguage].pricing_properties_1_0_text}
          </h1>
        </div>
        <div className="pricing-properties-1-container-image">
          <Image
            alt="DF Web pricing icon"
            src={systemColor === "light" ? PricingProperties1AudioWhite : PricingProperties1AudioDark}
            className="pricing-properties-1-image-audio"
          />
          <h1 className="pricing-properties-1-image-text">
            {TranslationTexts[systemLanguage].pricing_properties_1_1_text}
          </h1>
        </div>
      </div>
    </div>
  );
}

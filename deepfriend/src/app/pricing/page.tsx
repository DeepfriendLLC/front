"use client";

import HomeProperties4Component from "@/components/home-properties-4";
import PricingBannerComponent from "@/components/pricing-banner";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "../layout";
import PricingProperties1Component from "@/components/pricing-properties-1";
import { TranslationTexts } from "@/store/translations/translations";

export default function Pricing() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="basic-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
      <PricingBannerComponent />
      <h1 className="pricing-subtitle">
        {TranslationTexts[systemLanguage].pricing_properties_0_title}
      </h1>
      <h1 className="pricing-text">
        {TranslationTexts[systemLanguage].pricing_properties_0_text}
      </h1>
      <HomeProperties4Component />
      <PricingProperties1Component />
    </div>
  );
}

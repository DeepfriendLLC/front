"use client";

import HomeProperties4Component from "@/components/home-properties-4";
import PricingBannerComponent from "@/components/pricing-banner";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { TranslationTexts } from "@/store/translations/translations";

export default function Pricing() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div style={{ flex: 1 }}>
      <PricingBannerComponent />
      <h1 className="pricing-subtitle">
        {TranslationTexts[systemLanguage].pricing_properties_0_title}
      </h1>
      <h1 className="pricing-text">
        {TranslationTexts[systemLanguage].pricing_properties_0_text}
      </h1>
      <HomeProperties4Component />
    </div>
  );
}

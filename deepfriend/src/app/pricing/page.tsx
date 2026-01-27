"use client";

import PricingBannerComponent from "@/components/pricing-banner";
import { RootState } from "@/hooks/store";
import { useSelector } from "react-redux";
import { TranslationTexts } from "@/constants/translations/translations";
import { TarjetasPreciosComponent } from "@/components/home/precios";

export default function Pricing() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div style={{ flex: 1 }}>
      <PricingBannerComponent />
      <h1 className="pricing-subtitle">
        {TranslationTexts[systemLanguage].pricing_title}
      </h1>
      <h1 className="pricing-text">
        {TranslationTexts[systemLanguage].pricing_subtitle}
      </h1>
      <TarjetasPreciosComponent />
    </div>
  );
}

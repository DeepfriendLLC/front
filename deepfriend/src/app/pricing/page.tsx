"use client";

import HomeProperties4Component from "@/components/home-properties-4";
import PricingBannerComponent from "@/components/pricing-banner";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "../layout";
import PricingProperties1Component from "@/components/pricing-properties-1";

export default function Pricing() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="basic-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
      <PricingBannerComponent />
      <h1 className="pricing-subtitle">
        A plan for every circumstance
      </h1>
      <h1 className="pricing-text">
        At Deepfriend, we recognize that each person's path to mental wellness is unique.
        Choose the package that suits you best. Your DFs accumulate if you don't spend them, they never expire.
      </h1>
      <HomeProperties4Component />
      <PricingProperties1Component />
    </div>
  );
}

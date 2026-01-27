"use client";

import { CSSProperties } from "react";
import PortadaComponent from "@/components/home/portada";
import PortadaTagsComponent from "@/components/home/portada-tags";
import PorqueNosotrosComponent from "@/components/home/porque-nosotros";
import QueTenemosComponent from "@/components/home/que-tenemos";
import QueTenemos1Component from "@/components/home/que-tenemos-1";
import QueTenemos2Component from "@/components/home/que-tenemos-2";
import QueTenemos3Component from "@/components/home/que-tenemos-3";
import TccCienciaComponent from "@/components/home/tcc-ciencia";
import QueTenemos4Component from "@/components/home/que-tenemos-4";
import CallToActionBanner1Component from "@/components/home/call-to-action-banner-1";
import CallToActionBannerComponent from "@/components/home/call-to-action-banner";
import { BASIC_HORIZONTAL_PADDING } from "@/constants/general";

export default function Home() {
  const containerStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingLeft: BASIC_HORIZONTAL_PADDING,
    paddingRight: BASIC_HORIZONTAL_PADDING,
  };

  return (
    <div style={containerStyle}>
      <PortadaComponent />
      <PorqueNosotrosComponent />
      <QueTenemosComponent />
      <QueTenemos1Component />
      <QueTenemos2Component />
      <QueTenemos3Component />
      <QueTenemos4Component />
      <CallToActionBannerComponent />
      <TccCienciaComponent />
      <CallToActionBanner1Component />
    </div>
  );
}

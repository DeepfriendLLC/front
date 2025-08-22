"use client";

import { CSSProperties } from "react";
import PortadaComponent from "@/components/home/portada";
import PortadaTagsComponent from "@/components/home/portada-tags";
import PorqueNosotrosComponent from "@/components/home/porque-nosotros";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import QueTenemosComponent from "@/components/home/que-tenemos";
import VisibleTracker from "@/components/events/visible-tracker";
import { SendMetricsSessionFocusAPI } from "@/components/api/client-api/client-api";
import QueTenemos1Component from "@/components/home/que-tenemos-1";
import QueTenemos2Component from "@/components/home/que-tenemos-2";
import QueTenemos3Component from "@/components/home/que-tenemos-3";
import TccCienciaComponent from "@/components/home/tcc-ciencia";
import QueTenemos4Component from "@/components/home/que-tenemos-4";
import ReseñasComponent from "@/components/home/reseñas";
import CallToActionBanner1Component from "@/components/home/call-to-action-banner-1";
import CallToActionBannerComponent from "@/components/home/call-to-action-banner";

export default function Home() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const containerStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const focus = async (section: string) => {
    await SendMetricsSessionFocusAPI(sessionId, "/", section, systemColor, systemLanguage);
  };

  return (
    <div style={containerStyle}>
      <PortadaComponent />
      <PortadaTagsComponent />
      <PorqueNosotrosComponent />
      <QueTenemosComponent />
      <QueTenemos1Component />
      <QueTenemos2Component />
      <QueTenemos3Component />
      <QueTenemos4Component />
      <ReseñasComponent />
      <CallToActionBannerComponent />
      <TccCienciaComponent />
      <CallToActionBanner1Component />
      <VisibleTracker onVisible={async () => await focus("2")} />
    </div>
  );
}

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
      <VisibleTracker onVisible={async () => await focus("0")} />
      <PortadaComponent />
      <PortadaTagsComponent />
      <VisibleTracker onVisible={async () => await focus("1")} />
      <PorqueNosotrosComponent />
      <VisibleTracker onVisible={async () => await focus("2")} />
      <QueTenemosComponent />
      <VisibleTracker onVisible={async () => await focus("3")} />
      <QueTenemos1Component />
      <VisibleTracker onVisible={async () => await focus("4")} />
      <QueTenemos2Component />
      <VisibleTracker onVisible={async () => await focus("5")} />
      <QueTenemos3Component />
      <VisibleTracker onVisible={async () => await focus("6")} />
      <QueTenemos4Component />
      <VisibleTracker onVisible={async () => await focus("7")} />
      <ReseñasComponent />
      <VisibleTracker onVisible={async () => await focus("8")} />
      <CallToActionBannerComponent />
      <VisibleTracker onVisible={async () => await focus("9")} />
      <TccCienciaComponent />
      <VisibleTracker onVisible={async () => await focus("10")} />
      <CallToActionBanner1Component />
      <VisibleTracker onVisible={async () => await focus("11")} />
    </div>
  );
}

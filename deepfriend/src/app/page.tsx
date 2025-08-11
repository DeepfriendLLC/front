"use client";

import { CSSProperties } from "react";
import HomeBannerComponent from "@/components/home-banner";
import HomeProperties0Component from "@/components/home-properties-0";
import HomeProperties1Component from "@/components/home-properties-1";
import HomeProperties2Component from "@/components/home-properties-2";
import HomeProperties30Component from "@/components/home-properties-3-0";
import HomeProperties31Component from "@/components/home-properties-3-1";
import HomeProperties4Component from "@/components/home-properties-4";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "./layout";
import Script from 'next/script';
import HomeProperties5Component from "@/components/home-properties-5";
import { TranslationTexts } from "@/store/translations/translations";
import HomeProperties7Component from "@/components/home-properties-7";
import HomeProperties8Component from "@/components/home-properties-8";
import HomeProperties9Component from "@/components/home-properties-9";
import HomeProperties10Component from "@/components/home-properties-10";
import HomeProperties11Component from "@/components/home-properties-11";
import VisibleTracker from "@/components/visible-tracker";
import { SendMetricsSessionFocusAPI } from "@/components/client-api/client-api";

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
      <HomeBannerComponent />
      <HomeProperties0Component />
      <VisibleTracker onVisible={async () => await focus("1")} />
      <HomeProperties1Component />
      <VisibleTracker onVisible={async () => await focus("2")} />
      <HomeProperties9Component />
      <VisibleTracker onVisible={async () => await focus("3")} />
      <HomeProperties8Component />
      <VisibleTracker onVisible={async () => await focus("4")} />
      <HomeProperties10Component />
      <h1 id="🐳" className="home-properties-4-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        {TranslationTexts[systemLanguage].home_properties_9_title_big}
      </h1>
      <VisibleTracker onVisible={async () => await focus("5")} />
      <HomeProperties4Component />
      <VisibleTracker onVisible={async () => await focus("6")} />
      <HomeProperties2Component />
      <VisibleTracker onVisible={async () => await focus("7")} />
      <div className="home-properties-3-wrapped">
        <HomeProperties30Component />
        <HomeProperties31Component />
      </div>
      <VisibleTracker onVisible={async () => await focus("8")} />
      <h1 className="home-properties-5-title text-center" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        {TranslationTexts[systemLanguage].home_properties_5_title}
      </h1>
      <h1 className="home-properties-5-subtitle text-center" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        {TranslationTexts[systemLanguage].home_properties_5_subtitle}
      </h1>
      <HomeProperties5Component />
      <VisibleTracker onVisible={async () => await focus("9")} />
      <HomeProperties7Component />
      <VisibleTracker onVisible={async () => await focus("10")} />
      <HomeProperties11Component />
      {
        /*
          <h1 className="home-properties-4-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            {TranslationTexts[systemLanguage].home_properties_6_title}
          </h1>
          <HomeProperties6Component />
        */
      }
      <Script
        src="/twitter-pixel.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

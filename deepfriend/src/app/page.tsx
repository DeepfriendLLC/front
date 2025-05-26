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

export default function Home() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  const containerStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
      <HomeBannerComponent />
      <HomeProperties0Component />
      <HomeProperties1Component />
      <HomeProperties2Component />
      <div className="home-properties-3-wrapped">
        <HomeProperties30Component />
        <HomeProperties31Component />
      </div>
      <h1 className="home-properties-4-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
        Try the Welcome Package for a unique payment of <strong>$1</strong>
      </h1>
      <HomeProperties4Component />
      <Script
        src="/twitter-pixel.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

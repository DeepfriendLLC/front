"use client";

import { CSSProperties } from "react";
import HomeBannerComponent from "@/components/home-banner";
import HomeProperties0Component from "@/components/home-properties-0";
import HomeProperties1Component from "@/components/home-properties-1";
import HomeProperties2Component from "@/components/home-properties-2";
import HomeProperties30Component from "@/components/home-properties-3-0";
import HomeProperties31Component from "@/components/home-properties-3-1";
import HomeProperties4Component from "@/components/home-properties-4";

export default function Home() {
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
      <HomeProperties4Component />
    </div>
  );
}

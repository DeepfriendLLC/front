"use client";

import styles from "@/styles/global.module.css";

import { AboutWhyComponent } from "@/components/about/why";
import { AboutBannerComponent } from "@/components/banner/banners";
import MissionAndValuesComponent from "@/components/home/missionAndValues/mission-and-values";
import { AboutPabloComponent } from "@/components/about/pablo";

export default function About() {
  return (
    <div className={styles.basicContainer}>
      <AboutBannerComponent />
      <AboutWhyComponent />
      <MissionAndValuesComponent />
      <AboutPabloComponent />
    </div>
  );
}

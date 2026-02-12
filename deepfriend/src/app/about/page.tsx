"use client";

import styles from "@/styles/global.module.css";

import { AboutWhyComponent } from "@/components/about/why";
import { AboutBannerComponent } from "@/components/banner/banners";
import MissionAndValuesComponent from "@/components/home/missionAndValues/mission-and-values";
import { AboutPabloComponent } from "@/components/about/pablo";
import { FooterComponent } from "@/components/basic/footer";
import { NavbarComponent } from "@/components/basic/navbar";

export default function About() {
  return (
    <div className={styles.basicContainer}>
      <NavbarComponent />
      <AboutBannerComponent />
      <AboutWhyComponent />
      <MissionAndValuesComponent />
      <AboutPabloComponent />
      <FooterComponent />
    </div>
  );
}

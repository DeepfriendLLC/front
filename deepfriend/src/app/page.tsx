"use client";

import styles from "@/styles/global.module.css";

import PortadaComponent from "@/components/home/portada/portada";
import HomeProperties1Component from "@/components/home/properties/properties-1";
import HomeProperties2Component from "@/components/home/properties/properties-2";
import HomeProperties3Component from "@/components/home/properties/properties-3";
import MissionAndValuesComponent from "@/components/home/missionAndValues/mission-and-values";
import { NavbarComponent } from "@/components/basic/navbar";
import { FooterComponent } from "@/components/basic/footer";
import HomeProperties4Component from "@/components/home/properties/properties-4";

export default function Home() {
  return (
    <div className={styles.basicContainer}>
      <NavbarComponent />
      <PortadaComponent />
      <HomeProperties1Component />
      <HomeProperties2Component />
      <HomeProperties3Component />
      <HomeProperties4Component />
      <MissionAndValuesComponent />
      <FooterComponent />
    </div>
  );
}

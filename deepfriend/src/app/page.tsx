"use client";

import styles from "@/styles/global.module.css";

import { NavbarComponent } from "@/components/basic/navbar";
import { FooterComponent } from "@/components/basic/footer";

import PortadaComponent from "@/components/home/portada/portada";
import HomeProperties1Component from "@/components/home/properties/properties-1";
import HomeProperties2Component from "@/components/home/properties/properties-2";
import HomeProperties3Component from "@/components/home/properties/properties-3";
import HomeProperties4Component from "@/components/home/properties/properties-4";
import HomeProperties5Component from "@/components/home/properties/properties-5";
import HomeProperties7Component from "@/components/home/properties/properties-7";
import HomeProperties6Component from "@/components/home/properties/properties-6";
import HomeProperties8Component from "@/components/home/properties/properties-8";
import HomePropertiesLinksComponent from "@/components/home/properties/properties-links";

export default function Home() {
  return (
    <div className={styles.basicContainer}>
      <NavbarComponent />
      <PortadaComponent />
      <HomeProperties1Component />
      <HomeProperties2Component />
      <HomeProperties3Component />
      <HomeProperties4Component />
      <HomeProperties5Component />
      <HomeProperties6Component />
      <HomeProperties7Component />
      <HomeProperties8Component />
      <HomePropertiesLinksComponent />
      <FooterComponent />
    </div>
  );
}

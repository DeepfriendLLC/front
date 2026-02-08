"use client";

import styles from "@/styles/global.module.css";

import { CSSProperties } from "react";
import PortadaComponent from "@/components/home/portada/portada";
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

export default function Home() {
  return (
    <div className={styles.basicContainer}>
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

"use client";

import styles from "@/styles/global.module.css";

import PrivacyPolicyTextContainerComponent from "@/components/privacy-policy/privacy-policy-text";
import { PrivacyPolicyBannerComponent } from "@/components/banner/banners";
import { FooterComponent } from "@/components/basic/footer";
import { NavbarComponent } from "@/components/basic/navbar";

export default function PrivacyPolicy() {
  return (
    <div className={styles.basicContainer}>
      <NavbarComponent />
      <PrivacyPolicyBannerComponent />
      <PrivacyPolicyTextContainerComponent />
      <FooterComponent />
    </div>
  );
}

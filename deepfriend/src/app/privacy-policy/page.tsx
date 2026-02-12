"use client";

import styles from "@/styles/global.module.css";

import PrivacyPolicyTextContainerComponent from "@/components/privacy-policy/privacy-policy-text";
import { PrivacyPolicyBannerComponent } from "@/components/banner/banners";

export default function PrivacyPolicy() {
  return (
    <div className={styles.basicContainer}>
      <PrivacyPolicyBannerComponent />
      <PrivacyPolicyTextContainerComponent />
    </div>
  );
}

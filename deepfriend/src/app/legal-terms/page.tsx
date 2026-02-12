"use client";

import styles from "@/styles/global.module.css";

import LegalTermsTextContainerComponent from "@/components/legal/legal-terms-text";
import { LegalTermsBannerComponent } from "@/components/banner/banners";

export default function LegalTerms() {

  return (
    <div className={styles.basicContainer}>
      <LegalTermsBannerComponent />
      <LegalTermsTextContainerComponent />
    </div>
  );
}

"use client";

import styles from "@/styles/global.module.css";

import { ContactBannerComponent } from "@/components/banner/banners";

export default function Contact() {
  return (
    <div className={styles.basicContainer}>
      <ContactBannerComponent />
    </div>
  );
}

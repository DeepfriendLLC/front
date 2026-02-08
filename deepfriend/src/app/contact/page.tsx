"use client";

import styles from "@/styles/global.module.css";

import { ContactBannerComponent } from "@/components/banner/banners";
import { ContactComponent } from "@/components/contact/contact";

export default function Contact() {
  return (
    <div className={styles.basicContainer}>
      <ContactBannerComponent />
      <ContactComponent />
    </div>
  );
}

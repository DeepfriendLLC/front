"use client";

import styles from "@/styles/global.module.css";

import { ContactBannerComponent } from "@/components/banner/banners";
import { ContactComponent } from "@/components/contact/contact";
import { FooterComponent } from "@/components/basic/footer";
import { NavbarComponent } from "@/components/basic/navbar";

export default function Contact() {
  return (
    <div className={styles.basicContainer}>
      <NavbarComponent />
      <ContactBannerComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

"use client";

import styles from "@/styles/Properties.module.css";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";
import Link from "next/link";

export default function HomePropertiesLinksComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className={styles.spacedContainer}>
      <Link
        href={"./about"}
        className={styles.bigButton}
      >
        {TranslationTexts[systemLanguage].home_properties_links_about}
      </Link>
      <Link
        href={"contact"}
        className={styles.bigButton}
      >
        {TranslationTexts[systemLanguage].home_properties_links_contact}
      </Link>
    </div>
  );
}

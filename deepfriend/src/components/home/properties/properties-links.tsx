import styles from "@/styles/Properties.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";
import Link from "next/link";

export default function HomePropertiesLinksComponent({ lang }: { lang: Locale }) {
  return (
    <div className={styles['spacedContainer']}>
      <Link
        href={"./about"}
        className={styles['bigButton']}
      >
        {TranslationTexts[lang]!['home_properties_links_about']}
      </Link>
      <Link
        href={"contact"}
        className={styles['bigButton']}
      >
        {TranslationTexts[lang]!['home_properties_links_contact']}
      </Link>
    </div>
  );
}

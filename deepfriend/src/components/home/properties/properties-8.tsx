import styles from "@/styles/Properties.module.css";

import LibraryImage from "@/../public/images/library/library-white.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function HomeProperties8Component({ lang }: { lang: Locale }) {
  return (
    <div className={styles['container']}>
      <div className={styles['imageContainerProduct']}>
        <Image
          alt="Deepfriend Library"
          src={LibraryImage}
          className={styles['productImage']}
        />
        <h1 className={styles['productText']}>
          {TranslationTexts[lang]!['home_properties_8_product']}
        </h1>
      </div>
      <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_properties_8_title']}
        </h1>
      </div>
    </div>
  );
}

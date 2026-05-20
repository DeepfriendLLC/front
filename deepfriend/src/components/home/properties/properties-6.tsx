import styles from "@/styles/Properties.module.css";

import BlueImage from "@/../public/images/blue/blue-white.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function HomeProperties6Component({ lang }: { lang: Locale }) {
  return (
    <div className={styles['container']}>
      <div className={styles['imageContainerProduct']}>
        <Image
          alt="Deepfriend Blue AI"
          src={BlueImage}
          className={styles['blueImage']}
        />
        <h1 className={styles['productText']}>
          {TranslationTexts[lang]!['home_properties_6_product']}
        </h1>
      </div>
      <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_properties_6_title']}
        </h1>
      </div>
    </div>
  );
}

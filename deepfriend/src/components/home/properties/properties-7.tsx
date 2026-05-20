import styles from "@/styles/Properties.module.css";

import MindfulnessImage from "@/../public/images/mindfulness/stars-white.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function HomeProperties7Component({ lang }: { lang: Locale }) {
  return (
    <div className={styles['reverseContainer']}>
      <div className={styles['imageContainerProduct']}>
        <Image
          alt="Deepfriend Mindfulness"
          src={MindfulnessImage}
          className={styles['productImage']}
        />
        <h1 className={styles['productText']}>
          {TranslationTexts[lang]!['home_properties_7_product']}
        </h1>
      </div>
      <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_properties_7_title']}
        </h1>
      </div>
    </div>
  );
}

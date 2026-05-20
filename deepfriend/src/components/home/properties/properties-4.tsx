import styles from "@/styles/Properties.module.css";

import PeepsImage from "@/../public/images/peeps/peeps-4.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function HomeProperties4Component({ lang }: { lang: Locale }) {
  return (
    <div className={styles['reverseContainer']}>
      <div className={styles['imageContainer']}>
        <Image
          alt="Deepfriend Peeps"
          src={PeepsImage}
          className={styles['image']}
        />
      </div>
      <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_properties_4_title']}
        </h1>
        <h1 className={styles['text']}>
          {TranslationTexts[lang]!['home_properties_4_text']}
        </h1>
      </div>
    </div>
  );
}

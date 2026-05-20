import styles from "@/styles/Properties.module.css";

import PeepsImage from "@/../public/images/peeps/peeps-3.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function HomeProperties3Component({ lang }: { lang: Locale }) {
  return (
    <div className={styles['container']}>
      <div className={styles['imageContainer']}>
        <Image
          alt="Deepfriend Peeps"
          src={PeepsImage}
          className={styles['image']}
        />
      </div>
        <div className={styles['textContainer']}>
        <h1 className={styles['title']}>
          {TranslationTexts[lang]!['home_properties_3_title']}
        </h1>
        <h1 className={styles['text']}>
          {TranslationTexts[lang]!['home_properties_3_text']}
        </h1>
      </div>
    </div>
  );
}

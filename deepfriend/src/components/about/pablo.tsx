import styles from "@/styles/Pablo.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import Image from "next/image";
import { Locale } from "@/i18n/config";

import PabloImage from "@/../public/images/pablo/pablo.png";


export default function AboutPabloComponent({ lang }: { lang: Locale }) {

    return (
        <div className={styles['container']}>
            <div className={styles['imageContainer']}>
                <Image
                    alt="DF Contact banner image"
                    src={PabloImage}
                    className={styles['image']}
                />
            </div>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {TranslationTexts[lang]!['about_pablo_title']}
                </h1>
                <h1 className={styles['subtitle']}>
                    Pablo Vallejo
                </h1>
                <h1 className={styles['text']}>
                    {TranslationTexts[lang]!['about_pablo_text']}
                </h1>
            </div>
        </div>
    );
}

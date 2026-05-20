import styles from "@/styles/Why.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";


export default function AboutWhyComponent({ lang }: { lang: Locale }) {

    return (
        <div className={styles['container']}>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {TranslationTexts[lang]!['about_why_title']}
                </h1>
                <h1 className={styles['text']}>
                    {TranslationTexts[lang]!['about_why_text']}
                </h1>
            </div>
        </div>
    );
}

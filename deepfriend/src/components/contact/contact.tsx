import styles from "@/styles/Contact.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";


export function ContactComponent({ lang }: { lang: Locale }) {

    return (
        <div className={styles['container']}>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {TranslationTexts[lang]!['contact_title']}
                </h1>
                <h1 className={styles['text']}>
                    {TranslationTexts[lang]!['contact_text']}
                </h1>
            </div>
            <div className={styles['socialTextContainer']}>
                <h1 className={styles['socialTitle']}>
                    {TranslationTexts[lang]!['contact_subtitle_email']}
                </h1>
                <h1 className={styles['socialText']}>
                    hello@dfbubbles.com
                </h1>
                <h1 className={styles['socialText']}>
                    help@dfbubbles.com
                </h1>
            </div>
        </div>
    );
}

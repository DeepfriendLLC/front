import styles from "@/styles/Legal.module.css";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function PrivacyPolicyTextContainerComponent({ lang }: { lang: Locale }) {
    const t = TranslationTexts[lang]!;

    return (
        <div className={styles['container']}>
            <h1 className={styles['title']}>{t['privacy_policy_0_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_0_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_1_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_1_0_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_1_1_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_1_2_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_1_3_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_1_4_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_1_5_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_1_6_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_2_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_2_0_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_2_1_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_2_2_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_2_3_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_3_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_3_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_4_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_4_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_5_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_5_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_6_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_6_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_7_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_7_0_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_7_1_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_7_2_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_8_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_8_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_9_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_9_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_10_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_10_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_11_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_11_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_12_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_12_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_13_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_13_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_14_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_14_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_15_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_15_0_text']}</p>
            <p className={styles['text']}>{t['privacy_policy_15_1_text']}</p>
            <h1 className={styles['title']}>{t['privacy_policy_16_title']}</h1>
            <p className={styles['text']}>{t['privacy_policy_16_text']}</p>
        </div>
    );
}

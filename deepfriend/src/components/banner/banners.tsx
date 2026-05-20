import styles from "@/styles/Badge.module.css";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";

import ParejaImage from "@/../public/images/peeps/pareja.png";
import PandillaImage from "@/../public/images/peeps/pandilla.png";
import { Locale } from "@/i18n/config";
import { getT } from "@/i18n/dictionary";

export function AboutBannerComponent({ lang }: { lang: Locale }) {
    const t = getT(lang);

    return (
        <div className={styles['container']}>
            <div className={styles['imageContainer']}>
                <Image
                    alt="DF About banner image"
                    src={ParejaImage}
                    className={styles['image']}
                />
            </div>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {t.banner_about_title}
                </h1>
            </div>
        </div>
    );
}

export function ContactBannerComponent({ lang }: { lang: Locale }) {
    const t = getT(lang);

    return (
        <div className={styles['container']}>
            <div className={styles['imageContainer']}>
                <Image
                    alt="DF Contact banner image"
                    src={PandillaImage}
                    className={styles['image']}
                />
            </div>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {t.banner_contact_title}
                </h1>
            </div>
        </div>
    );
}

export function PrivacyPolicyBannerComponent({ lang }: { lang: Locale }) {
    const t = getT(lang);

    return (
        <div className={styles['container']}>
            <div className={styles['imageContainer']}>
                <Image
                    alt="DF Contact banner image"
                    src={PandillaImage}
                    className={styles['image']}
                />
            </div>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {t.banner_privacy_policy_title}
                </h1>
            </div>
        </div>
    );
}

export default function LegalTermsBannerComponent({ lang }: { lang: Locale }) {
    const t = getT(lang);

    return (
        <div className={styles['container']}>
            <div className={styles['imageContainer']}>
                <Image
                    alt="DF Contact banner image"
                    src={PandillaImage}
                    className={styles['image']}
                />
            </div>
            <div className={styles['textContainer']}>
                <h1 className={styles['title']}>
                    {t.banner_legal_terms_title}
                </h1>
            </div>
        </div>
    );
}

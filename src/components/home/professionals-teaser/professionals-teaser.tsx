import styles from "@/styles/ProfessionalsTeaser.module.css";

import Link from "next/link";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function ProfessionalsTeaserComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  return (
    <Link
      href={`/${lang}/professionals` as never}
      className={styles["link"]}
    >
      {t.home_pro_teaser}
    </Link>
  );
}

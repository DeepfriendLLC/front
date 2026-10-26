import styles from "@/styles/Navbar.module.css";
import homeStyles from "@/styles/HomePage.module.css";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/icon-clean.png";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";
import LangSwitcher from "@/components/basic/lang-switcher";

const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

export default function NavbarComponent({
  lang,
  homeTheme,
}: {
  lang: Locale;
  homeTheme?: boolean;
}) {
  const t = TranslationTexts[lang];

  return (
    <header
      className={`${styles["header"]}${homeTheme ? ` ${homeStyles["navHeader"]}` : ""}`}
    >
      <div className={`df-shell ${styles['shell']}`}>
        <Link href={`/${lang}` as never} className={styles['brand']} aria-label="Deepfriend">
          <Image
            alt="Deepfriend"
            src={Logo}
            className={styles['logo']}
            priority
          />
          <span className={styles['brandName']}>Deepfriend</span>
        </Link>

        <nav className={styles['nav']} aria-label="Primary">
          <Link href={`/${lang}/about` as never} className={styles['navLink']}>
            {t.nav_about}
          </Link>
          <Link href={`/${lang}/professionals` as never} className={styles['navLink']}>
            {t.nav_professionals}
          </Link>
          <Link href={`/${lang}/contact` as never} className={styles['navLink']}>
            {t.nav_contact}
          </Link>
        </nav>

        <div className={styles['actions']}>
          <LangSwitcher current={lang} />
          <a
            href={GOOGLE_PLAY}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["cta"]}${homeTheme ? ` ${homeStyles["navCta"]}` : ""}`}
          >
            {t.nav_cta}
          </a>
        </div>
      </div>
    </header>
  );
}

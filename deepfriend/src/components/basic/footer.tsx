import styles from "@/styles/Footer.module.css";
import homeStyles from "@/styles/HomePage.module.css";

import Image from "next/image";
import Link from "next/link";

import HeadLogoWhite from "../../../public/icon-clean.png";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";
import LangSwitcher from "@/components/basic/lang-switcher";

const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend";

export default function FooterComponent({
  lang,
  homeTheme,
}: {
  lang: Locale;
  homeTheme?: boolean;
}) {
  const t = TranslationTexts[lang];
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles["footer"]}${homeTheme ? ` ${homeStyles["footer"]}` : ""}`}
    >
      <div className={`df-shell ${styles['shell']}`}>
        <div className={styles['grid']}>
          <div className={styles['colBrand']}>
            <Link
              href={`/${lang}` as never}
              className={styles['brand']}
              aria-label="Deepfriend"
            >
              <Image
                alt="Deepfriend"
                src={HeadLogoWhite}
                className={styles['logo']}
              />
              <span className={styles['brandName']}>Deepfriend</span>
            </Link>
            <p className={styles['tagline']}>{t.footer_tagline}</p>
            <a
              href={GOOGLE_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles["cta"]}${homeTheme ? ` ${homeStyles["footerCta"]}` : ""}`}
            >
              {t.nav_cta} · Google Play
            </a>
          </div>

          <div className={styles['col']}>
            <h4 className={styles['colTitle']}>{t.footer_product}</h4>
            <ul className={styles['list']}>
              <li><span className={styles['link']}>{t.footer_product_blue}</span></li>
              <li><span className={styles['link']}>{t.footer_product_mindfulness}</span></li>
              <li><span className={styles['link']}>{t.footer_product_library}</span></li>
            </ul>
          </div>

          <div className={styles['col']}>
            <h4 className={styles['colTitle']}>{t.footer_company}</h4>
            <ul className={styles['list']}>
              <li>
                <Link href={`/${lang}/about` as never} className={styles['link']}>
                  {t.footer_company_about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact` as never} className={styles['link']}>
                  {t.footer_company_contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles['col']}>
            <h4 className={styles['colTitle']}>{t.footer_legal}</h4>
            <ul className={styles['list']}>
              <li>
                <Link
                  href={`/${lang}/privacy-policy` as never}
                  className={styles['link']}
                >
                  {t.footer_legal_privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legal-terms` as never}
                  className={styles['link']}
                >
                  {t.footer_legal_terms}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles['col']}>
            <h4 className={styles['colTitle']}>{t.footer_contact_title}</h4>
            <ul className={styles['list']}>
              <li>
                <a href="mailto:hello@dfbubbles.com" className={styles['link']}>
                  hello@dfbubbles.com
                </a>
              </li>
              <li>
                <a href="mailto:help@dfbubbles.com" className={styles['link']}>
                  help@dfbubbles.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles['bottom']}>
          <div className={styles['bottomLeft']}>
            <span className={styles['copy']}>
              © {year} Deepfriend. {t.footer_copyright}
            </span>
            <span className={styles['dot']}>·</span>
            <span className={styles['copy']}>{t.footer_madein}</span>
          </div>
          <div className={styles['bottomRight']}>
            <span className={styles['langLabel']}>{t.footer_lang_title}</span>
            <LangSwitcher current={lang} variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

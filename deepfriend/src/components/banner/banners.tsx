import styles from "@/styles/Badge.module.css";

import { Locale } from "@/i18n/config";
import { getT } from "@/i18n/dictionary";

function BannerShell({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className={styles['section']}>
      <div className={`df-shell ${styles['shell']}`}>
        <span className={styles['eyebrow']}>{eyebrow}</span>
        <h1 className={styles['title']}>{title}</h1>
      </div>
    </section>
  );
}
/*
export function AboutBannerComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);
  return <BannerShell eyebrow="Deepfriend" title={t.banner_about_title} />;
}

export function ContactBannerComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);
  return <BannerShell eyebrow={t.contact_eyebrow} title={t.banner_contact_title} />;
}
*/
export function PrivacyPolicyBannerComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);
  return <BannerShell eyebrow={t.footer_legal} title={t.banner_privacy_policy_title} />;
}

export default function LegalTermsBannerComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);
  return <BannerShell eyebrow={t.footer_legal} title={t.banner_legal_terms_title} />;
}

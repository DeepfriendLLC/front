import type { Locale } from "@/i18n/config";
import Es from "@/content/privacy-policy.es.mdx";
import En from "@/content/privacy-policy.en.mdx";
import De from "@/content/privacy-policy.de.mdx";
import styles from "@/styles/Legal.module.css";

const docs = { es: Es, en: En, de: De } as const;

export default async function PrivacyPolicy({ lang }: { lang: Locale }) {
  const Doc = docs[lang];

  return (
    <div className="df-shell">
      <article className={styles['container']}>
        <Doc />
      </article>
    </div>
  );
}

import type { Locale } from "@/i18n/config";
import Es from "@/content/legal-terms.es.mdx";
import En from "@/content/legal-terms.en.mdx";
import De from "@/content/legal-terms.de.mdx";
import styles from "@/styles/Legal.module.css";

const docs = { es: Es, en: En, de: De } as const;

export default function LegalTermsTextContainerComponent({ lang }: { lang: Locale }) {
  const Doc = docs[lang];
  return (
    <div className="df-shell">
      <article className={styles['container']}>
        <Doc />
      </article>
    </div>
  );
}

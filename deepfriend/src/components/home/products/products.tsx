import styles from "@/styles/Products.module.css";
import Image from "next/image";

import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

import BlueWhale from "@/../public/images/blue/blue-white.png";
import StarsIcon from "@/../public/images/mindfulness/stars-white.png";
import LibraryIcon from "@/../public/images/library/library-white.png";

type Product = {
  label: string;
  title: string;
  text: string;
  bullets: string[];
  variant: "blue" | "library" | "mindfulness";
  illustration: typeof BlueWhale;
};

export default function ProductsComponent({ lang }: { lang: Locale }) {
  const t = TranslationTexts[lang];

  const items: Product[] = [
    {
      label: t.product_blue_label,
      title: t.product_blue_title,
      text: t.product_blue_text,
      bullets: [
        t.product_blue_bullet_1,
        t.product_blue_bullet_2,
        t.product_blue_bullet_3,
      ],
      variant: "blue",
      illustration: BlueWhale,
    },
    {
      label: t.product_library_label,
      title: t.product_library_title,
      text: t.product_library_text,
      bullets: [
        t.product_library_bullet_1,
        t.product_library_bullet_2,
        t.product_library_bullet_3,
      ],
      variant: "library",
      illustration: LibraryIcon,
    },
    {
      label: t.product_mindfulness_label,
      title: t.product_mindfulness_title,
      text: t.product_mindfulness_text,
      bullets: [
        t.product_mindfulness_bullet_1,
        t.product_mindfulness_bullet_2,
        t.product_mindfulness_bullet_3,
      ],
      variant: "mindfulness",
      illustration: StarsIcon,
    },
  ];

  return (
    <section className={styles['section']} aria-labelledby="products-title">
      <div className={`df-shell ${styles['shell']}`}>
        <header className={styles['head']}>
          <span className={styles['eyebrow']}>{t.products_eyebrow}</span>
          <h2 id="products-title" className={styles['title']}>
            {t.products_title}
          </h2>
        </header>

        <div className={styles['grid']}>
          {items.map((it, i) => (
            <article
              key={i}
              className={`${styles['card']} ${styles[`card_${it.variant}`]}`}
            >
              <div className={styles['cardHead']}>
                <span className={styles['illuWrap']} aria-hidden>
                  <Image alt="" src={it.illustration} className={styles['illu']} />
                </span>
                <span className={styles['label']}>{it.label}</span>
              </div>

              <h3 className={styles['cardTitle']}>{it.title}</h3>
              <p className={styles['cardText']}>{it.text}</p>

              <ul className={styles['bullets']}>
                {it.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

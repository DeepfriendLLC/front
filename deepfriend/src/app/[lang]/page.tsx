import "@/styles/global.css";

import homeStyles from "@/styles/HomePage.module.css";

import NavbarComponent from "@/components/basic/navbar";
import FooterComponent from "@/components/basic/footer";

import PortadaComponent from "@/components/home/portada/portada";
import TrustComponent from "@/components/home/trust/trust";
import ScienceComponent from "@/components/home/science/science";
import BlueProductComponent from "@/components/home/products/blue-product";
import HowItWorksComponent from "@/components/home/how-it-works/how-it-works";
import ProductExtrasComponent from "@/components/home/products/product-extras";
import PrivacyComponent from "@/components/home/privacy/privacy";
import CtaComponent from "@/components/home/cta/cta";

import { pickLocale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <div className={homeStyles["page"]}>
      <NavbarComponent lang={lang} homeTheme />
      <main>
        <PortadaComponent lang={lang} />
        <TrustComponent lang={lang} />
        <BlueProductComponent lang={lang} />
        <ScienceComponent lang={lang} />
        <HowItWorksComponent lang={lang} />
        <PrivacyComponent lang={lang} />
        <ProductExtrasComponent lang={lang} />
        <CtaComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} homeTheme />
    </div>
  );
}

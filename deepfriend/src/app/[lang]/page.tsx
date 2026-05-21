import "@/styles/global.css";

import NavbarComponent from "@/components/basic/navbar";
import FooterComponent from "@/components/basic/footer";

import PortadaComponent from "@/components/home/portada/portada";
import TrustComponent from "@/components/home/trust/trust";
import ApproachComponent from "@/components/home/approach/approach";
import ProductsComponent from "@/components/home/products/products";
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
    <>
      <NavbarComponent lang={lang} />
      <main>
        <PortadaComponent lang={lang} />
        <TrustComponent lang={lang} />
        <ApproachComponent lang={lang} />
        <ProductsComponent lang={lang} />
        <PrivacyComponent lang={lang} />
        <CtaComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} />
    </>
  );
}

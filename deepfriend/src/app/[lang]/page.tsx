import "@/styles/global.css";

import NavbarComponent  from "@/components/basic/navbar";
import FooterComponent from "@/components/basic/footer";

import PortadaComponent from "@/components/home/portada/portada";
import HomeProperties1Component from "@/components/home/properties/properties-1";
import HomeProperties2Component from "@/components/home/properties/properties-2";
import HomeProperties3Component from "@/components/home/properties/properties-3";
import HomeProperties4Component from "@/components/home/properties/properties-4";
import HomeProperties5Component from "@/components/home/properties/properties-5";
import HomeProperties7Component from "@/components/home/properties/properties-7";
import HomeProperties6Component from "@/components/home/properties/properties-6";
import HomeProperties8Component from "@/components/home/properties/properties-8";
import HomePropertiesLinksComponent from "@/components/home/properties/properties-links";
import { Locale } from "@/i18n/config";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <>
      <NavbarComponent />
      <PortadaComponent lang={lang} />
      <HomeProperties1Component lang={lang} />
      <HomeProperties2Component lang={lang} />
      <HomeProperties3Component lang={lang} />
      <HomeProperties4Component lang={lang} />
      <HomeProperties5Component lang={lang} />
      <HomeProperties6Component lang={lang} />
      <HomeProperties7Component lang={lang} />
      <HomeProperties8Component lang={lang} />
      <HomePropertiesLinksComponent lang={lang} />
      <FooterComponent lang={lang} />
    </>
  );
}

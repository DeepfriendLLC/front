import AboutWhyComponent from "@/components/about/why";
import { AboutBannerComponent } from "@/components/banner/banners";
import MissionAndValuesComponent from "@/components/home/missionAndValues/mission-and-values";
import AboutPabloComponent from "@/components/about/pablo";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { Locale } from "@/i18n/config";

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <>
      <NavbarComponent />
      <AboutBannerComponent lang={lang} />
      <AboutWhyComponent lang={lang} />
      <MissionAndValuesComponent lang={lang} />
      <AboutPabloComponent lang={lang} />
      <FooterComponent lang={lang} />
    </>
  );
}

import "@/styles/global.css";

import AboutIntroComponent from "@/components/about/about-intro";
import AboutWhyComponent from "@/components/about/why";
import TeamComponent from "@/components/about/team";
import MissionAndValuesComponent from "@/components/home/missionAndValues/mission-and-values";
import CtaComponent from "@/components/home/cta/cta";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { pickLocale } from "@/i18n/config";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <>
      <NavbarComponent lang={lang} />
      <main>
        <AboutIntroComponent lang={lang} />
        <MissionAndValuesComponent lang={lang} />
        <AboutWhyComponent lang={lang} />
        <TeamComponent lang={lang} />
        <CtaComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} />
    </>
  );
}

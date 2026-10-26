import "@/styles/global.css";

import homeStyles from "@/styles/HomePage.module.css";

import ProfessionalsHeroComponent from "@/components/professionals/professionals-hero";
import ProfessionalsTrustComponent from "@/components/professionals/professionals-trust";
import ProfessionalsDashboardComponent from "@/components/professionals/professionals-dashboard";
import ProfessionalsBenefitsComponent from "@/components/professionals/professionals-benefits";
import ProfessionalsFeaturesComponent from "@/components/professionals/professionals-features";
import ProfessionalsPatientsComponent from "@/components/professionals/professionals-patients";
import ProfessionalsWorkflowComponent from "@/components/professionals/professionals-workflow";
import ProfessionalsSafetyComponent from "@/components/professionals/professionals-safety";
import ProfessionalsCtaComponent from "@/components/professionals/professionals-cta";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { pickLocale } from "@/i18n/config";
import { GENERATE_METADATA } from "@/constants/seo/metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return GENERATE_METADATA({ params, route: "/professionals" });
}

export default async function ProfessionalsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <div className={homeStyles["page"]}>
      <NavbarComponent lang={lang} homeTheme />
      <main>
        <ProfessionalsHeroComponent lang={lang} />
        <ProfessionalsTrustComponent lang={lang} />
        <ProfessionalsDashboardComponent lang={lang} />
        <ProfessionalsBenefitsComponent lang={lang} />
        <ProfessionalsFeaturesComponent lang={lang} />
        <ProfessionalsPatientsComponent lang={lang} />
        <ProfessionalsWorkflowComponent lang={lang} />
        <ProfessionalsSafetyComponent lang={lang} />
        <ProfessionalsCtaComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} homeTheme />
    </div>
  );
}

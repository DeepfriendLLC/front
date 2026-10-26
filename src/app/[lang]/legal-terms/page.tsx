import "@/styles/global.css";

import LegalTermsTextContainerComponent from "@/components/legal/legal-terms-text";
import LegalTermsBannerComponent from "@/components/banner/banners";
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
  return GENERATE_METADATA({ params, route: "/legal-terms" });
};

export default async function LegalTerms({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <>
      <NavbarComponent lang={lang} />
      <main>
        <LegalTermsBannerComponent lang={lang} />
        <LegalTermsTextContainerComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} />
    </>
  );
};

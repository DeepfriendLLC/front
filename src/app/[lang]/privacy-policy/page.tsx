import "@/styles/global.css";

import PrivacyPolicyTextContainerComponent from "@/components/privacy-policy/privacy-policy-text";
import { PrivacyPolicyBannerComponent } from "@/components/banner/banners";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { pickLocale } from "@/i18n/config";
import { Metadata } from "next";
import { GENERATE_METADATA } from "@/constants/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return GENERATE_METADATA({ params, route: "/privacy-policy" });
};

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <>
      <NavbarComponent lang={lang} />
      <main>
        <PrivacyPolicyBannerComponent lang={lang} />
        <PrivacyPolicyTextContainerComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} />
    </>
  );
};

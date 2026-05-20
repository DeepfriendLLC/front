import PrivacyPolicyTextContainerComponent from "@/components/privacy-policy/privacy-policy-text";
import { PrivacyPolicyBannerComponent } from "@/components/banner/banners";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { Locale } from "@/i18n/config";

export default async function PrivacyPolicy({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <>
      <NavbarComponent />
      <PrivacyPolicyBannerComponent lang={lang} />
      <PrivacyPolicyTextContainerComponent lang={lang} />
      <FooterComponent lang={lang} />
    </>
  );
}

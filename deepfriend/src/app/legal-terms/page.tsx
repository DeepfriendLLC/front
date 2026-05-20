import LegalTermsTextContainerComponent from "@/components/legal/legal-terms-text";
import LegalTermsBannerComponent from "@/components/banner/banners";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { Locale } from "@/i18n/config";

export default async function LegalTerms({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <>
      <NavbarComponent />
      <LegalTermsBannerComponent lang={lang} />
      <LegalTermsTextContainerComponent lang={lang} />
      <FooterComponent lang={lang} />
    </>
  );
}

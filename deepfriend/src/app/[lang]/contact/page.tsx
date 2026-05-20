import { ContactBannerComponent } from "@/components/banner/banners";
import { ContactComponent } from "@/components/contact/contact";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { Locale } from "@/i18n/config";

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <>
      <NavbarComponent />
      <ContactBannerComponent lang={lang} />
      <ContactComponent lang={lang} />
      <FooterComponent lang={lang} />
    </>
  );
}

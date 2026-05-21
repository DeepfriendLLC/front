import "@/styles/global.css";

import { ContactComponent } from "@/components/contact/contact";
import FooterComponent from "@/components/basic/footer";
import NavbarComponent from "@/components/basic/navbar";
import { pickLocale } from "@/i18n/config";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <>
      <NavbarComponent lang={lang} />
      <main>
        <ContactComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} />
    </>
  );
}

import "@/styles/global.css";

import homeStyles from "@/styles/HomePage.module.css";

import { ContactComponent } from "@/components/contact/contact";
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
  return GENERATE_METADATA({ params, route: "/contact" });
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = pickLocale((await params).lang);

  return (
    <div className={homeStyles["page"]}>
      <NavbarComponent lang={lang} homeTheme />
      <main>
        <ContactComponent lang={lang} />
      </main>
      <FooterComponent lang={lang} homeTheme />
    </div>
  );
}

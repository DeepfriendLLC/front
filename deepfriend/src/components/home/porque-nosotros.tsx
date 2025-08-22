"use client";

import Peep from "../../../public/peeps/peep-22.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function PorqueNosotrosComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const router = useRouter();

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "1", "in", systemColor, systemLanguage);
    router.push('#🐧', { scroll: true });
  };

  const goToGooglePlay = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "0", "out", systemColor, systemLanguage);
    router.push(`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`);
  };

  return (
    <div className="home-properties-1-container click-pointer" id="🫧" onClick={scrollToNext}>
      <div className="home-properties-1-container-image">
        <Image
          alt="Deepfriend app screenshots"
          className="home-properties-1-image"
          src={Peep}
        />
      </div>
      <div className="home-properties-1-container-letters">
        <h1 className="home-properties-1-pretitle" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_1_pretitle}
        </h1>
        <h1 className="home-properties-1-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_1_title}
        </h1>
        <h1 className="home-properties-1-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_1_text}
        </h1>
      </div>
    </div>
  );
}

/*
<button className="button-yewllow" style={{ marginTop: 16, marginBottom: 16 }} onClick={goToGooglePlay}>
  <h1 className="button-text" style={{ textDecoration: "none" }}>
    {TranslationTexts[systemLanguage].home_badge_download}
  </h1>
</button>
*/
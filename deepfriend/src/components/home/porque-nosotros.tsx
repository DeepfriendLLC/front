"use client";

import Peep from "../../../public/peeps/peep-22.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
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

  return (
    <div className="basic-wrapper" id="🫧" onClick={scrollToNext}>
      <div className="basic-container">
        <div className="basic-container-image">
          <Image
            alt="Deepfriend app screenshots"
            className="basic-image"
            src={Peep}
          />
        </div>
        <div className="basic-container-letters">
          <h1 className="basic-pretitle">
            {TranslationTexts[systemLanguage].home_properties_1_pretitle}
          </h1>
          <h1 className="basic-title">
            {TranslationTexts[systemLanguage].home_properties_1_title}
          </h1>
          <h1 className="basic-text">
            {TranslationTexts[systemLanguage].home_properties_1_text}
          </h1>
        </div>
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
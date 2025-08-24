"use client";

import Peep from "../../../public/peeps/peep-2.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function QueTenemos1Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const router = useRouter();

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "1", "in", systemColor, systemLanguage);
    router.push('#🐬', { scroll: true });
  };

  const goToGooglePlay = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "0", "out", systemColor, systemLanguage);
    router.push(`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`);
  };

  return (
    <div className="basic-wrapper" id="🐧" onClick={scrollToNext}>
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
            {TranslationTexts[systemLanguage].home_properties_9_pretitle}
          </h1>
          <h1 className="basic-title">
            {TranslationTexts[systemLanguage].que_tenemos_1_title}
          </h1>
          <h1 className="basic-text">
            {TranslationTexts[systemLanguage].que_tenemos_1_text}
          </h1>
        </div>
      </div>
    </div>
  );
}

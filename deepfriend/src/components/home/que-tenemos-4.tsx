"use client";

import Peep from "../../../public/peeps/peep-27.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function QueTenemos4Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const router = useRouter();

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "2", "in", systemColor, systemLanguage);
    router.push('#💫', { scroll: true });
  };

  return (
    <div className="basic-wrapper" id="✨" onClick={scrollToNext}>
      <div className="basic-container-reverse">
        <div className="basic-container-letters">
          <h1 className="basic-pretitle">
            {TranslationTexts[systemLanguage].home_properties_9_pretitle}
          </h1>
          <h1 className="basic-title">
            {TranslationTexts[systemLanguage].que_tenemos_4_title}
          </h1>
          <h1 className="basic-text">
            {TranslationTexts[systemLanguage].que_tenemos_4_text}
          </h1>
        </div>
        <div className="basic-container-image">
          <Image
            alt="Deepfriend app screenshots"
            className="basic-image"
            src={Peep}
          />
        </div>
      </div>
    </div>
  );
}

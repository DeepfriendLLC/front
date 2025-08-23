"use client";

import Peep from "../../../public/peeps/peep-22.png";

import LevelsImageWhiteEN from "../../../public/images/phase-levels-white-en.svg";
import LevelsImageDarkEN from "../../../public/images/phase-levels-dark-en.svg";

import LevelsImageWhiteES from "../../../public/images/phase-levels-white-es.svg";
import LevelsImageDarkES from "../../../public/images/phase-levels-dark-es.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function QueTenemosComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const router = useRouter();

  const checkCorrectImageSRC = () => {
    if (systemLanguage === "es") {
      if (systemColor === "dark") return LevelsImageWhiteES;
      else return LevelsImageDarkES;

    } else if (systemLanguage === "en") {

      if (systemColor === "dark") return LevelsImageWhiteEN;
      else return LevelsImageDarkEN;

    } else return LevelsImageWhiteEN;
  };

  const correctImageSRC = checkCorrectImageSRC();

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "2", "in", systemColor, systemLanguage);
    router.push('#🐬', { scroll: true });
  };

  return (
    <div className="basic-wrapper" id="🐧" onClick={scrollToNext}>
      <div className="basic-container-reverse">
        <div className="basic-container-letters">
          <h1 className="basic-pretitle">
            {TranslationTexts[systemLanguage].home_properties_9_pretitle}
          </h1>
          <h1 className="basic-title">
            {TranslationTexts[systemLanguage].que_tenemos_title}
          </h1>
          <h1 className="basic-text">
            {TranslationTexts[systemLanguage].que_tenemos_text}
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

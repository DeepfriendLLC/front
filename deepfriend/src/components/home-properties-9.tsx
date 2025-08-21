"use client";

import Negra from "../../public/people/negra.png";

import LevelsImageWhiteEN from "../../public/images/phase-levels-white-en.svg";
import LevelsImageDarkEN from "../../public/images/phase-levels-dark-en.svg";

import LevelsImageWhiteES from "../../public/images/phase-levels-white-es.svg";
import LevelsImageDarkES from "../../public/images/phase-levels-dark-es.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "./client-api/client-api";

export default function HomeProperties9Component() {
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
    <div className="home-properties-9-container click-pointer" id="🐧" onClick={scrollToNext}>
      <div className="home-properties-9-card">
        <h1 className="home-properties-9-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_9_title}
        </h1>
        <h1 className="home-properties-9-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_9_text}
        </h1>
      </div>
      <div className="home-properties-9-container-image">
        <Image
          alt="Deepfriend app screenshots"
          className="home-properties-9-image"
          src={Negra}
        />
      </div>
    </div >
  );
}

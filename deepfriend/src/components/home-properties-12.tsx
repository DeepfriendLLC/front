"use client";

import Peep from "../../public/peeps/peep-1.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "./api/client-api/client-api";

export default function HomeProperties12Component() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const router = useRouter();

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "4", "in", systemColor, systemLanguage);
    router.push('#🐳', { scroll: true });
  };

  return (
    <div className="home-properties-1-container click-pointer" onClick={scrollToNext}>
      <div className="home-properties-1-card">
        <Image
          alt="Deepfriend app screenshots"
          className="home-properties-12-image"
          src={Peep}
        />
        <h1 className="home-properties-1-title" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_12_title}
        </h1>
        <h1 className="home-properties-1-text" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
          {TranslationTexts[systemLanguage].home_properties_12_text}
        </h1>
      </div>
    </div >
  );
}

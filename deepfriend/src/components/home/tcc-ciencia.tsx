"use client";

import Peep from "../../../public/peeps/peep-1.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { TranslationTexts } from "@/constants/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function TccCienciaComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const router = useRouter();

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "4", "in", systemColor, systemLanguage);
    router.push('#💞', { scroll: true });
  };

  return (
    <div className="basic-wrapper" onClick={scrollToNext} style={{ marginTop: 48, marginBottom: 48 }}>
      <div className="basic-container">
        <div className="basic-container-image">
          <Image
            alt="Deepfriend app screenshots"
            className="basic-image"
            src={Peep}
          />
        </div>
        <div className="basic-container-letters">
          <h1 className="basic-title">
            {TranslationTexts[systemLanguage].tcc_science_title}
          </h1>
          <h1 className="basic-text">
            {TranslationTexts[systemLanguage].tcc_science_text}
          </h1>
        </div>
      </div>
    </div >
  );
}

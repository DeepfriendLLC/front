"use client";

import Asiatica from "../../../public/people/asiatica-perfil.png";
import Mora from "../../../public/people/mora-perfil.png";
import Blanca from "../../../public/people/blanca-perfil.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";
import { AllowedLanguagesEncodedType } from "@/store/slice/systemLanguage";

export function ReseñasCardComponent({ systemLanguage, index }: { systemLanguage: AllowedLanguagesEncodedType, index: string }) {
  return (
    <div className="reseñas-card">
      <Image
        alt="Deepfriend app screenshots"
        className="reseñas-image"
        src={
          index === "1" ?
            Mora :
            index === "2" ?
              Asiatica : Blanca
        }
      />
      <h1 className="reseñas-name" style={{ color: BASIC_DARK_COLOR }}>
        {TranslationTexts[systemLanguage][`reseñas_${index}_name`]}
      </h1>
      <h1 className="reseñas-text" style={{ color: BASIC_DARK_COLOR }}>
        {TranslationTexts[systemLanguage][`reseñas_${index}_text`]}
      </h1>
    </div>
  );
}

export default function ReseñasComponent() {
  const router = useRouter();

  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const scrollToNext = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "2", "in", systemColor, systemLanguage);
    router.push('#💖', { scroll: true });
  };

  return (
    <div className="reseñas-wrapper">
      <div className="basic-container" id="💫" onClick={scrollToNext} style={{ flexDirection: "column" }}>
        <h1 className="basic-title" style={{ textAlign: "center" }}>
          {TranslationTexts[systemLanguage].reseñas_title}
        </h1>
        <div className="reseñas-row">
          <ReseñasCardComponent index={"1"} systemLanguage={systemLanguage} />
          <ReseñasCardComponent index={"2"} systemLanguage={systemLanguage} />
          <ReseñasCardComponent index={"3"} systemLanguage={systemLanguage} />
        </div>
      </div>
    </div>
  );
}

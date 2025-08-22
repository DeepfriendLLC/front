"use client";

import Negra from "../../../public/people/negra.png";

import Peep3 from "../../../public/peeps/peep-3.png";
import Peep4 from "../../../public/peeps/peep-4.png";
import Peep5 from "../../../public/peeps/peep-5.png";

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
            Peep3 :
            index === "2" ?
              Peep4 : Peep5
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
    router.push('#🐬', { scroll: true });
  };

  return (
    <div className="reseñas-wrapper click-pointer" id="🐧" onClick={scrollToNext}>
      <h1 className="reseñas-title" style={{ color: BASIC_DARK_COLOR }}>
        {TranslationTexts[systemLanguage].reseñas_title}
      </h1>
      <div className="reseñas-row">
        <ReseñasCardComponent index={"1"} systemLanguage={systemLanguage} />
        <ReseñasCardComponent index={"2"} systemLanguage={systemLanguage} />
        <ReseñasCardComponent index={"3"} systemLanguage={systemLanguage} />
      </div>
    </div>
  );
}

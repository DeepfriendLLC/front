"use client";

import ImageProperties4White from "../../../public/icons/home-properties-4-check-white.png";
import ImageProperties4Dark from "../../../public/icons/home-properties-4-check-dark.png";

import ImagePenguin from "../../../public/images/home-properties-4-penguin.png";

import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export function TarjetasPreciosComponent() {
  const router = useRouter();

  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const goToGooglePlay = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "5", "out", systemColor, systemLanguage);
    router.push(`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`);
  };

  return (
    <div className="home-properties-4-container">
      <div className="home-properties-4-cards-row" onClick={goToGooglePlay}>
        <div className="home-properties-4-card-container-big" style={{
          borderColor: systemColor === "light" ? "#011C2F" : BASIC_LIGHT_COLOR,
        }}>
          <div className="home-properties-4-card-container-big-letters-container">
            <h1 className="home-properties-4-card-title" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : "#011C2F", textDecoration: "none" }}>
              {TranslationTexts[systemLanguage].penguin_title}
            </h1>
            <h1 className="home-properties-4-card-money-text">
              <strong style={{ fontSize: 54, marginRight: 4 }}>
                $4.99
              </strong>
              {TranslationTexts[systemLanguage].penguin_text}
            </h1>
            <h1 className="home-properties-4-card-tokens-text" style={{ marginTop: 16 }}>
              <Image
                alt="DF Web icon"
                src={ImageProperties4Dark}
                className="home-properties-4-card-check-image"
              />
              1 DAY
            </h1>
            <div style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              alignContent: "flex-end",
              marginTop: 24,
            }}>
              <button className={"button-yellow"} style={{
                width: "100%",
                alignSelf: "flex-end",
              }}>
                <h1 className="button-text">
                  {TranslationTexts[systemLanguage].home_properties_4_0_button}
                </h1>
              </button>
            </div>
          </div>
          <div className="home-properties-4-card-container-big-image-container">
            <Image
              alt="DF Penguin package logo"
              src={ImagePenguin}
              className="home-properties-4-card-container-big-image-image"
            />
          </div>
        </div>
        <div className="home-properties-4-card-container-little" style={{ color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR, backgroundColor: systemColor === 'light' ? "#011C2F" : BASIC_LIGHT_COLOR }}>
          <h1 className="home-properties-4-card-title" style={{ color: systemColor === "dark" ? "#011C2F" : BASIC_LIGHT_COLOR }}>
            {TranslationTexts[systemLanguage].dolphin_title}
          </h1>
          <h1 className="home-properties-4-card-money-text">
            <strong style={{ fontSize: 54, marginRight: 4 }}>
              $39.99
            </strong>
            {TranslationTexts[systemLanguage].dolphin_text}
          </h1>
          <h1 className="home-properties-4-card-tokens-text">
            <Image
              alt="DF Web icon"
              src={ImageProperties4White}
              className="home-properties-4-card-check-image"
            />
            1 MONTH
          </h1>
          <button className={"button-yellow"} style={{
            width: "100%",
            alignSelf: "flex-end",
          }}>
            <h1 className="button-text">
              {TranslationTexts[systemLanguage].subscribe}
            </h1>
          </button>
        </div>
        <div className="home-properties-4-card-container-little" style={{ color: BASIC_DARK_COLOR }}>
          <h1 className="home-properties-4-card-title" style={{ color: "#011C2F" }}>
            {TranslationTexts[systemLanguage].whale_title}
          </h1>
          <h1 className="home-properties-4-card-money-text">
            <strong style={{ fontSize: 54, marginRight: 4 }}>
              $357.48
            </strong>
            {TranslationTexts[systemLanguage].whale_text}
          </h1>
          <h1 className="home-properties-4-card-tokens-text">
            <Image
              alt="DF Web icon"
              src={ImageProperties4Dark}
              className="home-properties-4-card-check-image"
            />
            1 YEAR
          </h1>
          <button className="button-yellow" style={{
            width: "100%",
            alignSelf: "flex-end",
          }}>
            <h1 className="button-text">
              {TranslationTexts[systemLanguage].subscribe}
            </h1>
          </button>
        </div>
      </div>
    </div >
  );
}

export default function PreciosComponent() {
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  return (
    <div className="home-properties-4-container">
      <h1 id="🐳" className="home-properties-4-title" style={{ color: "#011C2F" }}>
        {TranslationTexts[systemLanguage].home_properties_9_title_big}
      </h1>
      <TarjetasPreciosComponent />
    </div >
  );
}

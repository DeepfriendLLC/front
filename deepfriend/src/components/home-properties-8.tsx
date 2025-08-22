"use client";

import CheckLightImage from "../../public/icons/check-light.png";
import CheckDarkImage from "../../public/icons/check-dark.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

import GoogleplayLogo from "../../public/icons/google-play-logo.png";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "./api/client-api/client-api";

export default function HomeProperties8Component() {
  const router = useRouter();

  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const goToGooglePlay = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "3", "out", systemColor, systemLanguage);
    router.push(`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`);
  };

  return (
    <div className="home-properties-8-wrapper" id="🐬">
      <div className="home-properties-8-container" style={{
        backgroundColor: "#24998B",
      }} onClick={goToGooglePlay}>
        <h1 className="home-properties-8-title" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR
        }}>
          {TranslationTexts[systemLanguage].home_properties_8_title}
        </h1>
        <h1 className="home-properties-8-text" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR
        }}>
          {TranslationTexts[systemLanguage].home_properties_8_text}
        </h1>
        <div className="home-properties-8-container-tags" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR
        }}>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={systemColor === "dark" ? CheckDarkImage : CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].home_properties_8_tag_5}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={systemColor === "dark" ? CheckDarkImage : CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].home_properties_8_tag_3}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={systemColor === "dark" ? CheckDarkImage : CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].home_properties_8_tag_1}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={systemColor === "dark" ? CheckDarkImage : CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].home_properties_8_tag_2}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={systemColor === "dark" ? CheckDarkImage : CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].home_properties_8_tag_0}
              </h1>
            </div>
          </div>
        </div>
        <div className="home-properties-8-container-image">
          <button className={systemColor === "light" ? "button-2" : "button-3"} style={{ alignSelf: "center" }}>
            <h1 className="button-text">
              {TranslationTexts[systemLanguage].home_badge_button_download_1}
              <Image
                alt="DF Phone screenshot"
                src={GoogleplayLogo}
                className="button-image"
              />
            </h1>
          </button>
        </div>
      </div >
    </div >
  );
}


/*
      <Link className="basic-link" href={"https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend"} target={"_blank"} style={{ textDecoration: "none" }}>
      </Link>
*/
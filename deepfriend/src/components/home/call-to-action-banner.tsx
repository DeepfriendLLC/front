"use client";

import CheckLightImage from "../../../public/icons/check-light.png";
import CheckDarkImage from "../../../public/icons/check-dark.png";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { TranslationTexts } from "@/store/translations/translations";

import GoogleplayLogo from "../../../public/icons/google-play-logo.png";
import { useRouter } from "next/navigation";
import { SendMetricsSessionClickAPI } from "../api/client-api/client-api";

export default function CallToActionBannerComponent() {
  const router = useRouter();

  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const goToGooglePlay = async () => {
    await SendMetricsSessionClickAPI(sessionId, "/", "3", "out", systemColor, systemLanguage);
    router.push(`https://play.google.com/store/apps/details?id=com.dfbubbles.deepfriend`);
  };

  return (
    <div className="basic-wrapper" id="💖">
      <div className="basic-container-color" onClick={goToGooglePlay}>
        <h1 className="call-to-action-title" style={{
          color: BASIC_LIGHT_COLOR,
          textAlign: "center",
        }}>
          {TranslationTexts[systemLanguage].call_to_action_title}
        </h1>
        <h1 className="call-to-action-subtitle" style={{
          color: BASIC_LIGHT_COLOR,
          textAlign: "center",
        }}>
          {TranslationTexts[systemLanguage].call_to_action_text}
        </h1>
        <div className="home-properties-8-container-tags" style={{
          color: BASIC_LIGHT_COLOR
        }}>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].call_to_action_tag_0}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].call_to_action_tag_1}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].call_to_action_tag_2}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].call_to_action_tag_3}
              </h1>
            </div>
          </div>
          <div className="home-properties-8-tag">
            <div className="home-properties-8-tag-container-image">
              <Image
                alt="DF Check icon"
                className="home-properties-8-tag-image"
                src={CheckLightImage}
              />
            </div>
            <div className="home-properties-8-tag-text">
              <h1 className="home-properties-8-text-tag">
                {TranslationTexts[systemLanguage].call_to_action_tag_4}
              </h1>
            </div>
          </div>
        </div>
        <div className="home-properties-8-container-image">
          <button className={"button-yellow"} style={{ alignSelf: "center" }}>
            <h1 className="button-text">
              {TranslationTexts[systemLanguage].download}
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
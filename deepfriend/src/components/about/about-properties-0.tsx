import PabloImage from "@/../public/images/pablo/pablo.png";

import Image from "next/image";
import { TranslationTexts } from "@/constants/translations/translations";
import { Locale } from "@/i18n/config";

export default function AboutProperties0Component({ lang }: { lang: Locale }) {
    return (
        <div className="about-properties-0-container">
            <div className="about-properties-0-pablo-container">
                <Image
                    alt="Pablo Vallejo, Deepfriend founder."
                    src={PabloImage}
                    className="about-properties-0-pablo-image"
                />
                <h1 className="about-properties-0-pablo-title">
                    Pablo Vallejo
                </h1>
                <h1 className="about-properties-0-pablo-founder-text">
                    {TranslationTexts[lang]!['about_properties_0_0_subtitle']}
                </h1>
                <h1 className="about-properties-0-pablo-text">
                    {TranslationTexts[lang]!['about_properties_0_0_text']}
                </h1>
            </div>
            <div className="about-properties-0-letters-container">
                <h1 className="about-properties-0-title">
                    {TranslationTexts[lang]!['about_properties_0_1_title']}
                </h1>
                <h1 className="about-properties-0-text">
                    {TranslationTexts[lang]!['about_properties_0_1_text']}
                </h1>
            </div>
        </div>
    );
}

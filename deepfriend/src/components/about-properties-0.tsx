"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import PabloImage from "../../public/images/pablo.png";

import Image from "next/image";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function AboutProperties0Component() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="about-properties-0-container" style={{ color: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR}}>
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
                    Founder
                </h1>
                <h1 className="about-properties-0-pablo-text">
                    Just a Spanish developer trying to give my best to society with my pretty dog called Naia.
                </h1>
            </div>
            <div className="about-properties-0-letters-container">
                <h1 className="about-properties-0-title">
                    Thinking and Crafting
                </h1>
                <h1 className="about-properties-0-text">
                    In recent years the mental health of our society has been getting worse and worse, making it more difficult to find a psychologist who cares about you and doesn't see you as a slot machine. This is where the idea of Deepfriend was born, a platform that puts patients first, giving you the maximum freedom and transparency about treatment, being able to go it alone with Bubbles or hand in hand with a trusted professional psychologist. Bubbles gives you the freedom to have the therapy you deserve.
                </h1>
            </div>
        </div>
    );
}

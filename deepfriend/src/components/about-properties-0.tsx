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
                    Spanish developer trying to give my best to society with my pretty dog called Naia.
                </h1>
            </div>
            <div className="about-properties-0-letters-container">
                <h1 className="about-properties-0-title">
                    Thinking and Crafting
                </h1>
                <h1 className="about-properties-0-text">
                    Deepfriend was born from the need of many people to receive professional,
                    transparent, scientifically based and affordable mental health support.
                    Deepfriend's main mission is to democratize mental health,
                    establishing scientific standards to help as many people as possible and generating anonymous and rigorous studies to advance the psychology of the future.
                    Here, users can understand the entire process and their current status in a completely transparent manner,
                    while also allowing them to customize the process to their liking. Deepfriend is a patient-first company.
                </h1>
            </div>
        </div>
    );
}

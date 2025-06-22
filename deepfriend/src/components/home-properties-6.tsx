"use client";

import PabloImage from "../../public/images/pablo-sin-fondo.svg";

import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties6Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-6-container">
      <div className="home-properties-6-card" style={{
        backgroundColor: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR,
      }}>
        <div className="home-properties-6-card-letters">
          <h1 className="home-properties-6-title" style={{
            color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
          }}>
            Pablo Vallejo
          </h1>
          <h1 className="home-properties-6-text" style={{
            color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
          }}>
            My story begins when I lost my job as a waiter in Barcelona and that led me to fall into a deep depression.
            <br />
            <br />
            I couldn't afford a conventional therapy so I looked at mental health apps and I did a market analysis but did not find anything other than a simple ChatGPT with a prompt to act as a psychologist.
            <br />
            <br />
            Thanks to God and a lot of effort and study I was able to develop myself as a software developer in a completely self-taught way.
            I was able to move to Madrid and develop my professional career.
            But depression is not so easy to overcome.
            <br />
            <br />
            In Madrid, I lived one of the worst experiences of my life, a person very close to me tried to commit suicide and we had to go to the hospital.
            The situation was already bad but the public attention staff made it even worse, not only did they not help us but they treated us with arrogance and contempt.
            I left really angry and looking on the internet I could see that this is something that happens all over the West.
            <br />
            <br />
            Then I promised myself that I had to help change this. I got serious, got in touch with Adrián, our great psychologist, and set up the company.
            <br />
            <br />
            It only remains for me to say that I am deeply proud of what we have managed to create and that thanks to Bubbles I have managed to overcome my own depression and become a new person.
            I hope and I know that it can help many people.
          </h1>
        </div>
        <div className="home-properties-6-card-image-container">
          <Image
            alt="Pablo Vallejo, Deepfriend founder"
            src={PabloImage}
            className="home-properties-5-card-image"
            style={{
              backgroundColor: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
            }}
          />
        </div>
      </div>
    </div>
  );
}

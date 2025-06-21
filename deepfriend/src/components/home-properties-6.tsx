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
            I started working as a waiter in Barcelona, but the covid came and I was out of work,
            which led me to go through a deep depression.
            <br />
            <br />
            I was looking for solutions, I couldn't afford a conventional therapy so I looked at mental health apps and I was disappointed.
            I did a market analysis but did not find anything other than a simple ChatGPT with a prompt to act as a psychologist.
            <br />
            <br />
            Thanks to God and a lot of effort and study I was able to develop myself as a totally self-taught software developer.
            I was able to move to Madrid and develop my professional career in large technological companies to which I am very grateful.
            But depression is not so easy to overcome.
            <br />
            <br />
            It was then when I lived one of the most frustrating and painful experiences of my life, my old partner,
            who was also going through a hard depression attempted suicide.
            There I could see how bad the mental health apps were and what is worse of all, the public care,
            something that happens all over the West. I left the hospital really angry, not only did they not help us,
            they treated us with contempt and arrogance.
            Between laughter and contempt they asked questions like "why do you cut yourself? don't cut yourself".
            <br />
            <br />
            Then I got serious, I analyzed the current state of technology,
            I saw that it was possible and I got in touch with Adrian, our great psychologist, and I set up the company.
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

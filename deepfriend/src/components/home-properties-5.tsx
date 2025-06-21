"use client";

import ImageProperties4White from "../../public/icons/home-properties-4-check-white.png";
import ImageProperties4Dark from "../../public/icons/home-properties-4-check-dark.png";

import AdrianImage from "../../public/images/adrian-sin-fondo.svg";

import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";

export default function HomeProperties5Component() {
  const { systemColor } = useSelector((state: RootState) => state.systemColor);

  return (
    <div className="home-properties-5-container">
      <div className="home-properties-5-card" style={{
        backgroundColor: systemColor === "dark" ? BASIC_LIGHT_COLOR : BASIC_DARK_COLOR,
      }}>
        <h1 className="home-properties-5-title" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
        }}>
          Adrián González
        </h1>
        <h1 className="home-properties-5-text" style={{
          color: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
        }}>
          Licensed psychologist with honors specialized in cognitive-behavioral therapy (CBT) with 7+ years of clinical experience.
        </h1>
        <Image
          alt="Adrián González, Deepfriend psichologist"
          src={AdrianImage}
          className="home-properties-5-card-image"
          style={{
            backgroundColor: systemColor === "dark" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
          }}
        />
      </div>
    </div>
  );
}

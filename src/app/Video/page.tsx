"use client";
import React from "react";
import Image from "next/image";
import famefilm from "@/app/SVG/Frame film.svg";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FrameFilm from "../container/Video/FrameFilm";

function Video() {
  return (
    <>
      <Header />

      <div className="flex justify-center">
        <Image src={famefilm} alt="" className="w-[1253px] h-[80px]" />
      </div>

      <FrameFilm />
      <Footer />
    </>
  );
}

export default Video;

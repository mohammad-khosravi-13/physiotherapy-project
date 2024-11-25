import React from "react";
import Image from "next/image";
import khadamtclicic from "@/app/SVG/khadamatcilicnc.svg";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuestionCard from "../container/Service-Clinic/QuestionCard";

function ServiceClinic() {
  return (
    <>
      <Header />
      <div className="flex justify-center relative">
        <Image src={khadamtclicic} alt="" className="  w-[1248px] h-[80px] " />
      </div>
      <div className="absolute -mt-12 right-[700px] text-[18px] text-white font-bold">
        <h1>خدمات کلینیک</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-28 -mt-16 ">
        <QuestionCard />
      </div>
      <Footer />
    </>
  );
}

export default ServiceClinic;
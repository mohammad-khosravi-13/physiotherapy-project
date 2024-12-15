import React from "react";
import Image from "next/image";
import khadamtclicic from "@/svg/khadamatcilicnc.svg";
import Footer from "@/components/Footer/Footer";
import QuestionCard from "../../container/Service-Clinic/QuestionCard";
import MainHeader from "@/container/MainHeader/MainHeader";

function serviceclinic() {
  return (
    <>
      <MainHeader/>
      <div className="flex justify-center relative mt-20">
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

export default serviceclinic;

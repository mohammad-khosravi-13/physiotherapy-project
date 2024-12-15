"use client"
import React from "react";
import Image from "next/image";
import editvector from "@/svg/Editvector.svg";
import reservrpic from "@/svg/reservepic.svg";
import Footer from "@/components/Footer/Footer";
import Select from "../../container/Reserve-HomeVisit/Select";
import MainHeader from "@/container/MainHeader/MainHeader";

function reservehomevisit() {
  return (
    <>
      <MainHeader/>

      <div className="flex justify-start items-center gap-2 mr-20 mt-[130px]">
        <Image
          src={editvector}
          alt=""
          width={24}
          height={24}
          className="mr-5"
        />
        <h3>رزرو</h3>
      </div>

      <div className="flex w-full mt-4">
        <Select />
        <div className="w-1/2 mb-20">
          <Image
            src={reservrpic}
            alt=""
            className="w-[410px] h-[672px] rounded-[8px] mr-[180px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default reservehomevisit;

import React, { useState } from "react";
import Image from "next/image";
import Calenderrivers from "../CalenderReserve/Calenderrivers";
import vectoralert from "@/svg/Vectoralert.svg";

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col mr-[96px] w-1/2 p-2 gap-4">
        <div className="flex justify-start gap-7">
          <div className="flex items-center gap-2">
            <input type="radio" />
            <h3>کلینیک</h3>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <h3>منزل</h3>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-[18px] text-[#000000]">نام خدمات</h3>
          <div className="ml-16 w-[400px] relative">
            <div
              className={`rounded-[8px] bg-base-200 h-[48px]  cursor-pointer flex items-center justify-between  px-4 ${
                isOpen ? "bg-[#f0f0f0]" : ""
              }`}
              onClick={toggleAccordion}
            >
              <div className="text-[16px] text-[#616161] font-medium ">
                کلیک کنید
              </div>
              <div
                className={`transform transition-transform  ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                </svg>
              </div>
            </div>

            {isOpen && (
              <div className="absolute  top-[50px] left-0 w-full bg-white rounded-b-[8px] shadow-md px-4 py-2 z-10">
                <p>لیزر کم توان</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3>انتخاب تاریخ و ساعت</h3>
        </div>
        <div className="flex justify-end -mt-8 ml-16">
          <Calenderrivers />
        </div>
        <div className="flex justify-end ml-16 mt-10 mb-32">
          <div className="bg-[#FCFCFC] w-[400px] h-[248px] rounded-[8px] flex justify-center items-center flex-col gap-5">
            <Image src={vectoralert} alt="" className="w-[25px] h-[24px]" />
            <h1>ابتدا روز مورد نظر خود را انتخاب کنید.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

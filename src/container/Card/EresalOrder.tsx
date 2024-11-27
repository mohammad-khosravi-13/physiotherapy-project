"use client";

import React, { useState } from "react";
import Mape from "../map/Mape";
import Footer from "@/components/Footer/Footer";

export default function EresalOrder() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col w-[1240px] bg-[#F4F4F4] h-[470px] mt-10 rounded-[8px] m-auto ">
        <div className="py-3 space-y-4  flex justify-between items-center">
          <div className="w-fit h-fit m-7 space-y-5">
            <div className=" flex -mt-20   ">
              <h3>انتخاب روش ارسال*</h3>
              <div className="ml-16 w-[278px] h-[48px]  relative ">
                <div
                  className={`rounded-[8px] bg-white h-[48px] cursor-pointer flex items-center justify-between px-4`}
                  onClick={toggleAccordion}
                >
                  <div className="text-[16px] text-[#616161] font-medium">
                    انتخاب کنید
                  </div>
                  <div
                    className={`transform transition-transform ${
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
                  <div className="absolute top-[50px] left-0 w-[278px] bg-white rounded-b-[8px] shadow-md px-4 py-2 z-10">
                    <p>پست</p>
                    <p>پست پیشتاز</p>
                    <p>تیپاکس</p>
                    <p>پیک</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-5">
              <h3>کد پستی</h3>
              <input
                className="w-[278px] h-[50px] rounded-[8px] mr-12"
                type="text"
              />
            </div>
            <div className=" flex mt-5">
              <h3 className="mr-2">آدرس*</h3>

              <div className="relative w-[500px]">
                <input
                  className="w-full h-[103px] rounded-[8px] mr-[75px]  "
                  type="text"
                  placeholder=""
                />

                <button className="absolute top-16 right-[495px]  w-[79px] h-[38px] bg-[#5D5E58] text-white rounded-[8px]">
                  ویرایش
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-10 mt-24">
                <h3>هزینه ارسال</h3>
                <p> پس کرایه</p>
              </div>

              <div className="flex gap-10 ">
                <h3>مبلغ قابل پرداخت</h3>
                <p> 700,000 تومان</p>
              </div>
            </div>
          </div>

          <div className="w-[476px]  h-[465px]  flex justify-center items-center p-10  ">
            <Mape />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="w-[162px] h-[48px] rounded-[8px] bg-[#0974A2] text-white text-[18px]">
          تکمیل خرید
        </button>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";
import axnobat from "@/svg/axnobat.svg";

export default function PicofReserve() {
  return (
    <>
      <div className="flex justify-center mt-5 relative    ">
        <Image className="w-[1248px] h-[360px]" src={axnobat} alt="Vector" />
        <div className="top-[72px]    absolute  left-[350px]  ">
          <h3 className="text-[28px] text-white">
            زمان و مکان دیگر محدودیت نیستند،
            <br />
            نوبت خود را آنلاین رزرو کنید.
          </h3>

          <button className=" btn bg-[#FF7A00] w-[187px] h-[48px] text-white text-[20px] mt-5 ml-32 rounded-[8px]">
            رزرو نوبت
          </button>
        </div>
      </div>
    </>
  );
}

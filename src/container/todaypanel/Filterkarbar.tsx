import React from "react";
import Image from "next/image";
import vector from "@/svg/Vector.svg"

function Filterkarbar() {
  return (
    <div className=" relative right-2 text-[#000000] mt-3 w-[85%]">
      <div className=" flex justify-between">
        <div className=" flex gap-7">
          <p>پرداخت</p>
          <p>انتخاب کنید</p>
          <Image src={vector} alt="vector icon" width={14} height={6.7} />
        </div>
        <div className=" flex gap-7">
          <p>جنسیت</p>
          <p>انتخاب کنید</p>
          <Image src={vector} alt="vector icon" width={14} height={6.7} />
        </div>
        <div className=" flex gap-7">
          <p>مراجعه</p>
          <p>انتخاب کنید</p>
          <Image src={vector} alt="vector icon" width={14} height={6.7} />
        </div>
        <div>
          <p>تاریخ</p>
        </div>
      </div>
    </div>
  );
}

export default Filterkarbar;

import React from "react";
import Image from "next/image";
import imagebaner from "@/svg/image- 48.svg";
function Banner() {
  return (
    <div>
      <div className="w-[990px] h-[352px] shadow-custom rounded-[8px] p-5 flex justify-center items-center gap-5 ">
        <div className=" flex flex-col gap-10 justify-center items-center">
          <div>
            <Image
              src={imagebaner}
              alt="image baner"
              width={124}
              height={124}
            />
          </div>
          <div className=" flex flex-col gap-3">
            <button className="w-[218px] h-[46px] rounded-[8px] shadow-custom ">
              آپلود بنر
            </button>
            <button className="w-[218px] h-[46px] rounded-[8px] shadow-custom  ">
              ابعاد
            </button>
          </div>
        </div>
        <div className=" w-[693px] h-[266px] bg-white  rounded-[8px] shadow-custom flex justify-center items-center ">
          <div>
            <h1>پیش نمایش</h1>
          </div>
        </div>
      </div>
      <div className="float-end mt-10">
        <button className="w-[177px] h-[48px] bg-[#269200] rounded-[8px] text-white">
          ثبت تغییرات
        </button>
      </div>
    </div>
  );
}

export default Banner;

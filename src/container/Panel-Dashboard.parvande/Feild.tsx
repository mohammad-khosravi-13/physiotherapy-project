import React from "react";

export default function Feild() {
  return (
    <>
      <div className="bg-[#FCFCFC] shadow-md rounded-[8px] w-[426px] h-[109px] mt-24 ">
        <div className="m-5 text-[18px] ">
          <h3>فیلتر خدمات</h3>
        </div>
        <div className="flex gap-10 m-5 ">
          <p className="text-[18px]">نوع خدمات</p>
          <div className="flex justify-start gap-7">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3 className="text-[16px]">کلینیک</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3 className="text-[16px]">منزل</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FCFCFC] shadow-md rounded-[8px] w-[426px] h-[109px] mt-24 relative  ">
        <div className="m-5 text-[18px] ">
          <h3>فیلتر تاریخ</h3>
        </div>
        <div className="flex gap-3 m-5 ">
          <p className="text-[18px]">از</p>
          <div className="flex justify-start gap-3">
            <div className="flex items-center gap-2">
              <input className="border border-[#0974A2] rounded" type="month" />
              <h3 className="text-[16px]">تا</h3>
            </div>
            <div className="flex items-center gap-2">
              <input className="border border-[#0974A2] rounded" type="month" />
            </div>
          </div>
        </div>
        <div className="absolute right-[460px] w-[106px] h-[48px] border-[2px] border-[#FF7A00] -mt-20 flex items-center justify-center rounded-[8px] btn">
          اعمال
        </div>
      </div>
      <div className="flex justify-end ml-24 mt-5">
        <button className=" btn bg-[#0974A2] w-[181px] h-[48px] rounded-[8px] text-white">
          رزرو آنلاین نوبت
        </button>
      </div>
    </>
  );
}

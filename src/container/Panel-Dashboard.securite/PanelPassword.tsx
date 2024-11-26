import React from "react";

export default function PanelPassword() {
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-6 relative">
        <h1 className="text-right w-full text-[18px] text-[#000000]">
          تعیین رمز عبور
        </h1>
        <div>
          <div className=" gap-5">
            <div className="flex items-center gap-5">
              <label className="text-right text-[18px] text-[#4A4A4A]">
                رمز عبور
              </label>
              <input
                type="text"
                className="bg-[#FFFF] shadow-md w-[386px] h-[40px]  rounded-md p-2 mr-14  "
                placeholder="رمز عبور خود را وارد کنید"
              />
            </div>
            <p className="flex justify-center mr-5 text-[12px] text-[#4A4A4A]">
              رمز عبور انتخابی شما باید 8 حرف، شامل عدد و علامت باشد.
            </p>
          </div>

          <div className=" gap-2">
            <div className="flex items-center gap-5 mt-5 ">
              <label className="text-right text-[18px] text-[#4A4A4A]">
                تکرار رمز عبور
              </label>
              <input
                type="text"
                className="bg-[#FFFF] shadow-md rounded-md p-2 w-[386px] h-[40px] mr-5"
                placeholder="تکرار رمز عبور"
              />
            </div>
          </div>

          <div className="flex justify-end ">
            <button className="btn bg-[#269200] text-[14px] text-white rounded-md p-2  w-[102px] h-[32px] text-center mt-3">
              تایید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

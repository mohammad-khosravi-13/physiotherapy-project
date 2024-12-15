import React from "react";

export default function Taghvimpanel() {
  return (
    <>
      <div className="flex justify-between ">
        <div className="bg-[#FCFCFC] shadow-md rounded-[8px] w-[426px] h-[109px] mt-24 relative ">
          <div className="m-5 text-[18px] ">
            <h3>فیلتر تاریخ</h3>
          </div>
          <div className="flex gap-3 m-5 ">
            <p className="text-[18px]">از</p>
            <div className="flex justify-start gap-3">
              <div className="flex items-center gap-2">
                <input
                  className="border border-[#0974A2] rounded"
                  type="month"
                />
                <h3 className="text-[16px]">تا</h3>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="border border-[#0974A2] rounded"
                  type="month"
                />
              </div>
            </div>
            <div className="absolute right-[460px] w-[106px] h-[48px] border-[2px] border-[#FF7A00] -mt-8 flex items-center justify-center rounded-[8px]">
              <button>اعمال</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

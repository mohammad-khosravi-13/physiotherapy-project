import React from "react";
import Image from "next/image";
import mahsol3 from "@/svg/mahsol3.svg";
import star from "@/svg/Star 3.svg";

export default function SefareshCard() {
  return (
    <>
      <div className="bg-[#FFFFF] w-[585px] h-[334px] rounded-[8px] shadow-md">
        <div className="flex justify-end m-5">
          <p className="text-[#4A4A4A] text-[12px]">مشاهده جزییات سفارش</p>
        </div>
        <div className="relative">
          <Image
            className="w-[78px] h-[78px] mr-7 flex justify-start -mt-7"
            src={mahsol3}
            alt="Vector"
          />
        </div>
        <div className="flex flex-col  mr-28   -mt-16 absolute ">
          <p className="text-[#4A4A4A] text-[14px]">
            کد پیگیری: <span className="text-[#000000]">5463</span>
          </p>

          <p className="text-[14px] text-[#4A4A4A]">
            نام محصول: <span className="text-[#000000]">ویت کاف</span>
          </p>
        </div>
        <div className="flex justify-end">
          <div className="flex -mt-10 m-5">
            <Image
              className="w-[16px] h-[16px] m-1 flex  items-center"
              src={star}
              alt="Vector"
            />
            <p className="text-[10px] text-[#4A4A4A] mt-1">
              25 <span>امتیاز</span>
            </p>
          </div>
        </div>
        <div className="m-5 mr-7">
          <p>
            ارسال شده به:{" "}
            <span> تهران، نارمک، میدان نبوت، خیابان مدائن، پلاک 23</span>
          </p>

          <p>
            جمع کل فاکتور: <span>435,000</span> <span>تومان</span>
          </p>
        </div>
        <div className="relative mt-3 m-5 ">
          <input
            type="text"
            placeholder="دیدگاه"
            className="border border-gray-300 rounded-[8px] w-[537px] h-[49px] p-4 shadow-md"
          />

          <button className=" btn absolute right-[454px] bg-[#269200] text-white mt-[1px]  rounded-[8px] w-[83px] h-[40px] ">
            ثبت
          </button>
        </div>
        <div className="flex justify-center">
          <button className=" w-[152px] h-[48px] border-[2px] border-[#0974A2] rounded-[8px] -mt-2">
            سفارش مجدد
          </button>
        </div>
      </div>
    </>
  );
}

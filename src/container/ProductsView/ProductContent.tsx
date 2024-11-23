import React from 'react'
import Image from 'next/image'
import mahsol3 from "@/svg/mahsol3.svg";
import star from "@/svg/Star 3.svg";
import vectorcomments from "@/svg/Vectorcalender.svg";

export default function ProductContent() {
  return (

    <>
    
    
    <div className="absolute -mt-[240px] mr-[120px]">
        <div className="flex  ">
          <Image src={mahsol3} alt="" className="  w-[229px] h-[228px]  " />
          <div className="mt-24 mr-10 ">
            <h3 className="-mt-8 text-[18px] text-[#000000]">ویت کاف</h3>
            <div className="flex gap-8 mt-5  ">
              <div className="flex gap-2">
                <Image src={star} alt="" className="  w-[24px] h-[24px]  " />
                <p className="text-[16px] text-[#4A4A4A]">25امتیاز</p>
              </div>

              <div className="flex gap-2">
                <Image
                  src={vectorcomments}
                  alt=""
                  className="  w-[24px] h-[24px]  "
                />
                <p className="text-[16px] text-[#4A4A4A]">25نظر</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mr-[1070px] -mt-[170px] flex-col space-y-5 ">
          <p>435,000 تومان</p>
          <button className= " btn bg-[#FF7A00] w-[131px] h-[48px] rounded-[8px] text-white ">
            افزودن
          </button>
        </div>
      </div>


    </>
  )
}

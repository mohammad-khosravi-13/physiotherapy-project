import React from 'react'
import Image from 'next/image'
import calender from "@/svg/calendar-2.svg";
import timer from "@/svg/timer.svg";
import vectorsearch from "@/svg/Vectorsearch.svg";
import Rectangle from "@/svg/Rectangle 2.png";


export default function MainPoster() {
  return (

    <>
    
    <Image src={Rectangle} alt="" width={1440} height={559} className="" />

<div className="flex justify-start mr-28 -mt-[172px] ">
  <div className="absolute  -mt-[170px] rtl: flex justify-center flex-col  ">
    <h3 className="font-bold text-[28px] text-gray-700 ">
      کلینیک فیزیوتراپی <span className="text-blue-500">سلامت</span>
    </h3>
    <h3 className="text-[22px]">درمان تخصصی را با تجربه کنید.</h3>
    <button className="btn bg-orange-500 mt-5 text-white text-[22px] rounded-[8px] w-[193px] h-[48px]">
      رزرو آنلاین نوبت
    </button>
  </div>
</div>

<div className="flex justify-start   mr-24">
  <div className="absolute mt-32 flex justify-Start gap-7 pr-10 w-[676px] h-[96px] bg-white rounded-md  items-center shadow-lg  ">
    <Image src={calender} alt="" width={24} height={24} className="" />
    <p>انتخاب روز </p>
    <div className="flex justify-center pr-20 gap-7">
      <Image src={timer} alt="" width={24} height={24} className="" />
      <p>انتخاب ساعت</p>
    </div>
    <div className="pr-48  ">
      <Image
        src={vectorsearch}
        alt=""
        width={24}
        height={24}
        className="bg-[#0974A2] w-[46px] h-[46px] p-2 rounded-[4px] "
      />
    </div>
  </div>
</div>

    </>
  )
}

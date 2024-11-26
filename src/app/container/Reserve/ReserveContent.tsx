import React from 'react'
import Image from 'next/image'
import editvector from "@/app/SVG/Editvector.svg";
import reservrpic from "@/app/SVG/reservepic.svg";
import CalendarReserve from "@/app/container/CalenderReserve/Calenderrivers";
import vectoralert from "@/app/SVG/Vectoralert.svg";


export default function ReserveContent() {
  return (

    <>
    
    
    <div className="flex justify-start items-center gap-2 mr-20 mt-[130px]">
        <Image
          src={editvector}
          alt=""
          width={24}
          height={24}
          className="mr-5"
        />
        <h3>رزرو</h3>
      </div>

      <div className="flex w-full  mt-4 ">
        <div className="flex flex-col mr-[96px] w-1/2 p-2  gap-4 ">
          <div className="flex justify-start gap-7">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>کلینیک</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>منزل</h3>
            </div>
          </div>
          <div className="mt-5">
            <h3>انتخاب تاریخ و ساعت</h3>
          </div>
          <div className="flex justify-end -mt-8 ml-16">
            <CalendarReserve />
          </div>
          <div className="flex justify-end ml-16 mt-10 ">
            <div className="bg-[#FCFCFC] w-[400px] h-[248px] rounded-[8px] flex justify-center items-center flex-col gap-5   ">
              <Image src={vectoralert} alt="" className="w-[25px] h-[24px]" />
              <h1>ابتدا روز مورد نظر خود را انتخاب کنید.</h1>
            </div>
          </div>
        </div>

        <div className="w-1/2 mb-20 ">
          <Image
            src={reservrpic}
            alt=""
            className="w-[410px] h-[672px] rounded-[8px] mr-[180px]"
          />
        </div>
      </div>
    </>
  )
}

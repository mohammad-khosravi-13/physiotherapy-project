import React from "react";
import Image from "next/image";
import vectorcalender from "@/svg/Vectorcalender.svg";
import vectortaghvim from "@/svg/Vector taghvim.svg";

export default function DayofWork() {
  return (
    <>
      <div className="bg-white flex justify-start items-center  ">
        <Image
          className="mr-24"
          src={vectorcalender}
          alt="Vector"
          width={24}
          height={24}
        />
        <h3 className="pr-2 text-[18px]">روزهای کاری</h3>
      </div>
      <div className=" flex justify-center pr-10 gap-10 mr-12 items-center w-[1300px] h-[157px] ">
        <div className=" shadow-lg  flex flex-col    w-[176px] h-[101px] rounded-[8px]  ">
          <div className="mt-4 flex  text-[#4A4A4A] text-[16px] gap-2">
            <Image
              className="  mr-1 "
              src={vectortaghvim}
              alt="Vector"
              width={12}
              height={13}
            />
            <div className=" flex gap-4 justify-center  ">
              <p>پنجشنبه</p>
              <p>1402/11/21</p>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mt-5">8 الی 20</h5>
          </div>
        </div>
        <div className=" shadow-lg  flex flex-col    w-[176px] h-[101px] rounded-[8px]  ">
          <div className="mt-4 flex  text-[#4A4A4A] text-[16px] gap-2">
            <Image
              className="  mr-1 "
              src={vectortaghvim}
              alt="Vector"
              width={12}
              height={13}
            />
            <div className=" flex gap-4 justify-center  ">
              <p>پنجشنبه</p>
              <p>1402/11/21</p>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mt-5">8 الی 20</h5>
          </div>
        </div>
        <div className=" shadow-lg  flex flex-col    w-[176px] h-[101px] rounded-[8px]  ">
          <div className="mt-4 flex  text-[#4A4A4A] text-[16px] gap-2">
            <Image
              className="  mr-1 "
              src={vectortaghvim}
              alt="Vector"
              width={12}
              height={13}
            />
            <div className=" flex gap-4 justify-center  ">
              <p>پنجشنبه</p>
              <p>1402/11/21</p>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mt-5">8 الی 20</h5>
          </div>
        </div>
        <div className=" shadow-lg  flex flex-col    w-[176px] h-[101px] rounded-[8px]  ">
          <div className="mt-4 flex  text-[#4A4A4A] text-[16px] gap-2">
            <Image
              className="  mr-1 "
              src={vectortaghvim}
              alt="Vector"
              width={12}
              height={13}
            />
            <div className=" flex gap-4 justify-center  ">
              <p>پنجشنبه</p>
              <p>1402/11/21</p>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mt-5">8 الی 20</h5>
          </div>
        </div>
        <div className=" shadow-lg  flex flex-col    w-[176px] h-[101px] rounded-[8px]  ">
          <div className="mt-4 flex  text-[#4A4A4A] text-[16px] gap-2">
            <Image
              className="  mr-1 "
              src={vectortaghvim}
              alt="Vector"
              width={12}
              height={13}
            />
            <div className=" flex gap-4 justify-center  ">
              <p>پنجشنبه</p>
              <p>1402/11/21</p>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mt-5">8 الی 20</h5>
          </div>
        </div>
        <div className=" shadow-lg  flex flex-col    w-[176px] h-[101px] rounded-[8px]  ">
          <div className="mt-4 flex  text-[#4A4A4A] text-[16px] gap-2">
            <Image
              className="  mr-1 "
              src={vectortaghvim}
              alt="Vector"
              width={12}
              height={13}
            />
            <div className=" flex gap-4 justify-center  ">
              <p>پنجشنبه</p>
              <p>1402/11/21</p>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mt-5">8 الی 20</h5>
          </div>
        </div>
      
      </div>
    </>
  );
}

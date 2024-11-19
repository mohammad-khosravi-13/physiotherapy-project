import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Image from "next/image";
import Filtercontiner from "@/app/container/todaypanel/Filtercontiner";
import search from "@/svg/Search 2.svg";
import React from "react";
import Tabelcontiner from "@/app/container/todaypanel/Tabelcontiner";
import Filterkarbar from "@/app/container/todaypanel/Filterkarbar";

function Page() {
  return (
    <>
      <Navbar />
      <div className=" w-[83%] h-[97.2%] flex gap-9 mt-5  m-auto">
        <div>
          <Crad />
        </div>
        <div className=" w-full ">
          <div className=" flex  items-center justify-between">
            <div className="  right-28  ">
              <input
                type="text"
                className=" relative left-5 border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
                placeholder="جستجو"
              />
              <div className=" relative bottom-9 left-1">
                <Image src={search} alt="search icon" width={24} height={24} />
              </div>
            </div>
            <div className=" relative left-8 bottom-5 ">
              <button className="bg-[#269200] w-[124px] h-[48px] rounded-[8px]">
                افزودن رزرو
              </button>
            </div>
          </div>
          <div>
            <Filtercontiner />
          </div>
          <div>
            <Filterkarbar />
          </div>
          <div>
            <Tabelcontiner />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Image from "next/image";
import search from "@/svg/Search 2.svg";
import React from "react";
import Filtercontiner from "@/app/container/todaypanel/Filtercontiner";
import Filterservice from "@/app/container/servicecontiner/Filterservice";
import Tabelservice from "@/app/container/servicecontiner/Tabelservice";

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto  ">
        <div>
          <Crad />
        </div>
        <div className=" w-full ">
          <div className=" flex justify-between ">
            <div>
              <input
                type="text"
                className=" relative  border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
                placeholder="جستجو"
              />
              <div className=" relative bottom-9 right-3">
                <Image src={search} alt="search icon" width={24} height={24} />
              </div>
            </div>
            <div>
              <button className=" ml-6 w-[177px] h-[40px] bg-[#269200] rounded-[8px]">
                افزودن
              </button>
            </div>
          </div>
          <div className=" mb-7 relative bottom-8 right-3">
           <Filtercontiner/>
          </div>
          <div>
            <Filterservice/>
          </div>
          <div className="rounded-t-lg">
            <Tabelservice/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

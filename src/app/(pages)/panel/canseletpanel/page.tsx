import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Image from "next/image";
import search from "@/svg/Search 2.svg"
import React from "react";
import Filtercontiner from "@/app/container/todaypanel/Filtercontiner";
import Filterchoose from "@/app/container/canseled/Filterchoose";
import Tabelcanseled from "@/app/container/canseled/Tabelcanseled";

function page() {
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
          <Crad />
        </div>
        <div className=" w-full">
          <div>
            <input
              type="text"
              className=" relative  border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
              placeholder="جستجو"
            />
            <div className=" relative bottom-9 right-3">
              <Image src={search} alt="search icon" width={24} height={24} />
            </div>
            <div className="">
                <Filtercontiner/>
                <Filterchoose/>
            </div>
          </div>
            <div className="">
                <Tabelcanseled/>
            </div>
        </div>
      </div>
    </>
  );
}

export default page;

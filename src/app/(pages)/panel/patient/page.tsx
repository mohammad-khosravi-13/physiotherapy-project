import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Filtercontiner from "@/app/container/todaypanel/Filtercontiner";
import Image from "next/image";
import search from "@/svg/Search 2.svg";
import React from "react";
import Filterpatinet from "@/app/container/patinetcontaner/Filterpatinet";
import Tabelpatinet from "@/app/container/patinetcontaner/Tabelpatinet";

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-[1248px] flex gap-9 h-[972px] m-auto">
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
          </div>
          <div className=" relative bottom-6 right-3">
            <Filtercontiner />
          </div>
          <div>
            <Filterpatinet />
          </div>
          <div>
            <Tabelpatinet/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

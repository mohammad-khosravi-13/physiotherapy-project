import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import FilterServices from "@/container/financeial/FilterServices";
import Reservation from "@/container/financeial/Reservation";
import Tabelfinaceil from "@/container/financeial/Tabelfinaceil";
import Filtercontiner from "@/container/todaypanel/Filtercontiner";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="w-[1248px] flex gap-9 h-[972px] m-auto">
        <div>
          <Crad />
        </div>
        <div className=" w-full">
          <div className=" w-[87%]">
            <Reservation/>
          </div>
          <div className="mr-1">
            <Filtercontiner/>
          </div>
          <div>
            <FilterServices/>
          </div>
        <div>
            <Tabelfinaceil/>
        </div>
        </div>
      </div>
    </>
  );
}

export default page;

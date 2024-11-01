import Crad from "@/app/components/dashbord/Crad";
import Navbar from "@/app/components/dashbord/Navbar";
import FilterServices from "@/app/container/financeial/FilterServices";
import Reservation from "@/app/container/financeial/Reservation";
import Tabelfinaceil from "@/app/container/financeial/Tabelfinaceil";
import Filtercontiner from "@/app/container/todaypanel/Filtercontiner";
import React from "react";

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
    </div>
  );
}

export default page;

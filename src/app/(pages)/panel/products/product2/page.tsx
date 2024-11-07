import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Tablepro2 from "@/app/container/product/product2/Tablepro2";
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
         <div className=" relative bottom-7">
            <Filtercontiner/>
         </div>
         <div>
          <Tablepro2/>
         </div>
        </div>
      </div>
    </div>
  );
}

export default page;

import Tableblogpanel from "@/app/container/setting/panelblog/Tableblogpanel";
import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
          <Crad />
        </div>
        <div className=" mt-12 w-[80%]">
          <Tableblogpanel />
        </div>
      </div>
    </>
  );
}

export default page;

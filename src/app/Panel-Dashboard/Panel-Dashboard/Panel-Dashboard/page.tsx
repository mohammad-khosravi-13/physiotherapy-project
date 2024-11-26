import SefareshCard from "@/container/Panel-Dashboard.sefaresh/SefareshCard";
import Taghvimpanel from "@/container/Panel-Dashboard.sefaresh/Taghvimpanel";
import Crod from "@/container/Panel-Dashboard/Crod";
import HeaderPanel from "@/container/Panel-Dashboard/HeaderPanel";
import React from "react";

export default function PanelDashboard() {
  return (
    <>
      <HeaderPanel />
      <div className=" w-full gap-7">
        <div className="flex w-full  gap-7 ">
          <Crod />
          <Taghvimpanel/>
        </div>
        <div className=" flex justify-start mr-[320px] -mt-[500px]">

          <SefareshCard/>
        </div>
      </div>
    </>
  );
}

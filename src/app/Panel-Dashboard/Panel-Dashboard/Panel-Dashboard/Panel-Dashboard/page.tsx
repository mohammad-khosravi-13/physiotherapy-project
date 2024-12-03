import Feild from "@/container/Panel-Dashboard.parvande/Feild";
import Tabel from "@/container/Panel-Dashboard.payam/Tabel";
import Crod from "@/container/Panel-Dashboard/Crod";
import HeaderPanel from "@/container/Panel-Dashboard/HeaderPanel";
import React from "react";

export default function paneldashboard() {
  return (
    <>
      <HeaderPanel />
      <div className=" w-full gap-7 relative mt-20">
        <div className="flex w-full  gap-7 ">
          <Crod />
          <Feild />
        </div>
        <div className=" absolute top-[200px] right-[320px]">
          <Tabel />
        </div>
      </div>
    </>
  );
}

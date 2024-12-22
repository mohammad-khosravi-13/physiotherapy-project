import Feild from "@/container/Panel-Dashboard.parvande/Feild";
import Information from "@/container/Panel-Dashboard.parvande/Information";
import Crod from "@/container/Panel-Dashboard/Crod";
import HeaderPanel from "@/container/Panel-Dashboard/HeaderPanel";
import React from "react";

export default function file() {
  return (
    <>
      <HeaderPanel />

      <div className="flex flex-col w-full gap-7 mt-20">
        <div className="flex w-full justify-start gap-7 ">
          <Crod />
          <Feild />
        </div>
        <div className=" flex justify-start mr-[320px] -mt-[500px]">
          <Information />
        </div>
      </div>
    </>
  );
}

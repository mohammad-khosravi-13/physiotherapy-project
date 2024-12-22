import Buttonpanel from "@/container/Panel-Dashboard.securite/Buttonpanel";
import PanelPassword from "@/container/Panel-Dashboard.securite/PanelPassword";
import Crod from "@/container/Panel-Dashboard/Crod";
import HeaderPanel from "@/container/Panel-Dashboard/HeaderPanel";
import React from "react";

export default function security() {
  return (
    <>
      <HeaderPanel />
      <div className=" w-full gap-7 mt-20">
        <div className="flex  w-full  gap-7 ">
          <Crod />
          <div className="mt-20">
            <PanelPassword />
          </div>

          <div className="mr-72">
            <Buttonpanel />
          </div>
        </div>
      </div>
    </>
  );
}

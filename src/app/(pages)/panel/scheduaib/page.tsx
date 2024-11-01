import Crad from "@/app/components/dashbord/Crad";
import Navbar from "@/app/components/dashbord/Navbar";
import React from "react";
// import Taghvim from "@/app/container/datepikcer/Taghvim";

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto">
        <div>
          <Crad />
        </div>
        <div className="  w-full">
          {/* <Taghvim /> */}
        </div>
      </div>
    </div>
  );
}

export default page;

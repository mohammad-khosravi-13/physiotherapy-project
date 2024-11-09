import Banner from "@/app/container/setting/Banner";
import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
            <Crad/>
        </div>
        <div>
            <Banner/>
        </div>
      </div>
    </div>
  );
}

export default page;
import React from "react";
import Navbar from "@/components/dashbord/Navbar";
import Crad from "@/components/dashbord/Crad";
import DashboardCards from "@/app/container/dashborde/DashboardCards";
import NemodarCards from "@/app/container/dashborde/NemodarCards";

function page() {
  const nemodar = [
    { text: "خدمات منزل", color: "bg-[#34B53A]" },
    { text: "خدمات کلینیک", color: "bg-[#FF3A29]" },
    { text: "محصولات", color: "bg-[#4339F2]" },
  ];
  return (
    <div className=" px-20 pb-20">
      <div>
        <Navbar />
      </div>
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
          <Crad />
        </div>
        <div className=" flex flex-col gap-10">
          <div>
            <DashboardCards />
          </div>
          <div className=" font-bold text-black">
            <p>گزارش مالی</p>
          </div>
          <div>
            <NemodarCards />
          </div>
        </div>
      </div>  
    </div>
  );
}

export default page;

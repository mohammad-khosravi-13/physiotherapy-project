import React from "react";
import Navbar from "@/components/dashbord/Navbar";
import Crad from "@/components/dashbord/Crad";
import DashboardCards from "@/container/dashborde/DashboardCards";
import NemodarCards from "@/container/dashborde/NemodarCards";

function page() {
  const nemodar = [
    { text: "خدمات منزل", color: "bg-[#34B53A]" },
    { text: "خدمات کلینیک", color: "bg-[#FF3A29]" },
    { text: "محصولات", color: "bg-[#4339F2]" },
  ];

  return (
    <div className="px-5 md:px-10 lg:px-20 pb-20">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row gap-9 h-auto lg:h-[972px] m-auto max-w-[1248px]">
        <div className="flex-1">
          <Crad />
        </div>

    
        <div className="flex-1 flex flex-col gap-10">
      
          <div>
            <DashboardCards />
          </div>

          <div className="font-bold text-black text-center lg:text-left">
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

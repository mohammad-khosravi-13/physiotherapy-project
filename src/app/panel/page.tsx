import React from "react";
import Navbar from "@/components/dashbord/Navbar";
import Crad from "@/components/dashbord/Crad";
import DashboardCards from "@/container/dashborde/DashboardCards";
import Chertpanel from "@/container/dashborde/Chertpanel";

function page() {
  const nemodar = [
    { text: "خدمات منزل", color: "bg-[#34B53A]" },
    { text: "خدمات کلینیک", color: "bg-[#FF3A29]" },
    { text: "محصولات", color: "bg-[#4339F2]" },
  ];
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="  flex justify-center items-center gap-9 w-[1248px] m-auto">
          <div>
            <Crad />
          </div>
          <div className=" h lg:h-[972px] sm:w-full lg:flex sm:flex-col gap-10">
            <div className=" sm:w-full">
              <DashboardCards />
            </div>
            <div className="font-bold text-black text-right ">
              <p>گزارش مالی</p>
            </div>
            <div>
              <Chertpanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

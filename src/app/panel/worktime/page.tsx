import Calendarwork from "@/container/datepikcer/Calender";
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
        <div>
          <Calendarwork />
          <button className=" bg-[#269200] w-[177px] h-[36px] rounded-[8px] float-end mt-10">
            ثبت تغیرات
          </button>
        </div>
      </div>
    </>
  );
}

export default page;

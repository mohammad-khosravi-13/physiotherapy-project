import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Addadmin from "@/app/container/admin/Addadmin";
import Tabeladmin from "@/app/container/admin/Tabeladmin";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <Crad />
        <div className="w-full">
          <Addadmin />
          <Tabeladmin />
        </div>
      </div>
    </>
  );
}

export default page;

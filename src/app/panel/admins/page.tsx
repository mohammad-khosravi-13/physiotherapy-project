import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Addadmin from "@/container/admin/Addadmin";
import Tabeladmin from "@/container/admin/Tabeladmin";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
          <Crad />
        </div>
        <div className="w-full">
          <div>
            <Addadmin />
          </div>
          <Tabeladmin />
        </div>
      </div>
    </>
  );
}

export default page;

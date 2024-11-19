import Tablequestion from "@/app/container/setting/question/Tablequestion";
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
        <div className=" w-[100%] mt-12">
          <Tablequestion />
        </div>
      </div>
    </>
  );
}

export default page;

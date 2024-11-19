import React from "react";
import Image from "next/image";
import filtericon from "@/svg/Filter 3.svg";

function Filtercontiner() {
  return (
    <div className=" text-black">
      <div className="flex items-center mt-8 gap-2">
        <div className=" ">
          <Image src={filtericon} alt="filtericon" width={20} height={20} />
        </div>
        <div>
          <p>فیلتر</p>
        </div>
      </div>
    </div>
  );
}

export default Filtercontiner;

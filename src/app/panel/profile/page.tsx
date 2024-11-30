import Navbarprofile from "@/container/profile/Navbarprofile";
import React from "react";
import Image from "next/image";
import pattern from "@/svg/Pattern.svg";

function page() {
  return (
    <>
      <div className="min-w-[340px] max-w-[1480px] w-full h-full relative">
        <Navbarprofile />
        <div className="p-4 text-white"></div>
        <Image
          src={pattern}
          alt="pattern"
          height={1000}
          width={133}
          className="absolute top-0 right-1/2 md:right-1/4 lg:right-3/4 w-auto max-w-full"
        />
      </div>
    </>
  );
}

export default page;

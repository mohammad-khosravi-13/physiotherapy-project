import Navbarprofile from "@/container/profile/Navbarprofile";
import React from "react";
import Image from "next/image";
import pattern from "@/svg/Pattern.svg";
function page() {

  return (
    <>
      <div>
        <Navbarprofile />

        <Image
          src={pattern}
          alt="pattern"
          height={1000}
          width={133}
          className="absolute  top-0  left-full right-3/4
          "
        />
      </div>
    </>
  );
}

export default page;
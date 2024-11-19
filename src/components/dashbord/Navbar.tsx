import React from 'react'
import logo from "@/svg/Logo 1.svg";
import Image from "next/image";
import Profile from "@/images/Profile 1.png";
function Navbar() {
  return (
    <div className=" w-[1248px] m-auto flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" width={60} height={80} />
      </div>
      <div>
        <Image src={Profile} alt="Profile" width={24} height={24} />
      </div>
    </div>
  );
}

export default Navbar
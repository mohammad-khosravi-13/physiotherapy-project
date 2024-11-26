import React from 'react'
import logo from "@/svg/Logo 1.svg";
import Image from "next/image";
import Profile from "@/images/Profile 1.png";
function Navbar() {
  return (
    <div className="w-full max-w-[1248px] px-4 sm:px-6 lg:px-8 m-auto flex justify-between items-center">
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
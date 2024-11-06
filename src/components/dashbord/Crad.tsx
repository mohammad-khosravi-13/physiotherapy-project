import React from 'react'
import Image from "next/image";
import logout from "../../images/Logout.png";
function Crad() {
  return (
    <div className="w-[186px] h-[100%] border-2 rounded-md flex flex-col justify-between">
      <div></div>
      <div className="flex flex-col items-center p-5">
        <button className="bg-[#FF4B4B] h-12 w-36 rounded-lg flex items-center justify-center gap-3">
          <Image src={logout} alt="logout img" width={20} height={20} />
          <span>خروج</span>
        </button>
      </div>
    </div>
  );
}

export default Crad;
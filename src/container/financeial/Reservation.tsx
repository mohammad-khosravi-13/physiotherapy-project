import React from "react";

function Reservation() {
  return (
    <div>
      <div className=" flex items-center text-black justify-between ">
        <div>
          <button className="w-[334px] h-[48px] text-white  rounded-[8px] bg-[#0974A2]">
            رزرو شده های کلینیک
          </button>
        </div>
        <div className="ml-[9%]">
          <p>رزرو شده های خدمات منزل</p>
        </div>
        <div>
          <p>محصولات خریداری شده</p>
        </div>
      </div>
    </div>
  );
}

export default Reservation;

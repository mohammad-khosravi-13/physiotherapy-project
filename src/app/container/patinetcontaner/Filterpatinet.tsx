import React from 'react'
import Image from 'next/image';
import vector from "../../svg/Vector.svg"
function Filterpatinet() {
  return (
    <div>
      <div className=" flex text-black justify-between items-center w-[95%]   ">
        <div className=" flex w-[46%] justify-between items-center relative bottom-1">
          <div className=" text-black mr-1 flex items-center gap-9 mt-3">
            <div>
              <p>جنسیت</p>
            </div>
            <div> انتخاب کنید</div>
            <div>
              <Image src={vector} alt="vector icon" width={14} height={6.7} />
            </div>
          </div>
          <div className=" text-black mr-1 flex items-center gap-9 mt-3">
            <div>
              <p>جنسیت</p>
            </div>
            <div> انتخاب کنید</div>
            <div>
              <Image src={vector} alt="vector icon" width={14} height={6.7} />
            </div>
          </div>
        </div>
        <div className=" flex gap-10">
          <div className=" flex items-center gap-1">
            <p>تاریخ ایجاد از</p>
            <input
              type="text"
              className=" rounded-[8px] w-[160px] h-[36px] border-2 border-[#0974A2]"
            />
          </div>
          <div className=" flex items-center gap-1">
            <p>تا</p>
            <input
              type="text"
              className=" rounded-[8px] w-[160px] h-[36px] border-2 border-[#0974A2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filterpatinet
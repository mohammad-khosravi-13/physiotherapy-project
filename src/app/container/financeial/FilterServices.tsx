import React from 'react'
import Image from 'next/image';
import vector from "../../svg/Vector.svg"
function FilterServices() {
  return (
    <div className=" text-black flex justify-between items-center">
      <div className=" mr-1 flex items-center gap-7 mt-3">
        <div>خدمات</div>
        <div> انتخاب کنید</div>
        <div>
          <Image src={vector} alt="vector icon" width={14} height={6.7} />
        </div>
      </div>
      <div className=' flex gap-10'>
        <div className=' flex items-center gap-1'> 
            <p>تاریخ از</p>
          <input
            type="text"
            className=" rounded-[8px] w-[160px] h-[36px] border-2 border-[#0974A2]"
          />
        </div>
            <div className=' flex items-center gap-1'>
                <p>تا</p>
            <input
                type="text"
                className=" rounded-[8px] w-[160px] h-[36px] border-2 border-[#0974A2]"
            />
            </div>
      </div>
    </div>
  );
}

export default FilterServices
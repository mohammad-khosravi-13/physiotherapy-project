import React from 'react'
import Image from 'next/image';
import vector from "../../svg/Vector.svg"
function Filterservice() {
  return (
    <div>
      <div className=' w-[52%] relative bottom-10 right-3 flex justify-between items-center'>
        <div className=" text-black mr-1 flex items-center gap-7 ">
          <div>
            <p>خدمات</p>
          </div>
          <div>
            <p>انتخاب کنید</p>
          </div>
          <div>
            <Image src={vector} alt="vector icon" width={14} height={6.7} />
          </div>
        </div>
        <div className=" text-black mr-1 flex items-center gap-7 ">
          <div>
            <p>الگوی مراجعه</p>
          </div>
          <div>
            <p>انتخاب کنید</p>
          </div>
          <div>
            <Image src={vector} alt="vector icon" width={14} height={6.7} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filterservice
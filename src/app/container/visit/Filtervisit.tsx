import React from 'react'
import Image from 'next/image';
import vector from '../../svg/Vector.svg'
function Filtervisit() {
  return (
    <div>
      <div className=" text-black opacity-60  mt-1 w-[94%] flex justify-between items-center">
        <div>
          <p>تاریخ</p>
        </div>
        <div className=" flex gap-12 relative bottom-1">
          <div className=" text-black text-[16px] mr-1 flex items-center gap-12  mt-3">
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
              <p>خدمات</p>
            </div>
            <div> انتخاب کنید</div>
            <div>
              <Image src={vector} alt="vector icon" width={14} height={6.7} />
            </div>
          </div>
          <div className=" text-black mr-1 flex items-center gap-9 mt-3">
            <div>
              <p>وضعیت</p>
            </div>
            <div> انتخاب کنید</div>
            <div>
              <Image src={vector} alt="vector icon" width={14} height={6.7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtervisit
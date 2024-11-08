import React from 'react'
import Image from 'next/image';
import vector from '@/svg/Vector.svg'
function Filterpms() {
  return (
    <div>
      <div className=" text-black text-[16px] mr-1 flex items-center gap-12  mt-3">
        <div>
          <p>جنسیت</p>
        </div>
        <div> انتخاب کنید</div>
        <div>
          <Image src={vector} alt="vector icon" width={14} height={6.7} />
        </div>
      </div>
    </div>
  );
}

export default Filterpms
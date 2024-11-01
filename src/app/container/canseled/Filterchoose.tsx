import React from 'react'
import Image from 'next/image'
import vector from"../../svg/Vector.svg"
function Filterchoose() {
  return (
    <div>
      <div className=" text-black mr-1 flex items-center gap-7 mt-3">
        <div>وضعیت بازگشت وجه</div>
        <div> انتخاب کنید</div>
        <div>
          <Image src={vector} alt="vector icon" width={14} height={6.7} />
        </div>
      </div>
    </div>
  );
}

export default Filterchoose
import Crad from '@/app/components/dashbord/Crad';
import Navbar from '@/app/components/dashbord/Navbar'
import React from 'react'
import Image from 'next/image';
import search from "../../../svg/Search 2.svg"
import Tabelproduct from '@/app/container/product/Tabelproduct';
function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-[1248px] flex gap-9 h-[972px] m-auto">
        <div>
          <Crad />
        </div>
        <div className="w-full">
          <div className="  flex justify-between items-center ">
            <div>
              <input
                type="text"
                className=" relative top-3 border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
                placeholder="جستجو"
              />
              <div className=" relative bottom-6 right-3">
                <Image src={search} alt="search icon" width={24} height={24} />
              </div>
            </div>
            <div>
              <button className=" ml-6 w-[177px] h-[40px] bg-[#269200] rounded-[8px]">
                افزودن محصول جدید
              </button>
            </div>
          </div>
          <div>
            <Tabelproduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
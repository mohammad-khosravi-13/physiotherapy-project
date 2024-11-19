import React from 'react'
import Image from 'next/image'
import panelimage from "@/app/SVG/panelimage.svg";
import paneletlaat from "@/app/SVG/paneletelaat.svg";
import panelparvande from "@/app/SVG/panelparvande.svg";
import panelsefareshat from "@/app/SVG/panelsefareshat.svg";
import panelpayam from "@/app/SVG/panelpayam.svg";
import panelamniyat from "@/app/SVG/panelamniyat.svg";
import paneleeelanat from "@/app/SVG/paneleelanat.svg";
import exit from "@/app/SVG/exit.svg";

export default function Crod() {
  return (
    <>
    
    
    <div className=" bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mr-24 mt-[20px] h-[712px] ">
          <div className="relative  ">
            <Image
              src={panelimage}
              alt=""
              width={121}
              height={115}
              className=""
            />
          </div>
          <div className="mt-10 pl-2">
           

            <ul className="mt-4 ">
            <li className="flex items-center gap-3  py-2 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
                <Image src={paneletlaat} alt="" width={24} height={24} />
                <span>اطلاعات</span>
              </li>
              <li className="flex items-center gap-3  py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
                <Image src={panelparvande} alt="" width={24} height={24} />
                <span>پرونده</span>
              </li>
              <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
                <Image src={panelsefareshat} alt="" width={24} height={24} />
                <span>سفارشات</span>
              </li>
              <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
                <Image src={panelpayam} alt="" width={24} height={24} />
                <span>پیام‌ها</span>
              </li>
              <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
                <Image src={panelamniyat} alt="" width={24} height={24} />
                <span>امنیت</span>
              </li>
              <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
                <Image src={paneleeelanat} alt="" width={24} height={24} />
                <span>اعلانات</span>
              </li>
            </ul>

            <button className="mt-40 w-[144px] h-[45px] bg-[#FF4D4D] text-white py-2 rounded-lg flex items-center justify-center gap-2">
              <Image src={exit} alt="" width={18} height={18} />

              <span>خروج</span>
            </button>
          </div>
        </div>

    </>
  )
}

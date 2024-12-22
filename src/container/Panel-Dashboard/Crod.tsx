import React from "react";
import Image from "next/image";
import panelimage from "@/svg/panelimage.svg";
import paneletlaat from "@/svg/paneletelaat.svg";
import panelparvande from "@/svg/panelparvande.svg";
import panelsefareshat from "@/svg/panelsefareshat.svg";
import panelpayam from "@/svg/panelpayam.svg";
import panelamniyat from "@/svg/panelamniyat.svg";
import paneleeelanat from "@/svg/paneleelanat.svg";
import exit from "@/svg/exit.svg";
import Link from "next/link";

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
              <Link href={"/panel-dashboard"}>
                <span>اطلاعات</span>
              </Link>
            </li>
            <li className="flex items-center gap-3  py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
              <Image src={panelparvande} alt="" width={24} height={24} />
              <Link href={"/panel-dashboard/file"}>
                <span>پرونده</span>
              </Link>
            </li>
            <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
              <Image src={panelsefareshat} alt="" width={24} height={24} />
              <Link href={"/panel-dashboard/order"}>
                <span>سفارشات</span>
              </Link>
            </li>
            <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
              <Image src={panelpayam} alt="" width={24} height={24} />
              <Link href={"/panel-dashboard/massage"}>
                <span>پیام ها</span>
              </Link>
            </li>
            <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
              <Image src={panelamniyat} alt="" width={24} height={24} />
              <Link href={"/panel-dashboard/security"}>
                <span>امینت</span>
              </Link>
            </li>
            <li className="flex items-center gap-3 py-3 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
              <Image src={paneleeelanat} alt="" width={24} height={24} />
              <Link href={"/panel-dashboard/notification"}>
                <span>اعلانات</span>
              </Link>
            </li>
          </ul>

          <button className="btn mt-32 w-[144px] h-[45px] bg-[#FF4D4D] text-white py-2 rounded-lg flex items-center justify-center gap-2">
            <Image src={exit} alt="" width={18} height={18} />

            <span>خروج</span>
          </button>
        </div>
      </div>
    </>
  );
}

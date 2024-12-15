"use client";
import { useState } from "react";
import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Image from "next/image";
import close from "@/svg/Close.svg";
import Filtercontiner from "@/container/todaypanel/Filtercontiner";
import search from "@/svg/Search 2.svg";
import Tabelcontiner from "@/container/todaypanel/Tabelcontiner";
import Filterkarbar from "@/container/todaypanel/Filterkarbar";
function Page() {
  const [openModal, setOpenModal] = useState(false);
  const clickResirve = () => setOpenModal(true);
  const closeClick =()=>setOpenModal(false)
  return (
    <>
      <Navbar />
      <div className=" w-[83%] h-[97.2%] flex gap-9 mt-5  m-auto">
        <div>
          <Crad />
        </div>
        <div className=" w-full ">
          <div className=" flex  items-center justify-between">
            <div className="  right-28  ">
              <input
                type="text"
                className=" relative left-5 border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
                placeholder="جستجو"
              />
              <div className=" relative bottom-9 left-1">
                <Image src={search} alt="search icon" width={24} height={24} />
              </div>
            </div>
            <div className=" relative left-8 bottom-5 ">
              <button
                onClick={clickResirve}
                className="bg-[#269200] w-[124px] text-white h-[48px] rounded-[8px]"
              >
                افزودن رزرو
              </button>
            </div>
          </div>
          <div>
            <Filtercontiner />
          </div>
          <div>
            <Filterkarbar />
          </div>
          <div>
            <Tabelcontiner />
          </div>
        </div>
        {openModal && (
          <div className="modal modal-open p-3">
            <div className=" flex flex-col w-[734px] h-[410px] text-[16px] p-3 rounded-[8px] bg-white">
              <div>
                <Image
                  src={close}
                  alt="close icon"
                  width={24}
                  height={24}
                  onClick={closeClick}
                  className="
                 float-end"
                />
              </div>
              <h1 className=" text-center  font-bold mt-6">اطلاعات کاربر</h1>
              <div className="flex flex-col gap-3 w-[87%] m-auto">
                <p>نام و نام خانوادگی</p>
                <p>جنسیت:</p>
                <p>تاریخ تولد:</p>
                <p>کدملی:</p>
                <p>ایمیل:</p>
                <p>آدرس:</p>
                <p>سابقه ی بیماری:</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;

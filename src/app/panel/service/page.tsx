"use client";
import Crad from "@/components/dashbord/Crad";
import Navbar from "@/components/dashbord/Navbar";
import Image from "next/image";
import search from "@/svg/Search 2.svg";
import React, { useState } from "react";
import Filtercontiner from "@/container/todaypanel/Filtercontiner";
import Filterservice from "@/container/servicecontiner/Filterservice";
import Tabelservice from "@/container/servicecontiner/Tabelservice";
import close from "@/svg/Closeb.svg";
function page() {
  const [openModal, setOpenModal] = useState(false);
  const clickModal = () => setOpenModal(true);
  const closeModal=()=>setOpenModal(false)
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto  ">
        <div>
          <Crad />
        </div>
        <div className=" w-full ">
          <div className=" flex justify-between ">
            <div>
              <input
                type="text"
                className=" relative  border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
                placeholder="جستجو"
              />
              <div className=" relative bottom-9 right-3">
                <Image src={search} alt="search icon" width={24} height={24} />
              </div>
            </div>
            <div>
              <button
                onClick={clickModal}
                className=" ml-6 text-white w-[177px] h-[40px] bg-[#269200] rounded-[8px]"
              >
                افزودن
              </button>
            </div>
          </div>
          <div className=" mb-7 relative bottom-8 right-3">
            <Filtercontiner />
          </div>
          <div>
            <Filterservice />
          </div>
          <div className="rounded-t-lg">
            <Tabelservice />
          </div>
        </div>
        {openModal && (
          <div className="modal modal-open">
            <div className="bg-white w-[400px] p-3 h-[253px] rounded-[8px]">
              <button onClick={closeModal} className=" w-full">
                <Image
                  src={close}
                  alt="close icon"
                  width={24}
                  height={24}
                  className="float-end"
                />
              </button>
              <h1 className="text-center text-[16px] font-bold mt-3">
                برسی شناسه کاربری
              </h1>
              <div className=" flex flex-col gap-2 w-[352px] m-auto mt-3 items-start">
                <h2>شناسه کاربری را وارد نمایید</h2>
                <input
                  type="text"
                  className=" rounded-[8px]  w-[352px] drop-shadow-md border-2"
                />
                <button className="btn mt-2 w-[135px] h-[48px] text-white m-auto bg-[#269200]">
                  برسی
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default page;

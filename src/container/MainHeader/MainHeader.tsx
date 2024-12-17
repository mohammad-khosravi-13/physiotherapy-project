"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/svg/Logo 1.svg";
import Login1 from "@/svg/Login 1.svg";
import Buy from "@/svg/Buy.svg";
import vectorx from "@/svg/Vector x.svg";

export default function MainHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openCodeModal = () => {
    setModalOpen(false);
    setCodeModal(true);
  };

  return (
    <>
      <nav className="h-[60px] top-0  backdrop-blur-sm  flex justify-between items-center fixed w-full bg-gradient-to-l  to-slate-100 z-50">
        <div className="flex items-center gap-10">
          <Image
            src={Logo1}
            alt="logo"
            width={60}
            height={79}
            className="mr-[70px] p-2 "
          />
          <section className="flex justify-start gap-16 ">
            <Link className="text-[#4A4A4A]" href={"/"}>
              <span></span>
              خانه
            </Link>
            <Link className="text-[#4A4A4A]" href={"service-home"}>
              <span>خدمات</span>
            </Link>
            <Link className="text-[#4A4A4A]" href={"/about"}>
              <span>درباره ما</span>
            </Link>
            <Link className="text-[#4A4A4A]" href={"/contact"}>
              <span>تماس با ما</span>
            </Link>
            <Link className="text-[#4A4A4A]" href={"/blog"}>
              <span>بلاگ</span>
            </Link>
            <Link className="text-[#4A4A4A]" href={"/search"}>
              <span>جستجو</span>
            </Link>
          </section>
        </div>

        <div className="flex items-center m-44 gap-3">
          <button
            onClick={openModal}
            className="flex h-12 items-center gap-2  "
          >
            <Image
              src={Login1}
              alt="login"
              width={24}
              height={24}
              className="mt-1"
            />
            ورود
          </button>

          <div className="h-6 border-l border-[#0974A2] mt-1"></div>
          <button className=" mt-1">
            <Image src={Buy} alt="" width={24} height={24} className="" />
          </button>
        </div>
      </nav>
      {modalOpen && (
        <div className="modal modal-open p-3">
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-5">
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <Image
                  src={vectorx}
                  alt=""
                  width={14}
                  height={14}
                  className=""
                />
              </button>
            </div>
            <h2 className="text-[18px] text-center font-bold ">ورود</h2>
            <input
              type="text"
              placeholder="شماره موبایل"
              className="shadow-custom input-bordered mt-10 w-full h-12 rounded-[8px] pr-7 mb-4"
            />
            <div className="flex flex-col sm:flex-row gap-1 mt-4">
              <button
                className="bg-[#269200] w-[488px] h-[48px] rounded-[8px] text-white"
                onClick={openCodeModal}
              >
                دریافت کد
              </button>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}

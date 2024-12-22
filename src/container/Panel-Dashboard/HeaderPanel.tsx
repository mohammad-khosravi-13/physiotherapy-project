"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/svg/Logo 1.svg";
import vectorpanel from "@/svg/Vectorpanel.svg";
import Buy from "@/svg/Buy.svg";
import { useState } from "react";
import vextorx from "@/svg/Vector x.svg";

export default function HeaderPanel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const [codeModalRules, setCodeModalRules] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closeModalCode = () => setCodeModal(false);
  const openRules = () => setCodeModalRules(true);
  const closeModalRules = () => setCodeModalRules(false);
  const acceptRulesAndGoBack = () => {
    setCodeModalRules(false);
    setModalOpen(true);
  };
  const editPhoneNumber = () => {
    setCodeModal(false);
    setCodeModalRules(false);
    setModalOpen(true);
  };

  const openCodeModal = () => {
    setModalOpen(false);
    setCodeModal(true);
    setCodeModalRules(false);
  };
  return (
    <>
      <nav className="h-[60px] top-0  backdrop-blur-sm  flex justify-between items-center fixed w-full bg-gradient-to-l  to-slate-100 z-50">
        <div className="flex items-center gap-10">
          <Image
            src={logo}
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
            <Link className="text-[#4A4A4A]" href={"/service-home"}>
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

        <div className="flex">
          <div className=" flex items-center m-44 gap-3 ">
            <button className="flex justify-center gap-2" onClick={openModal}>
              <Image
                src={vectorpanel}
                alt="login"
                width={18}
                height={20}
                className=""
              />
              ورود
            </button>

            <div className="h-6 border-l border-[#0974A2]"></div>
            <button>
              <Image src={Buy} alt="" width={24} height={24} className="" />
            </button>
          </div>
        </div>
      </nav>
      {modalOpen && (
        <div className="modal modal-open p-3">
          <div className="bg-white rounded-[8px] p-5 w-[560px] h-[267px]">
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <Image
                  src={vextorx}
                  alt="login"
                  width={14}
                  height={14}
                  className=" "
                />
              </button>
            </div>
            <h2 className="text-[18px] text-center font-bold mb-4">ورود</h2>
            <div className=" flex justify-center">
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="شماره موبایل"
                  className="shadow-md input-bordered mt-5 w-[488px] h-[48px] rounded-[8px] pr-7  "
                />
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="p-2">
                    پذیرش{" "}
                    <button onClick={openRules} className="text-[#0974A2]">
                      قوانین
                    </button>{" "}
                    سایت
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              <button
                className="bg-[#269200]   rounded-[8px] text-white w-[488px] h-[48px] p-2"
                onClick={openCodeModal}
              >
                دریافت کد
              </button>
            </div>
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="modal modal-open p-3">
          <div className="bg-white rounded-[8px] p-5 w-[560px] h-[267px]">
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <Image
                  src={vextorx}
                  alt="login"
                  width={14}
                  height={14}
                  className=" "
                />
              </button>
            </div>
            <h2 className="text-[18px] text-center font-bold mb-4">ورود</h2>
            <div className=" flex justify-center">
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="شماره موبایل"
                  className="shadow-md input-bordered mt-5 w-[488px] h-[48px] rounded-[8px] pr-7  "
                />
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="p-2">
                    پذیرش{" "}
                    <button onClick={openRules} className="text-[#0974A2]">
                      قوانین
                    </button>{" "}
                    سایت
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              <button
                className="bg-[#269200]   rounded-[8px] text-white w-[488px] h-[48px] p-2"
                onClick={openCodeModal}
              >
                دریافت کد
              </button>
            </div>
          </div>
        </div>
      )}
      {codeModal && (
        <div className="modal modal-open p-3">
          <div className="bg-white rounded-[8px] p-5 w-[560px] h-[267px]">
            <div className="flex justify-end">
              <button onClick={closeModalCode}>
                <Image src={vextorx} alt="login" width={14} height={14} />
              </button>
            </div>
            <h2 className="text-[18px] text-center font-bold mb-4">
              کد یکبار مصرف
            </h2>

            <div className="flex justify-center gap-6 mt-6">
              <input
                type="text"
                className="w-12 text-center border-b-2 border-gray-400 focus:outline-none focus:border-[#269200] text-[20px] font-bold "
              />
              <input
                type="text"
                className="w-12 text-center border-b-2 border-gray-400 focus:outline-none focus:border-[#269200] text-[20px] font-bold"
              />
              <input
                type="text"
                className="w-12 text-center border-b-2 border-gray-400 focus:outline-none focus:border-[#269200] text-[20px] font-bold"
              />
              <input
                type="text"
                className="w-12 text-center border-b-2 border-gray-400 focus:outline-none focus:border-[#269200] text-[20px] font-bold"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="bg-[#269200] rounded-[8px] text-white w-[488px] h-[48px] p-2 mt-9"
                onClick={openCodeModal}
              >
                ورود
              </button>
            </div>
            <div className="flex justify-end p-2">
              <button
                onClick={editPhoneNumber}
                className=" text-[12px] text-[#5F5F5F]"
              >
                ویرایش شماره
              </button>
            </div>
          </div>
        </div>
      )}
      {codeModalRules && (
        <div className="modal modal-open p-3">
          <div className="bg-white rounded-[8px] p-5 w-[560px] h-[292px]">
            <div className="flex justify-end">
              <button onClick={closeModalRules}>
                <Image src={vextorx} alt="login" width={14} height={14} />
              </button>
            </div>
            <h2 className="text-[18px] text-center font-bold mb-4">
              قوانین کلینیک فیزیوتراپی مکین
            </h2>
            <div>
              ثبت نام، ورود کاربران و استفاده از پلتفرم، رزرو یا خرید محصول به
              معنای آگاه بودن و پذیرفتن  کلیه شرایط و قوانین آن است. لازم به ذکر
              است شرایط و قوانین مندرج در وبسایت، جایگزین کلیه قبلی محسوب می .
              توجه داشته باشید کلیه اصول و کلینیک سلامت منطبق با قوانین جمهوری
              اسلامی ایران و مقررات سازمان پزشکی کشور است، و کاربران می‌بایست
              هنگام استفاده از خدمات سایت کلیه  قوانین و مقررات جمهوری اسلامی
              ایران را رعایت نمایند.
            </div>

            <div className=" mt-3 flex justify-center">
              <button
                className="bg-[#269200] rounded-[8px] text-white w-[488px] h-[48px] p-2 "
                onClick={acceptRulesAndGoBack}
              >
                پذیرش
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

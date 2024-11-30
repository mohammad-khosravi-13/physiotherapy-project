import React from "react";
import Image from "next/image";
import logo from "@/svg/Logo 1.svg";
import minus1 from "@/svg/Folder Minus 1.svg";
import profile from "@/images/mamad.jpg";

function Navbarprofile() {
  return (
    <>
      <div className="max-w-[1240px] m-auto">
        <div className="container w-full px-10 m-auto flex justify-between items-center">
          <div>
            <Image src={logo} alt="logo" width={60} height={80} />
          </div>
          <div className="w-[60px] h-[80px] flex justify-center items-center">
            <Image src={minus1} alt="Profile" width={18} height={18} />
          </div>
        </div>

        <div className="max-w-[1248px] min-w-[200px] m-auto p-10">
          <div className="w-[80%]">
            <h1 className="font-bold text-[18px]">اطلاعات شخصی</h1>
            <div className="mt-10 flex justify-center">
              <Image
                src={profile}
                alt="profile img"
                width={195}
                height={195}
                className="rounded-[8px]"
              />
            </div>

            <div className="flex flex-col lg:flex-row sm:flex-col gap-5 mt-10">
              <div className="w-full lg:w-[48%] flex flex-col gap-6">
                {["نام", "شماره موبایل", "نام کاربری", "رمز عبور"].map(
                  (label) => (
                    <div className="relative" key={label}>
                      <input
                        type="text"
                        className="w-full h-[48px] rounded-[8px] shadow-custom"
                      />
                      <span className="absolute -top-3 right-4">{label}</span>
                    </div>
                  )
                )}
              </div>

              <div className="w-full lg:w-[48%] flex flex-col gap-6">
                {["نام خانوادگی", "ایمیل", "کدملی", "آدرس"].map((label) => (
                  <div className="relative" key={label}>
                    <input
                      type="text"
                      className="w-full h-[48px] rounded-[8px] shadow-custom"
                    />
                    <span className="absolute -top-3 right-4">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center ml-3 mt-8">
              <div className="w-[98%] ">
                <button className="btn w-full h-[48px] bg-[#0974A2] rounded-[8px] text-white">
                  ویرایش
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbarprofile;

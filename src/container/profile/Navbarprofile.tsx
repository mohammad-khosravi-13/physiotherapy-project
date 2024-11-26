import React from "react";
import Image from "next/image";
import logo from "@/svg/Logo 1.svg";
import minus1 from "@/svg/Folder Minus 1.svg";
import profile from "@/images/mamad.jpg";
function Navbarprofile() {
  return (
    <div className=" ">
      <div>
        <div className=" w-[1248px] m-auto flex justify-between items-center">
          <div>
            <Image src={logo} alt="logo" width={60} height={80} />
          </div>
          <div>
            <Image src={minus1} alt="Profile" width={18} height={18} />
          </div>
        </div>
        <div className=" w-[1248px] h-[972px]  h- m-auto p-10 ">
          <div className="  w-[80%]">
            <div>
              <h1 className=" font-bold text-[18px]">اطلاعات شخصی</h1>
            </div>
            <div className=" mt-10 flex justify-center">
              <Image
                src={profile}
                alt="profile img"
                width={195}
                height={195}
                className="rounded-[8px]"
              />
            </div>
            <div className=" flex justify-center  gap-5 mt-10 ">
              <div className=" flex flex-col gap-6">
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4">نام</span>
                </div>
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4">شماره موبایل</span>
                </div>
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" ring-opacity-40 absolute -top-3 right-4 ">
                    نام کاربری
                  </span>
                </div>
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4 ">رمز عبور</span>
                </div>
              </div>
              <div className=" flex flex-col gap-6">
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4">نام خانوادگی</span>
                </div>
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4">ایمیل </span>
                </div>
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4">کدملی</span>
                </div>
                <div className=" relative">
                  <input
                    type="text"
                    className="w-[403px] h-[48px] rounded-[8px] shadow-custom relative "
                  />
                  <span className=" absolute -top-3 right-4">آدرس</span>
                </div>
              </div>
            </div>
            <span className=" flex justify-center mt-8">
              <div className="w-[88%]">
                <button className=" w-[100%] h-[48px] bg-[#0974A2] rounded-[8px] text-white">
                  ویرایش
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarprofile;

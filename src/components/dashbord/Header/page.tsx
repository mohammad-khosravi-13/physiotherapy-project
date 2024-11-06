import React from "react";
import Image from "next/image";
import Logo1 from "@/app/images/Logo 1.svg";
import Rectangle from "@/app/images/Rectangle 2.png";
import vectorcalender from "@/app/images/Vector calender.svg";
import Link from "next/link";
import Login1 from "@/app/images/Login 1.svg";
import Buy from "@/app/images/Buy.svg";
import calender from "@/app/images/calendar-2.svg";
import timer from "@/app/images/timer.svg";
import vectorsearch from "@/app/images/Vectorsearch.svg";
import vectortaghvim from "@/app/images/Vector taghvim.svg";
import Swiiper from "@/app/container/Swiiper";
import vectorfilm from "@/app/images/Vector film.svg";
import axnobat from "@/app/images/axnobat.svg";
import Product from "@/components/Product/page";
import Bime from "@/components/Bimeh/page";
import Soalat from "@/components/Soalat/page";
import Didgah from "@/components/Didgah/page";
import Footer from "@/components/Footer/page";

function Header() {
  return (
    <>
      <div className="px-10">
        <div className="h-[60px] flex justify-start items-center absolute  pr-10 w-[1440px]  bg-gradient-to-t from-[#39393988] to-[#D6D6D655] ">
          <Image
            className="mr-14"
            src={Logo1}
            alt="logo"
            width={32}
            height={66}
          />
          <div className="flex justify-center gap-12 pr-24">
            <Link className="text-[#4A4A4A]" href={"/"}>
              خانه
            </Link>
            <Link className="text-[#4A4A4A]" href={"services"}>
              خدمات
            </Link>
            <Link className="text-[#4A4A4A]" href={"/about"}>
              درباره ما
            </Link>
            <Link className="text-[#4A4A4A]" href={"/contact"}>
              تماس با ما
            </Link>
            <Link className="text-[#4A4A4A]" href={"/blog"}>
              بلاگ
            </Link>
            <Link className="text-[#4A4A4A]" href={"/search"}>
              جستجو
            </Link>
          </div>
          <div className=" pr-[400px]">
            <div className="flex items-center gap-3 mr-32 ">
              <Image src={Login1} alt="" width={24} height={24} />
              <Link className="text-white" href={"/Login"}>
                ورود{" "}
              </Link>
              <div className="h-6 border-l border-[#0974A2]"></div>

              <Image src={Buy} alt="" width={24} height={24} className="mr-5" />
            </div>
          </div>
        </div>

        <Image src={Rectangle} alt="" width={1440} height={559} className="" />

        <div className="flex justify-start mr-28 -mt-48">
          <div className="absolute  -mt-[170px] rtl: flex justify-center flex-col -">
            <h3 className="font-bold text-[28px] text-gray-700 ">
              کلینیک فیزیوتراپی <span className="text-blue-500">سلامت</span>
            </h3>
            <h3 className="text-[22px]">درمان تخصصی را با تجربه کنید.</h3>
            <button className="bg-orange-500 mt-5 text-white text-[22px] rounded-[8px] w-[193px] h-[48px]">
              رزرو آنلاین نوبت
            </button>
          </div>
        </div>

        <div className="flex justify-start mt-16  mr-24">
          <div className="absolute mt-20 flex justify-Start gap-7 pr-10 w-[676px] h-[96px] bg-white rounded-md  items-center shadow-lg  ">
            <Image src={calender} alt="" width={24} height={24} className="" />
            <p>انتخاب روز </p>
            <div className="flex justify-center pr-20 gap-7">
              <Image src={timer} alt="" width={24} height={24} className="" />
              <p>انتخاب ساعت</p>
            </div>
            <div className="pr-48  ">
              <Image
                src={vectorsearch}
                alt=""
                width={24}
                height={24}
                className="bg-[#0974A2] w-[46px] h-[46px] p-2 rounded-[4px] "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-60  ">
          <div className="bg-white flex justify-start items-center ">
            <Image
              className="mr-24"
              src={vectorcalender}
              alt="Vector"
              width={24}
              height={24}
            />
            <h3 className="pr-4 text-[18px]">روزهای کاری</h3>
          </div>
          <div className=" flex justify-center pr-14 gap-10 mr-12 items-center w-[1300px] h-[157px] ">
            <div className=" shadow-lg    w-[176px] h-[101px] rounded-[8px] pr-5">
              <div className="mt-4   text-[#4A4A4A] text-[16px]  ">
                <p className=" pr-5 ">پنجشنبه1402/11/21 </p>
                <Image
                  className=" -mt-5 mr-1 "
                  src={vectortaghvim}
                  alt="Vector"
                  width={12}
                  height={13}
                />
              </div>
              <div className="text-center">
                <h5 className="mt-5">8 الی 20</h5>
              </div>
            </div>
            <div className=" shadow-lg pr-5   w-[176px] h-[101px] rounded-[8px]">
              <div className="mt-5    text-[#4A4A4A] text-[16px]  ">
                <p className=" pr-5">پنجشنبه1402/11/21 </p>
                <Image
                  className="text-left -mt-5 mr-1 "
                  src={vectortaghvim}
                  alt="Vector"
                  width={12}
                  height={13}
                />
              </div>
              <div className="text-center">
                <h5 className="mt-5">8 الی 20</h5>
              </div>
            </div>
            <div className=" shadow-lg   pr-5 w-[176px] h-[101px] rounded-[8px]">
              <div className="mt-5   text-[#4A4A4A] text-[16px]  ">
                <p className=" pr-5">پنجشنبه1402/11/21 </p>
                <Image
                  className="text-left -mt-5 mr-1  "
                  src={vectortaghvim}
                  alt="Vector"
                  width={12}
                  height={13}
                />
              </div>
              <div className="text-center">
                <h5 className="mt-5">8 الی 20</h5>
              </div>
            </div>
            <div className=" shadow-lg  pr-5  w-[176px] h-[101px] rounded-[8px]">
              <div className="mt-5   text-[#4A4A4A] text-[16px]  ">
                <p className=" pr-5">پنجشنبه1402/11/21 </p>
                <Image
                  className="text-left -mt-5 mr-1  "
                  src={vectortaghvim}
                  alt="Vector"
                  width={12}
                  height={13}
                />
              </div>
              <div className="text-center">
                <h5 className="mt-5">8 الی 20</h5>
              </div>
            </div>
            <div className=" shadow-lg  pr-5  w-[176px] h-[101px] rounded-[8px]">
              <div className="mt-5   text-[#4A4A4A] text-[16px]  ">
                <p className=" pr-5">پنجشنبه1402/11/21 </p>
                <Image
                  className="text-left -mt-5 mr-1 "
                  src={vectortaghvim}
                  alt="Vector"
                  width={12}
                  height={13}
                />
              </div>
              <div className="text-center">
                <h5 className="mt-5">8 الی 20</h5>
              </div>
            </div>
            <div className=" shadow-lg  pr-5  w-[176px] h-[101px] rounded-[8px]">
              <div className="mt-5  text-[#4A4A4A] text-[16px]  ">
                <p className=" pr-5">پنجشنبه1402/11/21 </p>
                <Image
                  className="text-left -mt-5 mr-1 "
                  src={vectortaghvim}
                  alt="Vector"
                  width={12}
                  height={13}
                />
              </div>
              <div className="text-center">
                <h5 className="mt-5">8 الی 20</h5>
              </div>
            </div>
          </div>
          <div className="mr-24 flex items-center gap-5 mt-10">
            <Image
              className=""
              src={vectorfilm}
              alt="Vector"
              width={23}
              height={17}
            />
            <h3>فیلم آموزشی</h3>
          </div>
          <Swiiper />
          <div className="flex justify-center mt-5 relative ">
            <Image
              className=""
              src={axnobat}
              alt="Vector"
              width={1248}
              height={360}
            />
            <div className="top-[72px]    absolute  left-[350px]  ">
              <h3 className="text-[28px] text-white">
                زمان و مکان دیگر محدودیت نیستند،
                <br />
                نوبت خود را آنلاین رزرو کنید.
              </h3>

              <button className="bg-[#FF7A00] w-[187px] h-[48px] text-white text-[20px] mt-5 ml-32 rounded-[8px]">
                رزرو نوبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import Image from "next/image";
import Logo1 from "@/app/SVG/Logo 1.svg";
import Rectangle from "@/app/SVG/Rectangle 2.png";
import vectorcalender from "@/app/SVG/Vector calender.svg";
import Link from "next/link";
import Login1 from "@/app/SVG/Login 1.svg";
import Buy from "@/app/SVG/Buy.svg";
import calender from "@/app/SVG/calendar-2.svg";
import timer from "@/app/SVG/timer.svg";
import vectorsearch from "@/app/SVG/Vectorsearch.svg";
import vectortaghvim from "@/app/SVG/Vector taghvim.svg";
import Swiiper from "@/app/container/Swiiper";
import vectorfilm from "@/app/SVG/Vector film.svg";
import axnobat from "@/app/SVG/axnobat.svg";
import vectorbishtar from "@/app/SVG/Vector bishtar.svg";
import Product from "@/components/Product/Product";
import Bime from "@/components/Bimeh/Bimeh";
import Soalat from "@/components/Soalat/Soalat";
import Didgah from "@/components/Didgah/Didgah";
import Footer from "@/components/Footer/Footer";

function page() {
  return (
    <>
      <nav className="h-[60px]  backdrop-blur-sm  flex justify-between items-center absolute w-[1440px] bg-gradient-to-l  to-slate-100 ">
        <Image
          src={Logo1}
          alt="logo"
          width={33}
          height={44}
          className="mr-[91px]  "
        />
        <section className="flex justify-start gap-16 ml-[300px]">
          <Link className="text-[#4A4A4A]" href={"/"}>
            <span></span>
            خانه
          </Link>
          <Link className="text-[#4A4A4A]" href={"services"}>
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
        <Image
          src={Login1}
          alt="login"
          width={24}
          height={24}
          className="mr-44"
        />
        <Link className="text-black" href={"/Login"}>
          <span>ورود</span>
        </Link>
        <div className="h-6 border-l border-[#0974A2]"></div>

        <Image src={Buy} alt="" width={24} height={24} className="ml-[91px]" />
      </nav>

      <Image src={Rectangle} alt="" width={1440} height={559} className="" />

      <div className="flex justify-start mr-28 -mt-[172px] ">
        <div className="absolute  -mt-[170px] rtl: flex justify-center flex-col  ">
          <h3 className="font-bold text-[28px] text-gray-700 ">
            کلینیک فیزیوتراپی <span className="text-blue-500">سلامت</span>
          </h3>
          <h3 className="text-[22px]">درمان تخصصی را با تجربه کنید.</h3>
          <button className="bg-orange-500 mt-5 text-white text-[22px] rounded-[8px] w-[193px] h-[48px]">
            رزرو آنلاین نوبت
          </button>
        </div>
      </div>

      <div className="flex justify-start   mr-24">
        <div className="absolute mt-32 flex justify-Start gap-7 pr-10 w-[676px] h-[96px] bg-white rounded-md  items-center shadow-lg  ">
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

      <div className="flex flex-col mt-72  ">
        <div className="bg-white flex justify-start items-center  ">
          <Image
            className="mr-24"
            src={vectorcalender}
            alt="Vector"
            width={24}
            height={24}
          />
          <h3 className="pr-2 text-[18px]">روزهای کاری</h3>
        </div>
        <div className=" flex justify-center pr-10 gap-10 mr-12 items-center w-[1300px] h-[157px] ">
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
        <div className="pr-20 flex items-center gap-2 mt-10">
          <Image
            className=""
            src={vectorfilm}
            alt="Vector"
            width={23}
            height={17}
          />
          <h3>فیلم آموزشی</h3>
          <div className="flex justify-end gap-2 mr-[1050px]">
            <Link className="btn text-[16px]" href={"/Video"}>
              بیشتر
            </Link>
            <Image
              className=""
              src={vectorbishtar}
              alt="Vector"
              width={5}
              height={11}
            />
          </div>
        </div>
        <Swiiper />
        <div className="flex justify-center mt-5 relative    ">
          <Image className="w-[1248px] h-[360px]" src={axnobat} alt="Vector" />
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
      <Product />
      <Bime />
      <Soalat />
      <Didgah />
      <Footer />
    </>
  );
}

export default page;

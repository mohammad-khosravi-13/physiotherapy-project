import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/app/images/Logo 1.svg";
import Login1 from "@/app/images/Login 1.svg";
import Buy from "@/app/images/Buy.svg";
import photo3 from "@/app/images/axsafhe3.svg";
import Footer from "../Footer/page";
import ReadBlogs from "../ReadBlogs/page";


export default function Page3() {
  return (
    <>
      <div className="h-[60px] flex justify-between items-center  ">
        <div className="mr-[96px]">
          <Image src={Logo1} alt="logo" width={33} height={44} />
        </div>

        <div className="flex justify-start gap-12 ml-[400px] ">
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

        <div className="flex  ml-[96px]  gap-3 ">
          <Image src={Login1} alt="" width={24} height={24} />
          <Link className="text-black" href={"/Login"}>
            ورود
          </Link>
          <div className="h-6 border-l border-[#0974A2]"></div>
          <Image src={Buy} alt="" width={24} height={24} className="mr-5" />
        </div>
      </div>
      <div className="flex justify-center pr-2">
        <Image src={photo3} alt="" className="w-[1248px] h-[256px] relative " />
        <div className="absolute  left-[562px] top-[135px]">
          <h3 className="text-[28px]">نوبت فیزیوتراپی <br />
          <span className="text-[22px]">خود را بدون دردسر رزرو کنید</span>
          </h3>
        
          <button className="w-[193px] h-[44px] bg-[#0974A2] text-[20px] text-white rounded-[8px]">رزرو آنلاین نوبت</button>
        </div>
      </div>
      <ReadBlogs/>
      <Footer/>
    </>
  );
}

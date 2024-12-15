import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/svg/Logo 1.svg";
import Login1 from "@/svg/Login 1.svg";
import Buy from "@/svg/Buy.svg";

export default function MainHeader() {
  return (
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

          <div className="flex m-44 gap-3 ">
            <Image
              src={Login1}
              alt="login"
              width={24}
              height={24}
              className=""
            />
            <Link className="text-black" href={"/Login"}>
              <span>ورود</span>
            </Link>
            <div className="h-6 border-l border-[#0974A2]"></div>

            <Image src={Buy} alt="" width={24} height={24} className="" />
          </div>
        </nav>
  );
}

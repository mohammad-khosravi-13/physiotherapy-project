import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/svg/Logo 1.svg";
import vectorpanel from "@/svg/Vectorpanel.svg";
import Buy from "@/svg/Buy.svg";

export default function HeaderPanel() {
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
            src={vectorpanel}
            alt="login"
            width={15}
            height={20}
            className=""
          />
          <Link className="text-black" href={"/Login"}>
            <span>ورود</span>
          </Link>
          <div className="h-6 border-l border-[#0974A2]"></div>

          <Image src={Buy} alt="" width={24} height={24} className="" />
        </div>
      </nav>
    </>
  );
}

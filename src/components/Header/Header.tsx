import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo1 from "@/app/SVG/Logo 1.svg";
import Login1 from "@/app/SVG/Login 1.svg";
import Buy from "@/app/SVG/Buy.svg";

export default function Header() {
  return (
        <>
        <nav className="h-[60px] flex justify-between items-center  w-[1440px]  ">
        <Image
          src={Logo1}
          alt="logo"
          width={33}
          height={44}
          className="mr-[91px] "
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
        </>
  )
}

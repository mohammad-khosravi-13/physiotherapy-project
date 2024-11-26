import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/svg/Logo 1.svg"
import vectorpanel from "@/svg/Vectorpanel.svg";
import Buy from "@/svg/Buy.svg";


export default function HeaderPanel() {
  return (
    <>
    
    
    <nav className="h-[60px] flex justify-between items-center  w-[1440px]  ">
        <Image
          src={logo}
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
          src={vectorpanel}
          alt="login"
          width={15}
          height={20}
          className="mr-44"
        />

        <div className="h-6 border-l border-[#0974A2]"></div>

        <Image src={Buy} alt="" width={24} height={24} className="ml-[91px]" />
      </nav>
    </>

  )
}

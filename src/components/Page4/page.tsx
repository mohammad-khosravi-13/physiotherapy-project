"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo1 from "@/app/images/Logo 1.svg";
import Login1 from "@/app/images/Login 1.svg";
import Buy from "@/app/images/Buy.svg";
import { useRouter } from 'next/navigation';
import readblog1 from "@/app/images/readblog1.svg"
import vectorcalender from "@/app/images/Vectorcalender.svg"


export default function Page4() {
    const router = useRouter();
    const hadelClick =()=>{
        router.push("./Blog")
    }
  return (

    <>
    
    <div className="h-[60px] flex justify-start items-center pr-16">
        <Image
          className="mr-14"
          src={Logo1}
          alt="logo"
          width={33}
          height={44}
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
        <div className="pr-[400px]">
          <div className="flex items-center gap-3 mr-32 ">
            <Image src={Login1} alt="" width={24} height={24} />
            <Link className="text-black" href={"/Login"}>
              ورود
            </Link>
            <div className="h-6 border-l border-[#0974A2]"></div>
            <Image src={Buy} alt="" width={24} height={24} className="mr-5" />
          </div>
        </div>
      </div>
      <div className='flex justify-end pl-[96px] mt-[8px]'>

      <button className=' w-[193px] h-[48px] rounded-[8px] text-[#0974A2] text-[20px] border-[2px] border-[#0974A2]' onClick={hadelClick}>برگشت به بلاگ</button>
      </div>

      <div>
<div>
  <div className='flex justify-start gap-10'>
<Image src={readblog1} alt=""  className="w-[240px] h-[240px]" />
<h3 className='text-[18px] text-[#070707]'>فیزیوتراپی در تعویض مفصل زانو</h3>
<Image src={vectorcalender} alt=""  className="w-[12px] h-[13px]" />
<p>25 بهمن 1402</p>


  </div>

</div>


<div>

</div>

      </div>

    </>

  )
}

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/app/images/Logo 1.svg";
import Login1 from "@/app/images/Login 1.svg";
import Buy from "@/app/images/Buy.svg";
import famefilm from "@/app/images/Frame film.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import film1 from "@/app/images/film 1.svg";
import film2 from "@/app/images/film 2.svg";
import film3 from "@/app/images/film3.svg";
import film4 from "@/app/images/film4.svg";
import film5 from "@/app/images/film5.svg";
import film6 from "@/app/images/film6.svg";
import film7 from "@/app/images/film7.svg";
import Footer from "../Footer/page";



function PageVideo() {
  
  return (
    <>
      <div className="h-[60px] flex justify-start items-center pr-14">
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
        <div className="pr-[400px]">
          <div className="flex items-center gap-3 mr-32">
            <Image src={Login1} alt="" width={24} height={24} />
            <Link className="text-black" href={"/Login"}>
              ورود
            </Link>
            <div className="h-6 border-l border-[#0974A2]"></div>
            <Image src={Buy} alt="" width={24} height={24} className="mr-5" />
          </div>
        </div>
      
      </div>
      

      <div className="flex justify-center">
        <Image src={famefilm} alt="" className="w-[1253px] h-[80px]" />
      </div>

      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop
        modules={[Pagination, Navigation]}
        className="w-[1300px] h-[600px] relative"
        
        >
     
        <SwiperSlide>
          <div className="flex justify-evenly gap-5 mt-10 ">
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film1}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film2}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film3}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film4}
              alt="Vector"
            />
          </div>
          <div className="flex justify-evenly gap-5 mt-10 ">
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film5}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film6}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film7}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film2}
              alt="Vector"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-evenly gap-5  mt-10">
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film5}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film6}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film7}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film2}
              alt="Vector"
            />
          </div>
          <div className="flex justify-evenly gap-5 mt-10">
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film5}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film6}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film7}
              alt="Vector"
            />
            <Image
              className="w-[320px] h-[257px] rounded-[8px]"
              src={film2}
              alt="Vector"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #0974a2;
          top: 55%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-button-next {
          right: -30px;
        }
        .swiper-button-prev {
          left: -30px;
        }
        .swiper-pagination-bullet {
          background: #0974a2;
    
          width: 12px;
          height: 12px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #00aaff;
        }
      `}</style>

      <Footer/>
    </>
  );
}

export default PageVideo;

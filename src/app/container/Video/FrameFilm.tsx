import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import film1 from "@/app/SVG/film 1.svg";
import film2 from "@/app/SVG/film 2.svg";
import film3 from "@/app/SVG/film3.svg";
import film4 from "@/app/SVG/film4.svg";
import film5 from "@/app/SVG/film5.svg";
import film6 from "@/app/SVG/film6.svg";
import film7 from "@/app/SVG/film7.svg";


export default function FrameFilm() {
  return (
    <>
    
    
    <Swiper
        navigation
        pagination={{ clickable: true }}
        loop={false}
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
 

    </>
  )
}

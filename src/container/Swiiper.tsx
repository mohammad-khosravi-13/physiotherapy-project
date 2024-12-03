"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import film1 from "@/svg/film 1.svg";
import film2 from "@/svg/film 2.svg";
import film3 from "@/svg/film3.svg";
import film4 from "@/svg/film4.svg";
import film5 from "@/svg/film5.svg";
import film6 from "@/svg/film6.svg";
import film7 from "@/svg/film7.svg";

const Swiiper = () => {
  return (
    <Swiper
      navigation
     
      loop
      modules={[Pagination, Navigation, Autoplay]}
      className=" w-[1300px] h-[300px] relative   "
    >
      <div className="flex justify-evenly  ">
        <SwiperSlide>
          <div className=" flex justify-evenly gap-7  p-2 mt-2 ">
            <div className="  w-[320px] h-[257px] ">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film1}
                alt="Vector"
              />
            </div>
            <div className="  w-[320px] h-[256px]">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film2}
                alt="Vector"
              />
            </div>
            <div className="  w-[320px] h-[256px]">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film3}
                alt="Vector"
              />
            </div>
            <div className="  w-[320px] h-[256px] pl-5">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film4}
                alt="Vector"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-evenly  gap-7   mt-2  ">
            <div className="  w-[320px] h-[256px]">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film5}
                alt="Vector"
              />
            </div>
            <div className="  w-[320px] h-[256px]">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film6}
                alt="Vector"
              />
            </div>
            <div className="  w-[320px] h-[256px]">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film7}
                alt="Vector"
              />
            </div>
            <div className="  w-[320px] h-[256px]">
              <Image
                className=" w-[320px] h-[257px] rounded-[8px]"
                src={film2}
                alt="Vector"
              />
            </div>
          </div>
        </SwiperSlide>
      </div>

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
          margin-top: 10px;
          width: 12px;
          height: 12px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #00aaff;
        }
      `}</style>
    </Swiper>
  );
};

export default Swiiper;

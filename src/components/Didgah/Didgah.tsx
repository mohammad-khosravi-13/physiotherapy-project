"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import didgah from "@/svg/diadgah.svg";
import score5 from "@/svg/Score 5.svg";
import man1box1 from "@/svg/man1box1.svg";
import man2box2 from "@/svg/man2box2.svg";
import woman3box3 from "@/svg/woman3box3.svg";

function Didgah() {
  const feedbacks = [
    {
      id: 1,
      date: "1402/10/20",
      name: "علی اکبری",
      message:
        "عالی بود همه چیز! \n آسیب کمرم درمان شد و محدودیت حرکتی ندارم. \n با تشکر از کلینیک سلامت",
      avatar: man1box1,
      bgColor: "bg-orange-400",
    },
    {
      id: 2,
      date: "1402/10/18",
      name: "حسین فضلی",
      message: "هم محیط آرام بود و هم پذیرش به موقع انجام شد. \n با تشکر",
      avatar: man2box2,
      bgColor: "bg-green-400",
    },
    {
      id: 4,
      date: "1402/10/20",
      name: "زهرا کیانی",
      message: "برخورد پرسنل خوب بود.",
      avatar: woman3box3,
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <>
      <div className="relative flex justify-start mr-24 gap-10 mt-20">
        <Image src={didgah} alt="Vector" width={19} height={21} />
        <h3 className="text-[18px]">دیدگاه شما</h3>
      </div>

      <div className="flex justify-between items-center ">
        <Swiper
          navigation
          loop={true}
          slidesPerView={3}
          spaceBetween={5}
          modules={[Pagination, Navigation, Autoplay]}
    className=""
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="bg-[#FCFCFC] shadow-xl rounded-[8px] w-[320px] h-[176px]  mr-24 ">
                <div className="flex items-center justify-between p-5">
                  <p className="text-[12px] text-[#4A4A4A]">{feedback.date}</p>
                  <Image src={score5} alt="Vector" width={66} height={10} />
                </div>
                <div className="flex justify-start gap-3 pr-5 items-center">
                  <Image
                    className={`${feedback.bgColor} rounded-[4px]`}
                    src={feedback.avatar}
                    alt="Avatar"
                    width={36}
                    height={36}
                  />
                  <h4 className="text-[14px] text-[#000000]">
                    {feedback.name}
                  </h4>
                </div>
                <p className="pr-5 mt-3 text-[14px] text-[#4A4A4A] whitespace-pre-line">
                  {feedback.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="h-[152px] border-l-2  border-[#FF7A00]"></div>

    
          <div className="relative m-5 w-[320px] h-[176px]     ">
            
            <p className="text-[16px] text-[#000000]">دیدگاه خود را ثبت کنید</p>
            <input
              className="w-full h-4/6 p-2 border rounded mt-5  "
              type="text"
              placeholder="اینجا بنویسید..."
            />
          </div>
          <div className=" m-5   left-2 mt-32 absolute p-8">
            <button className=" float-end  bg-[#269200] text-white rounded w-[108px] h-[40px]">
              ثبت
            </button>
          </div>
        </div>
      
    </>
  );
}

export default Didgah;

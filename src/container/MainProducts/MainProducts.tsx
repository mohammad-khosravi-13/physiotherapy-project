"use client";
import React from "react";
import Image from "next/image";
import productframe from "@/svg/Productsframe.svg";
import mahsol1 from "@/svg/mahsol 1.svg";
import mahsol2 from "@/svg/mahsol2.svg";
import mahsol3 from "@/svg/mahsol3.svg";
import mahsol4 from "@/svg/mahsol4.svg";
import mahsol5 from "@/svg/mahsol5.svg";
import star from "@/svg/Star 3.svg";
import mahsol6 from "@/svg/mahsol6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import mahsol7 from "@/svg/mahsol7.svg";
import mahsol8 from "@/svg/mahsol8.svg";
import mahsol9 from "@/svg/mahsol9.svg";
import mahsol10 from "@/svg/mahsol10.svg";

export default function MainProducts() {
  const products = [
    {
      id: 1,
      name: "خمیر پاتی",
      price: "232,000",
      rating: "4",
      image: mahsol1,
    },
    {
      id: 2,
      name: "فوم رولر",
      price: "330,000",
      rating: "3",
      image: mahsol2,
    },
    {
      id: 3,
      name: "دستکش همی",
      price: "80,000",
      rating: "4",
      image: mahsol4,
    },
    {
      id: 4,
      name: "کنزیوتیپ",
      price: "98,000",
      rating: "5",
      image: mahsol7,
    },
    {
      id: 5,
      name: "ویت کاف",
      price: "435,000",
      rating: "5",
      image: mahsol3,
    },
    {
      id: 6,
      name: "فنر تقویت مچ",
      price: "118,000",
      rating: "3",
      image: mahsol5,
    },
    {
      id: 7,
      name: "اسلینگ پاشنه",
      price: "68,000",
      rating: "3",
      image: mahsol6,
    },
    {
      id: 8,
      name: "توپ ژله ایی",
      price: "24,000",
      rating: "5",
      image: mahsol9,
    },
    {
      id: 9,
      name: "ماساژور 3D",
      price: "105,000",
      rating: "4",
      image: mahsol8,
    },
    {
      id: 10,
      name: "توپ تعادل",
      price: "215,000",
      rating: "4",
      image: mahsol10,
    },
  ];

  return (
    <>
      <div className="flex justify-center ">
        <Image src={productframe} alt="" className="   w-[1248px] h-[80px] mt-20 " />
      </div>

      <Swiper
        navigation
       
        loop={false}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        className="w-full"
      >
        {Array.from({ length: Math.ceil(products.length / 8) }).map(
          (_, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-4 grid-rows-2 gap-6 p-8 mr-16 mb-10">
                {products.slice(index * 8, index * 8 + 8).map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-4 shadow-md hover:shadow-2xl transition-shadow duration-200 w-[320px] h-[506px]"
                  >
                    <div className="flex justify-center mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={312}
                        height={312}
                      />
                    </div>
                    <div>
                      <h4 className="text-[18px] mb-2">{product.name}</h4>
                      <div className="text-gray-500 mb-12 flex justify-end gap-2 -mt-8">
                        <Image src={star} alt="Vector" width={14} height={14} />
                        <span className="text-[20px]">{product.rating}</span>
                      </div>
                      <hr className="w-[288px] h-[2px] -mt-8 mb-8 bg-[#B8E7FB] rounded-[1px]" />
                      <div className="flex justify-between items-center">
                        <p className="text-[20px] -mt-4">قیمت</p>
                        <p className="text-gray-800 font-semibold mb-4">
                          {product.price}{" "}
                          <span className="text-[18px] pr-2 text-gray-500">
                            تومان
                          </span>
                        </p>
                      </div>
                      <button className="bg-[#0974A2] text-white w-[288px] h-[48px] py-2 px-4 rounded-md text-[20px] transition-colors duration-200">
                        افزودن
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}

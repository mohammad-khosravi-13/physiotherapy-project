"use client";
import React from "react";
import Image from "next/image";
import vectormahsolat from "@/app/SVG/Vector mahsolat.svg";
import mahsol1 from "@/app/SVG/mahsol 1.svg";
import mahsol2 from "@/app/SVG/mahsol2.svg";
import mahsol3 from "@/app/SVG/mahsol3.svg";
import mahsol4 from "@/app/SVG/mahsol4.svg";
import mahsol5 from "@/app/SVG/mahsol5.svg";
import star from "@/app/SVG/Star 3.svg";
import mahsol6 from "@/app/SVG/mahsol6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import vectorbishtar from "@/app/SVG/Vector bishtar.svg";
import Link from "next/link";

function Product() {
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
      name: "ویت کاف",
      price: "435,000",
      rating: "5",
      image: mahsol3,
    },
    {
      id: 4,
      name: "ویت کاف",
      price: "435,000",
      rating: "5",
      image: mahsol4,
    },
    {
      id: 5,
      name: "ویت کاف",
      price: "435,000",
      rating: "5",
      image: mahsol5,
    },
    {
      id: 6,
      name: "ویت کاف",
      price: "435,000",
      rating: "5",
      image: mahsol6,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4 mr-16 mt-10">
        <Image src={vectormahsolat} alt="Vector" width={18} height={21} />
        <h3>محصولات</h3>
        <div className="flex justify-end gap-2 mr-[1050px]">
          <Link className="btn text-[16px]" href={"/Products"}>
            بیشتر
          </Link>
          <Image
            className=""
            src={vectorbishtar}
            alt="Vector"
            width={5}
            height={11}
          />
        </div>
      </div>

      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={10}
        className="w-full"
        style={{ height: "506px" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center mr-16">
            <div className="border rounded-lg p-4 shadow-md hover:shadow-2xl transition-shadow duration-200 w-[320px] h-[506px] ">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Product;

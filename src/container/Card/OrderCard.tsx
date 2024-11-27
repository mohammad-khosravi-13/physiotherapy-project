"use client";

import React from "react";
import Image from "next/image";
import mahsol3 from "@/svg/mahsol3.svg";
import star from "@/svg/Star 3.svg";
import vectordelete from "@/svg/vectordelete.svg";
import mahsol2 from "@/svg/mahsol2.svg";
import Counter from "../Counter/Counter";

export default function OrderCard() {
  const data = [
    { id: 1, name: "ویت کاف", price: 435000, rate: 5, img: mahsol3 },
    { id: 2, name: "فوم رولر", price: 330000, rate: 3, img: mahsol2 },
  ];

  return (
    
    <>
      {data.map((order, index) => (
        <div
          key={order.id}
          className=" w-[716px] h-[139px] rounded-[8px] bg-[#F4F4F4] shadow-md mt-5 mr-24"
        >
          <div className="w-[99%]">
            <Image
              className="w-[14px] h-[17px] mt-2 float-end  "
              src={vectordelete}
              alt="rate"
            />
          </div>
          <div className=" flex justify-center items-center">
            <Image
              className="w-[123px] h-[123px] object-cover rounded-md m-2 mt-2"
              src={order.img}
              alt={order.name}
            />
            <div className="flex flex-col ml-4 gap-2">
              <div className="flex items-center gap-5">
                <h3>{order.name}</h3>
                <div className="flex items-center gap-1 mr-12">
                  <Image className="w-[16px] h-[16px]" src={star} alt="rate" />
                  <p>{order.rate}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <h3>قیمت:</h3>
                <h3>
                  {order.price.toLocaleString()} <span>تومان</span>
                </h3>
              </div>
            </div>
            <div className="mr-60 -mt-20">
              <Counter />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

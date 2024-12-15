import React from "react";
import Image from "next/image";
import vectorcalender from "@/svg/Vectorcalender.svg";
import vectorcomments from "@/svg/Vectorcomments.svg";
import khadamatpic4 from "@/svg/khadamatpic4.svg";
import khadamatpic7 from "@/svg/khadamatpic7.svg";
import khadamatpic8 from "@/svg/khadamatpic8.svg";
import khadamatpic9 from "@/svg/khadamtpic9.svg";

export default function QuestionCardHome() {
  const Blogs = [
    {
      id: 1,
      image: khadamatpic7,
      titr: "ویبراسیون کل بدن",
      content:
        "با استفاده از ارتعاشات مکانیکی درمانی جهت بهبود عملکرد عضلات و سیستم عصبی ارگانیسم بدن انسان اشاره دارد. درمان با ویبراسیون با استفاده از دستگاههای ویبره‌ای انجام می‌شود ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },

    {
      id: 2,
      image: khadamatpic4,
      titr: "ماساژ درمانی",
      content:
        "ماساژ درمانی که اغلب یک رویکرد جامع در نظر گرفته می‌شود، شامل دستکاری بافت های نرم برای تقویت گردش خون، کاهش تنش عضلانی و کاهش درد است. این روش به طور یکپارچه در کن...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },

    {
      id: 3,
      image: khadamatpic8,
      titr: "سوزن خشک",
      content:
        "یک سوزن بسیار نازک و مخصوص جهت مواردی مانند رفع و درمان گرفتگی، اسپاسم عضلات و نقاط ماشه‌ای (تریگرپوینت) عضلات، افزایش گردش خون موضع، از بین بردن بافت‌های اسکار ناشی ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 4,
      image: khadamatpic9,
      titr: "مگنت تراپی",
      content:
        "این روش درمانی موجب تسکین درد و تسریع روند بهبودی و ترمیم آسیب‌ها می‌شود. استفاده از امواج مغناطیس در طی این روش درمانی موجب ایجاد یک میدان مغناطیسی ثابت در بدن شده ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
  ];

  return (
    <>
      {Blogs.map((Blog) => (
        <div
          key={Blog.id}
          className="flex bg-[#F7F7F7] p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center justify-between">
            <Image
              className="w-[176px] h-[176px] object-cover rounded-md"
              src={Blog.image}
              alt=""
            />

            <div className="mt-4 flex gap-1 text-center">
              <Image
                className="w-[12px] h-[13px]"
                src={vectorcalender}
                alt=""
              />
              <p className="text-gray-500 text-[10px]">{Blog.date}</p>
              <Image
                className="w-[12px] h-[13px]"
                src={vectorcomments}
                alt=""
              />
              <p className="text-gray-500 text-[10px]">{Blog.comments}</p>
            </div>
          </div>

          <div className="ml-4 flex flex-col justify-start p-5 w-full">
            <h3 className="text-[16px] text-[#070707] font-semibold mb-6">
              {Blog.titr}
            </h3>
            <p className="text-[14px] text-[#4A4A4A] mb-4 overflow-hidden line-clamp-3">
              {Blog.content}
            </p>

            <div className="flex justify-end mt-5">
              <button className=" btn text-white bg-[#FF7A00] w-[126px] h-[41px] rounded-[8px] text-[16px] hover:bg-white border-[2px] border-[#FF7A00] hover:text-[#FF7A00]">
                مطالعه
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

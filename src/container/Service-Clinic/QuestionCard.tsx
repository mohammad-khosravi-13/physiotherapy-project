import React from "react";
import Image from "next/image";
import khadamtclicic from "@/svg/khadamatcilicnc.svg";
import vectorcalender from "@/svg/Vectorcalender.svg";
import vectorcomments from "@/svg/Vectorcomments.svg";
import khadamatpic1 from "@/svg/khadamatpic1.svg";
import khadamatpic2 from "@/svg/khadamatpic2.svg";
import khadamatpic3 from "@/svg/khadamtpic3.svg";
import khadamatpic4 from "@/svg/khadamatpic4.svg";
import khadamatpic5 from "@/svg/khadamtpic5.svg";
import khadamatpic6 from "@/svg/khadamtpic6.svg";
import khadamatpic7 from "@/svg/khadamatpic7.svg";
import khadamatpic8 from "@/svg/khadamatpic8.svg";
import khadamatpic9 from "@/svg/khadamtpic9.svg";
import khadamatpic10 from "@/svg/khadamtpic10.svg";

export default function QuestionCard() {
  const Blogs = [
    {
      id: 1,
      image: khadamatpic1,
      titr: "لیزر پر توان",
      content:
        "لیزر درمانی فرآیند اعمال نور قرمز و مادون قرمز به ناحیه آسیب دیده است که روند بهبود بافت های نرم را تسریع می کند. لیزر درمانی از پرتو های دیود تک رنگ پر قدرت برای درمان بیماری...",
      date: "25 بهمن 1402",
      comments: "25نظر",
    },
    {
      id: 2,
      image: khadamatpic2,
      titr: "آب درمانی",
      content:
        "در این تکنیک,اندام مورد نظر ,گرم شده و در نتیجه از شدت درد کاسته می شود.وزن بدن در هنگام قرارگیری در آب,سبک شده و این امر ,منجر به تسهیل حرکت اندام هابرای فردمی شود...",
      date: "23 بهمن 1402",
      comments: "30نظر",
    },
    {
      id: 3,
      image: khadamatpic3,
      titr: "لیزر کم توان",
      content:
        "لیزر کم توان بعنوان یک عامل ضد التهاب عمل می‌کند از ان معمولا با عنوان لیزر سرد نیز یاد می‌شود؛ زیرا در طول درمان احساس گرما ایجاد نمی‌کند. کاربرد لیزر کم توان اثرات لیزر کم توان برای فیزیو...",
      date: "20 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 4,
      image: khadamatpic4,
      titr: "ماساژ درمانی",
      content:
        "ماساژ درمانی که اغلب یک رویکرد جامع در نظر گرفته می‌شود، شامل دستکاری بافت های نرم برای تقویت گردش خون، کاهش تنش عضلانی و کاهش درد است. این روش به طور یکپارچه در کن...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 5,
      image: khadamatpic5,
      titr: "شاک ویو",
      content:
        "با ایجاد یک سری امواج صوتی ضربان‌دار با انرژی کم مستقیما از طریق پوست بر روی محل آسیب دیده وارد می‌شود. ایده استفاده از شاک تراپی در درمان دردها و بیماری‌های مختلف سیستم اسک...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 6,
      image: khadamatpic6,
      titr: "CRM",
      content:
        "دستگاه CPM یکی از تجهیزات موتوردار فیزیوتراپی است که یک مفصل را در یک محدوده حرکتی از پیش تعیین شده و بدون نیاز به تلاش از سوی بیمار حرکت می‌دهد. در واقع مفصل مورد نظر ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 7,
      image: khadamatpic7,
      titr: "ویبراسیون کل بدن",
      content:
        "با استفاده از ارتعاشات مکانیکی درمانی جهت بهبود عملکرد عضلات و سیستم عصبی ارگانیسم بدن انسان اشاره دارد. درمان با ویبراسیون با استفاده از دستگاههای ویبره‌ای انجام می‌شود ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 8,
      image: khadamatpic8,
      titr: "سوزن خشک",
      content:
        "یک سوزن بسیار نازک و مخصوص جهت مواردی مانند رفع و درمان گرفتگی، اسپاسم عضلات و نقاط ماشه‌ای (تریگرپوینت) عضلات، افزایش گردش خون موضع، از بین بردن بافت‌های اسکار ناشی ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 9,
      image: khadamatpic9,
      titr: "مگنت تراپی",
      content:
        "این روش درمانی موجب تسکین درد و تسریع روند بهبودی و ترمیم آسیب‌ها می‌شود. استفاده از امواج مغناطیس در طی این روش درمانی موجب ایجاد یک میدان مغناطیسی ثابت در بدن شده ...",
      date: "18 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 10,
      image: khadamatpic10,
      titr: "تحریک الکتریکی",
      content:
        "در این روش پدهای الکتریکی بر روی پوست قرار گرفته و تحریک الکتریکی از طریق آن ها به اعصاب و فیبرهای حرکتی عضلات منتقل می‌شود. پدها روی نواحی دردناک بدن قرار داده شده و با استفاده ...",
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
              <button className= "btn text-white bg-[#FF7A00] w-[126px] h-[41px] rounded-[8px] text-[16px] hover:bg-white border-[2px] border-[#FF7A00] hover:text-[#FF7A00]">
                مطالعه
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/app/images/Logo 1.svg";
import Login1 from "@/app/images/Login 1.svg";
import Buy from "@/app/images/Buy.svg";
import { useRouter } from "next/navigation";
import readblog1 from "@/app/images/readblog1.svg";
import vectorcalender from "@/app/images/Vectorcalender.svg";
import blog1 from "@/app/images/blog1.svg";
import blog2 from "@/app/images/blog2.svg";
import blog3 from "@/app/images/blog3.svg";
import blog4 from "@/app/images/blog4.svg";
import vectorcomments from "@/app/images/Vectorcomments.svg";
import footblog from "@/app/images/footblog.svg"
import oldmanblog from "@/app/images/oldmanblog.svg"
import Didgah from "../Didgah/page";
import Footer from "../Footer/page";


export default function Page4() {
  const Blogs = [
    {
      id: 1,
      image: footblog,
      titr: "فیزیوتراپی در بهبود کشیدگی خارجی مچ پا",
      content:
        "کشیدگی های لیگامانی مچ پا یکی از شایع ترین آسیب هایی است که در مرحله حاد تحت درمان قرار می گیرد.یک ششم  موارد دوری از ورزش ناشی از آسیب های ورزشی به کشیدگی لیگامانی مچ پا مربوط می شود..",
      date: "18 بهمن 1402",
      comments: "20نظر",
    },
    {
      id: 2,
      image: blog4,
      titr: "فیزیوتراپی در كاهش علائم استئوآرتريت گردن",
      content:
        "استئوآرتريت,شایعترین بیماری مفصلی در تمام مفاصل و یکی از اختلالات فیزیکی عمده انسانی به شمار میآید.در 90% افراد جامعه در40سالگی,در مفاصل تحمل کننده وزن تغییراتی ایجاد می شود...",
      date: "18 بهمن 1402",
      comments: "20نظر",
    },
    {
      id: 3,
      image: blog2,
      titr: "آرتروز در مفصل ران",
      content:
        "هنگامی که فصل ران دچار ارتروز میشود شاهد ایجاد مشکل  و التهاب در مفاصل ران حین برخورد استخوان لگن با استخوان ران خواهیم بود.درنتیجه فرد با احساس درد روبرو میشود.",
      date: "23 بهمن 1402",
      comments: "30نظر",
    },
    {
      id: 4,
      image: blog3,
      titr: "فیزیوتراپی کف پا",
      content:
        "کف پا به عنوان عضو بسیار مهم که توزیع وزن در آن  اتفاق می افتد قسمتی مهم از بدن آدمی محسوب می شود و دردهای آن سبب اختلالات در زندگی روزمره فرد می شود روش های درمانی فیزیوتراپی...",
      date: "20 بهمن 1402",
      comments: "10نظر",
    },
    {
      id: 5,
      image: oldmanblog,
      titr: "تغییرات تنفسی در سالمندان و درمان فیزیوتراپی آن",
      content:
        "استئوآرتريت,شایعترین بیماری مفصلی در تمام مفاصل و یکی از اختلالات فیزیکی عمده انسانی به شمار میآید.در 90% افراد جامعه در40سالگی,در مفاصل تحمل کننده وزن تغییراتی ایجاد می شود...",
      date: "20 بهمن 1402",
      comments: "10نظر",
    },
  ];

  const router = useRouter();
  const hadelClick = () => {
    router.push("./Blog");
  };
  return (
    <>
      <div className="h-[60px] flex justify-between items-center  ">
        <div className="mr-[96px]">
          <Image src={Logo1} alt="logo" width={33} height={44} />
        </div>

        <div className="flex justify-start gap-12 ml-[400px] ">
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

        <div className="flex  ml-[96px]  gap-3 ">
          <Image src={Login1} alt="" width={24} height={24} />
          <Link className="text-black" href={"/Login"}>
            ورود
          </Link>
          <div className="h-6 border-l border-[#0974A2]"></div>
          <Image src={Buy} alt="" width={24} height={24} className="mr-5" />
        </div>
      </div>
      <div className="flex justify-end pl-[96px] mt-[8px]">
        <button
          className=" w-[193px] h-[48px] rounded-[8px] text-[#0974A2] text-[20px] border-[2px] border-[#0974A2]"
          onClick={hadelClick}
        >
          برگشت به بلاگ
        </button>
      </div>

      <div>
        <div>
          <div className="flex  items-center gap-6 mr-[96px] ">
            <Image src={readblog1} alt="" className="w-[240px] h-[240px]" />
            <div className="flex flex-col  ">
              <h3 className="text-[18px] font-bold text-[#070707]">
                فیزیوتراپی در تعویض مفصل زانو
              </h3>

              <div className="flex items-center justify-start gap-2 p-5 ">
                <Image
                  src={vectorcalender}
                  alt=""
                  className="w-[12px] h-[13px] "
                />
                <p className="text-[12px] text-[#4A4A4A]">25 بهمن 1402</p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col justify-between  w-1/2 p-10 mr-[55px]  ">
              <p className="leading-10  text-[18px]">
                یکی از مشکلات عمده افراد خصوصاً سالمندان درد شدید زانو به صورت
                پیشرونده با عدم استابیلیتی به صورت افزاینده و دفورمیتی پیشرونده
                در بیماری‌های دژنراتیو و آرتریت روماتوئیدتخریب کننده که باعث عدم
                کارکرد خوب زانو شده و زندگی طبیعی این افراد را مختل می‌کند. درد
                و دفورمیتی شدید از اندیکاسیون‌های شایع در آرتروپلاستی کامل زانو
                می‌باشند.کنار این روش ، پروسه توانبخشی خصوصاً فیزیوتراپی در حصول
                نتیجه مطلوب عمل بسیار موثر می‌باشد. که متاسفانه به نقش
                فیزیوتراپی در تعویض مفصل توجه چندانی نمی‌شودو همین مسئله باعث
                می‌شود نتیجه مطلوب بدست نیامده و در کیفت زندگی فرد تغییر چندانی
                به وجود نیاید. فیزیوتراپی بایستی در چند مرحله به خوبی اجرا شود
                تا این افراد از شرایط زندگی خوبی برخودارشده تا استقلال این افراد
                در انجام امور شخصی دچار اختلال نشود. در 25 مورد بیمار که بررسی
                شد، اولاً 23 نفر از آن‌ها زن بودند و عمده مشکلاتشان درد اکستنشن
                لگ ، محدودیت حرکتی و عدم استابلیتی در راه رفتن بود.به خصوص در
                بیمارانی که همزمان دو زانو عمل شده بودند. برای 10 نفر مراحل
                فیزیوتراپی از روز بعد عمل تا 45 روز بعد انجام شدو مشکلات فوق به
                طور قابل ملاحظه‌ای کاهش پیدا کرد.مشکل عمده دیگر که خوب مورد توجه
                قرار نگرفته بود عدم توجه به پیشگیری و بی‌توجهی نقش فیزیوتراپی در
                پیشگیری از این اختلالات بود. فیزیوتراپی در سه فاز حین بستری، بعد
                از ترخیص در منزل و کلینیک انجام شد.موفقیت جراحی تعویض مفصل زانو
                به میزان زیادی به رعایت نکات و دستورالعمل‌های ارائه شده توسط
                جراح برای بعد از عمل، به خصوص در چند هفته اول بعد از عمل بستگی
                دارد. بعد از جراحی آرتروپلاستی به مدت ۲ ساعت در ری‌کاوری
                می‌مانید. برخی افراد همان روز مرخص شده و برخی دیگر لازم است در
                بیمارستان بمانند. بعد از عمل باید به‌مرور سعی کنید پا و مچ پا را
                تکان دهید. این کار به افزایش جریان خون در ماهیچه‌های پا کمک
                می‌کند.احتمال دارد پزشک داروهای رقیق‌کننده خون تجویز کند تا خطر
                لخته شدن خون در ناحیه جراحی کمتر شود. همچنین برای کاهش درد
                داروهای مسکن تجویز می‌شوند.بخیه یا گیره‌هایی بر روی زخم ناحیه
                جراحی وجود دارد. این بخیه‌ها چندین هفته بعد از جراحی برداشته
                می‌شوند. یا اینکه بخیه در زیر پوست زانو قرار دارد که این بخیه
                نیازی به کشیده شدن ندارد. از قرار دادن محل بخیه تا زمان بهبود
                کامل، در آب خودداری کنید.بعد از عمل، فیزیوتراپیست به شما آموزش
                می‌دهد که چه تمریناتی را انجام دهید. تمرینات را به طور منظم
                انجام دهید و رژیم غذایی سالمی را دنبال کنید.نرمش کردن و ورزش
                آهسته، مخصوصاً در چند هفته اول بعد از عمل، یکی از ارکان اصلی بعد
                از این جراحی است. می بایست برخی از فعالیت‌های روزمره خود را به
                تاخیر انداخته و توقع دردهایی که با انجام برخی فعالیت ها یا در
                شب‌ها به سراغتان می آید، داشته باشید.از انجام فعالیت‌های عادی
                روزمره مانند نشستن و ایستادن طولانی، یا بالا رفتن از پله‌ها
                خودداری کنید.رانندگی را تا زمانی که پاهایتان قدرت عکس العمل نشان
                دادن مناسب را برای ترمز گرفتن و گاز دادن پیدا نکرده، به تاخیر
                اندازید.
              </p>
            </div>
            <div className="w-1/2 mt-10">
              <div className="flex flex-col gap-10 ">
                {Blogs.map((Blog) => (
                  <div
                    key={Blog.id}
                    className="flex bg-[#F7F7F7] p-4 rounded-md shadow-md w-[538px] h-[217px] mr-[55px]"
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
                        <p className="text-gray-500 text-[10px] ">
                          {Blog.date}
                        </p>
                        <Image
                          className="w-[12px] h-[13px]"
                          src={vectorcomments}
                          alt=""
                        />
                        <p className="text-gray-500 text-[10px]">
                          {Blog.comments}
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 flex flex-col justify-between p-5 w-full">
                      <h3 className="text-[16px] text-[#070707] font-semibold mb-4">
                        {Blog.titr}
                      </h3>

                      <p className="text-[14px] text-[#4A4A4A] overflow-hidden line-clamp-4">
                        {Blog.content}
                      </p>

                      <div className="flex justify-end">
                        <button className="text-white bg-[#FF7A00] w-[126px] h-[41px] rounded-[8px] text-[16px] hover:bg-white border-[2px] border-[#FF7A00] hover:text-[#FF7A00] mt-5">
                          مطالعه
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Didgah/>
     <Footer/>
    </>
  );
}

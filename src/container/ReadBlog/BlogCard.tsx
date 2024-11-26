import React from 'react'
import blog2 from "@/app/SVG/blog2.svg";
import blog3 from "@/app/SVG/blog3.svg";
import blog4 from "@/app/SVG/blog4.svg";
import footblog from "@/app/SVG/footblog.svg";
import oldmanblog from "@/app/SVG/oldmanblog.svg";
import Image from 'next/image';
import vectorcomments from "@/app/SVG/Vectorcomments.svg";
import vectorcalender from "@/app/SVG/Vectorcalender.svg";



export default function BlogCard() {
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
    

  return (
<>

    

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
                    <p className="text-gray-500 text-[10px] ">{Blog.date}</p>
                    <Image
                      className="w-[12px] h-[13px]"
                      src={vectorcomments}
                      alt=""
                    />
                    <p className="text-gray-500 text-[10px]">{Blog.comments}</p>
                  </div>
                </div>

                <div className="ml-4 flex flex-col justify-between p-5 w-full">
                  <h3 className="text-[16px] text-[#070707] font-semibold mb-4">
                    {Blog.titr}
                  </h3>

                  <p className="text-[14px] text-[#4A4A4A] overflow-hidden line-clamp-2">
                    {Blog.content}
                  </p>

                  <div className="flex justify-end ">
                    <button className="text-white bg-[#FF7A00] w-[126px] h-[41px] rounded-[8px] text-[16px] hover:bg-white border-[2px] border-[#FF7A00] hover:text-[#FF7A00] mt-5">
                      مطالعه
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
</>
  )
}

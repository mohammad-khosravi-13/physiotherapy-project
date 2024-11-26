import React from "react";
import Image from "next/image";
import soal from "@/app/SVG/Vector soal.svg";
import man from "@/app/SVG/Man 1.svg";

function Soalat() {
  const faq = [
    {
      id: 1,
      question: "تعداد جلسات مورد نیاز برای فیزیوتراپی چه میزان است؟",
      answer:
        "تعداد جلسات مورد نیاز برای هر فرد متفاوت است و بسته به نوع آسیب و شدت درد، این جلسات تعیین می شوند. در حالت طبیعی تعداد جلسات مورد نیاز برای هر فرد ده جلسه تنظیم می شود، که این تعداد بسته به شرایط فرد می تواند تغییر کند.",
    },
    {
      id: 2,
      question: "درمان فیزیوتراپی چند جلسه طول میکشد؟",
      answer:
        "با توجه به این که در فیزیوتراپی تسکین درد ترمیم بافت درمان اختلال و عملکرد و همچنین توانبخشی عضلانی انجام می پذیرد.این پروسه عموما در طیف بزرگی از بیماری ها و اختلالات در حدود 10 جلسه به طول می انجامد.",
    },
    {
      id: 3,
      question:
        "قبل از مراجعه به فیزیوتراپی نیاز به عکس ام آر آی یا سیتی اسکن می‌باشد؟",
      answer:
        "برای مراجعه به فیزیوتراپی عموما  نیاز به تصویربرداری MRI یا اشعه ایکس  از موضع درد و اختلال وجود ندارد مگر در موارد خاص که فیزیوتراپیست می بایست مطابق دستور پزشک ارتوپد الزامات ارزیابی  و معاینات اولیه خصوصا بعد از عمل جراحی را رعایت  نماید.",
    },
    {
      id: 4,
      question: "آیا فیزیوتراپی برای کودکان ممنوعیت دارد؟",
      answer:
        "خیر ,انجام فیزیوتراپی برای کودکان هیچ ممنوعیتی ندارد بلکه در دنیای امروز به دلیل کم تحرکی و تغییر الگوی زندگی کودکان و با ایجاد اختلالات ساختار قامتی,تعداد زیادی از مراجعین فیزیوتراپی کودکان هستند.",
    },
  ];

  return (
    <>
      <div className=" relative flex justify-start mr-24 gap-4 mt-14">
        <Image src={soal} alt="Vector" width={19} height={21} />
        <h3 className="text-[18px]">سوالات متداول</h3>
      </div>

      <div className="flex flex-col gap-6 mt-4 mx-24 ">
        {faq.map((item) => (
          <div
            key={item.id}
            className="collapse collapse-arrow bg-[#F7F7F7]   rounded-[8px] w-[619px] "
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium peer-checked:bg-[#FF7A00]  peer-checked:text-white text-[14px] border-r-4 border-[#FF7A00]">
              {item.question}
            </div>
            <div className="collapse-content  text-[#4A4A4A]  ">
              <p className="p-3 text-[14px]">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="absolute left-0 ml-20 ">
          <Image src={man} alt="Vector" width={231} height={315} />
        </div>
      </div>
    </>
  );
}

export default Soalat;

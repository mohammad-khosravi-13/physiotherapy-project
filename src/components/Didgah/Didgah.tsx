import React from "react";
import Image from "next/image";
import didgah from "@/app/SVG/diadgah.svg";
import score5 from "@/app/SVG/Score 5.svg";
import man1box1 from "@/app/SVG/man1box1.svg";
import man2box2 from "@/app/SVG/man2box2.svg";
import woman3box3 from "@/app/SVG/woman3box3.svg";

function Didgah() {
  return (
    <>
      <div className=" relative flex justify-start mr-24 gap-4 mt-20">
        <Image src={didgah} alt="Vector" width={19} height={21} />
        <h3 className="text-[18px]">دیدگاه شما</h3>
      </div>

      <div className="flex gap-4 mr-24 mt-10 mb-8 flex-wrap">
        <div className="bg-[#FCFCFC] shadow-xl rounded-[8px] w-[320px] h-[176px]">
          <div className="flex items-center justify-between p-5">
            <p className="text-[12px] text-[#4A4A4A]">1402/10/20</p>
            <Image src={score5} alt="Vector" width={66} height={10} />
          </div>
          <div className="flex justify-start gap-3 pr-5 items-center">
            <Image
              className="bg-orange-400 rounded-[4px]"
              src={man1box1}
              alt="Vector"
              width={36}
              height={36}
            />
            <h4 className="text-[14px] text-[#000000]">علی اکبری</h4>
          </div>
          <p className="pr-5 mt-3 text-[14px] text-[#4A4A4A]">
            عالی بود همه چیز! <br />
            آسیب کمرم درمان شد و محدودیت حرکتی ندارم. <br />
            با تشکر از کلینیک سلامت
          </p>
        </div>

        <div className="bg-[#FCFCFC] shadow-xl rounded-[8px] w-[320px] h-[176px]">
          <div className="flex items-center justify-between p-5">
            <p className="text-[12px] text-[#4A4A4A]">1402/10/18</p>
            <Image src={score5} alt="Vector" width={66} height={10} />
          </div>
          <div className="flex justify-start gap-3 pr-5 items-center">
            <Image
              className="bg-green-400 rounded-[4px]"
              src={man2box2}
              alt="Vector"
              width={36}
              height={36}
            />
            <h4 className="text-[14px] text-[#000000]">حسین فضلی</h4>
          </div>
          <p className="pr-5 mt-3 text-[14px] text-[#4A4A4A]">
            هم محیط آرام بود و هم پذیرش به موقع انجام شد. <br />
            با تشکر
          </p>
        </div>
        <div className="bg-[#FCFCFC] shadow-xl rounded-[8px] w-[320px] h-[176px]">
          <div className="flex items-center justify-between p-5">
            <p className="text-[12px] text-[#4A4A4A]">1402/10/20</p>
            <Image src={score5} alt="Vector" width={66} height={10} />
          </div>
          <div className="flex justify-start gap-3 pr-5 items-center ">
            <Image
              className="bg-blue-500 rounded-[4px]"
              src={woman3box3}
              alt="Vector"
              width={36}
              height={36}
            />
            <h4 className="text-[14px] text-[#000000]">زهرا کیانی</h4>
          </div>
          <p className="pr-5 mt-3 text-[14px] text-[#4A4A4A]">
            برخورد پرسنل خوب بود.
          </p>

         
        </div>
      </div>
    </>
  );
}

export default Didgah;

import React from "react";
import Image from "next/image";
// import map from "../../images/map.svg";
import logo from "@/app/images/Logo 1.svg";
import telegram from "@/app/images/Vectortelegram.svg";
import insta from "@/app/images/vectorInsta.svg";
import whats from "@/app/images/vectorWhats.svg";
import youtob from "@/app/images/vectorYoutob.svg";
import call from "@/app/images/Call.svg";
import email from "@/app/images/email.svg";
import location from "@/app/images/location.svg";
import Mape from "@/app/container/map/Mape";
import fizio from "@/app/images/کلینیکـــــــــ فیزیوتراپی سلامتــــــــــ.svg";

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-7  bg-[#FCFCFC]">
        <div className="flex flex-col items-center mt-[87px]">
          <div className="flex justify-between items-start w-full px-10 mt-20 gap-10">
            <div className="flex  items-center">
              <Image src={logo} alt="Vector" className="w-[150px] h-[196px]" />
              <Image src={fizio} alt="Vector" className="w-[96px] h-[126px]" />
            </div>

            <div className="flex flex-col items-start space-y-3">
              <h3 className="text-[16px] text-[#5D5E58]">ارتباط با ما</h3>
              <hr className="w-[247px] h-[2px] bg-[#09A283] rounded-[2px]" />
              <div className="space-y-2">
                <div className="flex items-center gap-5">
                  <Image src={call} alt="Vector" />
                  <p>021-77556644</p>
                </div>
                <div className="flex items-center gap-5">
                  <Image src={email} alt="Vector" />
                  <p>SalamatClc@gmail.com</p>
                </div>
                <div className="flex items-start gap-5">
                  <Image src={location} alt="Vector" />
                  <p>
                    تهران، نارمک ، بزرگراه شهید قاسم
                    <br /> سلیمانی، میدان بیست و سوم
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3">
              <h3 className="text-[16px] text-[#5D5E58]">لینک های پرکابرد</h3>
              <hr className="w-[208px] h-[2px] bg-[#09A283] rounded-[2px]" />
              <p>خدمات کلینیک</p>
              <p>خدمات منزل</p>
              <p>محصولات</p>
              <p>فیلم های آموزشی</p>
            </div>

            <div className="flex flex-col items-start space-y-3">
              <h3 className="text-[16px] text-[#5D5E58]">شبکه های اجتماعی</h3>
              <hr className="w-[207px] h-[2px] bg-[#09A283] rounded-[2px]" />
              <div className="flex gap-2 mt-3">
                <Image src={telegram} alt="Vector" />
                <Image src={insta} alt="Vector" />
                <Image src={whats} alt="Vector" />
                <Image src={youtob} alt="Vector" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Mape />
        </div>
      </div>

      <div>
        <h3 className="text-[#5D5E58] text-[16px] pr-20 mt-5">
          تمامی حقوق این سایت متعلق به کلینیک فیزیوتراپی سلامت می باشد.
        </h3>
      </div>
    </>
  );
}

export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import logout from "../../images/Logout.png";
import profil from "../../images/mamad.jpg";
import icon1 from "../../svg/Activity 1.svg";
import icon2 from "../../svg/Document Justify  Right 1.svg";
import icon3 from "../../svg/Calender 2.svg";
import icon4 from "../../svg/Chart.svg";
import icon5 from "../../svg/Folder 1.svg";
import icon6 from "../../svg/Group 3.svg";
import icon7 from "../../svg/Home 2.svg";
import icon8 from "../../svg/Profile Square.svg";
import icon9 from "../../svg/Message 9.svg";
import icon10 from "../../svg/Pin.svg";
import icon11 from "../../svg/Message 35.svg";
import icon12 from "../../svg/Time Circle 1.svg";
import icon13 from "../../svg/Setting.svg";
import Link from "next/link";

function Crad() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cerad = [
    { text: "داشبورد", src: icon1, href: "/panel/" },
    { text: "جدول برنامه ریزی", src: icon2, href: "/panel/worktime" },
    { text: "رزرو های امروز", src: icon3, href: "/panel/todaypanel" },
    { text: "گزارش مالی", src: icon4, href: "/panel/canseletpanel" },
    { text: "دوره های مالی", src: icon5, href: "/panel/financeial" }, 
    { text: "کاربران", src: icon6, href: "/panel/financeial" },
    { text: "خدمات منزل", src: icon7, href: "/pane/financeial" },
    { text: "ادمین ها", src: icon8, href: "/panel/financeial" },
    { text: "دیدگاه ها", src: icon9, href: "/panel/financeial" },
    { text: "محصولات", src: icon10, href: "/panel/financeial" },
    { text: "پیام ها", src: icon11, href: "/panel/financeial" },
    { text: "ساعت کاری", src: icon12, href: "/panel/financeial" },
    { text: "تنظیمات", src: icon13, href: "/panel/financeial" },
  ];

  return (
    <div>
      <div className="sm:hidden flex items-center justify-between p-4 border-b-2">
        <h1 className="text-lg font-bold">پنل مدیریت</h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <div className=" w-[206px] h-[992px] border-2 rounded-md shadow-md ">
        <div className="flex justify-between items-center px-5">
          <h2 className="text-lg font-bold">منو</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl focus:outline-none sm:block lg:hidden"
          ></button>
        </div>
        <div className="flex flex-col items-center gap-2 text-black relative top-[20px]">
          <Image
            src={profil}
            alt="profil"
            width={80}
            height={80}
            className="shadow-black shadow-sm rounded-2xl"
          />
          <h1 className="text-center">محمد خسروی</h1>
        </div>
        <div className="text-black text-base  flex flex-col gap-7 p-2 relative top-16 h-[calc(100%-200px)]">
          {cerad.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className=" flex gap-4">
                <Image src={item.src} alt="icon" width={24} height={24} />
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center sm:mt-auto">
          <button className="btn  bg-[#FF4B4B] text-white h-12 w-36 rounded-lg flex items-center justify-center gap-3">
            <Image src={logout} alt="logout img" width={20} height={20} />
            <span>خروج</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crad;

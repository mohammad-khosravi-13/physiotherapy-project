import React from "react";
import Image from "next/image";
import logo from "../imeges/Layer_3.png";
import vector from "../imeges/Vector.png";

function Header() {
  return (
    <>
      <div className="bg-slate-300 flex justify-end  ">
        <div>
          <Image src={logo} alt="logo" width={32} height={66} />
        </div>
        <link rel="stylesheet" href="" /> خانه
        <link rel="stylesheet" href="" /> خدمات
        <link rel="stylesheet" href="" /> درباره ما
        <link rel="stylesheet" href="" /> تماس با ما
        <link rel="stylesheet" href="" /> بلاگ
        <link rel="stylesheet" href="" /> جستجو
      </div>

      <div
        style={{
          backgroundImage: "url('/imeges/Layer_3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
        }}
        className="relative"
      >
        <div className="flex justify-end mr-28 -mt-36">
          <div className="absolute -mt-20 rtl: flex justify-center flex-col">
            <h3>
              کلینیک فیزیوتراپی <span className="text-blue-500">سلامت</span>
            </h3>
            <h3>.درمان تخصصی را با تجربه کنید</h3>
            <button className="bg-orange-500">رزرو آنلاین نوبت</button>
          </div>
        </div>
        ّ
        <div className="flex">
          <div className="absolute flex justify-start gap-20">
            <p>انتخاب روز</p>
            <p>انتخاب ساعت</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-end">
          <h3 className="">روزهای کاری</h3>
          <Image src={vector} alt="Vector" width={24} height={24} />
        </div>
       <div className="bg-slate-400 gap-2 ">
          <p className="">1402/11/21 شنبه</p>
          <h5>8 الی 20</h5>
          
        </div>
      </div>
    </>
  );
}

export default Header;

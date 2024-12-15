import React from "react";
import Image from "next/image";
import photo3 from "@/app/SVG/axsafhe3.svg";
import Footer from "@/components/Footer/Footer";
import CardBlog from "@/container/Blog/CardBlog";
import Header from "@/components/Haeder/Haeder";

export default function Blog() {
  return (
    <>
     <Header/>
      <div className="flex justify-center pr-2">
        <Image src={photo3} alt="" className="w-[1248px] h-[256px] relative " />
        <div className="absolute  left-[562px] top-[135px]">
          <h3 className="text-[28px]">
            نوبت فیزیوتراپی <br />
            <span className="text-[22px]">خود را بدون دردسر رزرو کنید</span>
          </h3>

          <button className="w-[193px] h-[44px] bg-[#0974A2] text-[20px] text-white rounded-[8px]">
            رزرو آنلاین نوبت
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-32 -mt-16">
        <CardBlog />
      </div>
      <Footer />
    </>
  );
}

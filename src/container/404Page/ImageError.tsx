import React from "react";
import Image from "next/image";
import image404 from "@/svg/image404.svg";
import error from "@/svg/404error.svg";
import Link from "next/link";

export default function ImageError() {
  return (
    <>
      <Image
        className="w-[1440px] h-[480px] mt-[6%] "
        src={image404}
        alt="Vector"
      />
      <div className="absolute top-24 mr-[97px]">
        <Image
          className="w-[402px] h-[425px] mt-24 "
          src={error}
          alt="Vector"
        />
      </div>

      <div className="absolute top-20 mr-[97px] m-10">
        <h1 className="text-[18px]">صفحه مورد نظر یافت نشد.</h1>

        <Link
          className="btn mt-4 bg-[#0974A2] w-[187px] h-[48px] text-white text-[16px]"
          href={"/"}
        >
          بازگشت به خانه
        </Link>
      </div>
    </>
  );
}

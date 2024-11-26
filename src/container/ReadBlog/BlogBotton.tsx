import React from "react";
import Link from "next/link";
import Image from "next/image";
import readblog1 from "@/svg/readblog1.svg";
import vectorcalender from "@/svg/Vectorcalender.svg";

export default function BlogBotton() {
  return (
    <>
      <div>
        <div className="flex justify-end pl-[96px] mt-[8px]">
          <Link
            className="btn w-[193px] h-[48px] rounded-[8px] text-[#0974A2] text-[20px] border-[1px] border-[#0974A2]"
            href={"/Blog"}
          >
            برگشت به بلاگ
          </Link>
        </div>

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
      </div>
    </>
  );
}

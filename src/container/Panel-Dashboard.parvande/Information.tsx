import React from "react";
import Image from "next/image";
import alarmvector from "@/svg/alarmvector.svg";
import deletevector from "@/svg/deletevector.svg";

export default function Information() {
  return (
    <>
      <div className=" flex flex-col gap-10">
        <div className="bg-[#FFFFF] shadow-md w-[868px] h-[110px] rounded-[8px]  border-r-4 border-[#FF7A00] ">
          <div className="flex justify-between m-5  ">
            <h3>درخواست رزرو نوبت خدمات در منزل</h3>
            <p>
              ارسال/ در حال بررسی /
              <span className="text-[14px] text-[#616161]">تایید شده/نشده</span>
            </p>
          </div>
          <div className="flex justify-between m-5 ">
            <div className="flex">
              <p className="text-[#5D5E58]">
                نوع خدمت: <span className="text-[#000000]">ماساژ درمانی</span>
              </p>
            </div>
            <div className="flex">
              <p className="text-[#5D5E58]">
                تاریخ و ساعت:{" "}
                <span className="text-[#000000]">1402/12/01 , 13:00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFF] shadow-md w-[868px] h-[110px] rounded-[8px]  border-r-4 border-[#0974A2] ">
          <div className="flex justify-between m-5  ">
            <h3>نوبت ویزیت</h3>
            <div className="flex justify-end gap-2 ml-10">
              <Image
                src={alarmvector}
                alt="logo"
                width={16}
                height={19}
                className="mr-[91px]  "
              />
              <p>یادآور</p>
            </div>
          </div>
          <div className="flex justify-between m-5 ">
            <div className="flex">
              <p className="text-[#5D5E58]">
                تاریخ و ساعت:
                <span className="text-[#000000]">1402/12/01 , 13:00</span>
              </p>
            </div>
            <div className="flex justify-end gap-2 ml-1 ">
              <Image
                src={deletevector}
                alt="logo"
                width={17}
                height={21}
                className="mr-[91px]  "
              />
              <p>حذف نوبت</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFF] shadow-md w-[868px] h-[228px] rounded-[8px]  border-r-4 border-[#269200] ">
          <div className="flex justify-between m-5 mb-5 ">
            <h3 className="text-[#4A4A4A] text-[14px]"> 1402/11/23 ,15:00 </h3>
            <div className="flex justify-end gap-2 ml-10">
              <p className="text-[#4A4A4A] text-[14px]">
                جلسه <span>2از 10</span>
              </p>
            </div>
          </div>

          <div className="m-5 text-[18px]">
            <p className="text-[#5D5E58]">
              نوع خدمت: <span className="text-[#000000]">لیزر پر توان</span>
            </p>
          </div>
          <div className="m-5 ">
            <p className="text-[#5D5E58] text-[18px]">
              توضیحات فیزیوتراپ:
              <span className="text-[#000000]">
                علاوه بر جلسات حضوری ، نیاز به انجام تمرینات کششی در منزل دارید.
                می‌توانید فیلم‌های آن را از صفحه اصلی سایت کلینیک مشاهده کنید.
              </span>
            </p>
          </div>
          <div className="flex justify-between m-5 ">
            <div className="flex">
              <p className="text-[#5D5E58]">تاریخ و ساعت نوبت بعدی:</p>
            </div>
            <div className="flex justify-end gap-2 ml-1 ">
              <p>15:00 , 1402/11/23</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

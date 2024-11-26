import React from "react";

export default function Form() {
  return (
    <>
      <div>
        <div className="mr-[30px] mb-5 ">
          <input
            className="w-[480px] h-[56px] rounded-[8px] p-4 shadow-md mt-28 "
            type="text"
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <div className="mr-[30px]  w-[200px]    ">
          <input
            className="w-[480px] h-[56px]  rounded-[8px] p-4 shadow-md  "
            type="text"
            placeholder="جنسیت"
          />
          <input
            className="w-[480px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
            type="text"
            placeholder="تاریخ تولد"
          />
          <input
            className="w-[480px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
            type="text"
            placeholder="کد ملی"
          />
          <input
            className="w-[480px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
            type="text"
            placeholder="شماره موبایل"
          />
          <div className="relative mt-3 ">
            <input
              type="text"
              placeholder="ایمیل"
              className="border border-gray-300 rounded-[8px] w-[480px] h-[56px] p-4 shadow-md"
            />

            <button className=" absolute right-[392px] bg-[#269200] text-white -mt-14 rounded-[8px] w-[89px] h-[56px] ">
              تایید ایمیل
            </button>
          </div>

          <input
            className="w-[480px] h-[56px] rounded-[8px] p-4 mt-3 shadow-md"
            type="text"
            placeholder="آدرس"
          />
        </div>
        <div>
          <button className="w-[150px] h-[45px]  rounded-[8px] text-[16px]  border-[2px] border-[#269200] mr-[30px] mt-20 mb-32">
            ذخیره اطلاعات
          </button>
        </div>
      </div>
      <div className="h-[556px] border-l-2 mr-14 border-[#0974A2] ml-24 mt-28"></div>
      <div className="w-1/2  ">
        <div className="flex justify-end ml-24 mt-5">
          <button className=" bg-[#0974A2] w-[181px] h-[48px] rounded-[8px] text-white">
            رزرو آنلاین نوبت
          </button>
        </div>
        <div>
          <h3 className="text-[20px] mt-10">آیا به پوکی استخوان دچارید؟ </h3>
          <div className="flex justify-start gap-7  mt-3 ">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>بله</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>خیر</h3>
            </div>
          </div>
          <h3 className="mt-7 text-[20px]">آیا سابقه سکته مغزی داشته‌اید؟ </h3>
          <div className="flex justify-start gap-7  mt-3 ">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>بله</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>خیر</h3>
            </div>
          </div>
          <h3 className="mt-7 text-[20px]">آیا به ام اس دچارید؟ </h3>
          <div className="flex justify-start gap-7  mt-3 ">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>بله</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>خیر</h3>
            </div>
          </div>
          <h3 className="mt-5 text-[18px]">سوابق بیماری</h3>
        </div>
        <div className="flex justify-start">
          <input
            className="w-[444px] h-[161px] p-4 mt-5 shadow-md rounded-[8px]"
            type="text"
            placeholder="بنویسید"
          />
        </div>
      </div>
    </>
  );
}

import React from 'react'

export default function FormContent() {
  return (

    <>
    
    <div className="flex flex-col justify-between  w-1/2  ">
          <div>
            <h3 className="text-[18px] mr-20 mt-10">اطلاعات مراجعه کننده</h3>
          </div>
          <div className="flex justify-start gap-7 mr-20 mt-5 ">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>خودم</h3>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <h3>شخص دیگر</h3>
            </div>
          </div>
          <div className="mr-20 ">
            <h3 className="text-[18px] mt-7 mb-5">اطلاعات اصلی</h3>
            <div className="">
              <input
                className="w-[256px] h-[56px] rounded-[8px] p-4 shadow-md "
                type="text"
                placeholder="نام"
              />
              <input
                className="w-[292px] h-[56px] rounded-[8px] p-4 m-3 shadow-md "
                type="text"
                placeholder=" نام خانوادگی"
              />
            </div>
          </div>
          <div className="mr-14 flex flex-col w-[200px] p-5  ">
            <input
              className="w-[560px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
              type="text"
              placeholder="جنسیت"
            />
            <input
              className="w-[560px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
              type="text"
              placeholder="تاریخ تولد"
            />
            <input
              className="w-[560px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
              type="text"
              placeholder="کد ملی"
            />
            <input
              className="w-[560px] h-[56px] rounded-[8px] p-4 shadow-md mt-3"
              type="text"
              placeholder="شماره موبایل"
            />
            <div className="relative mt-3 ">
              <input
                type="text"
                placeholder="ایمیل"
                className="border border-gray-300 rounded-[8px] w-[560px] h-[56px] p-4"
              />

              <button className=" absolute right-[470px] bg-[#003D57] text-white -mt-14 rounded-[8px] w-[89px] h-[56px] ">
                تایید ایمیل
              </button>
            </div>

            <input
              className="w-[560px] h-[56px] rounded-[8px] p-4 mt-3"
              type="text"
              placeholder="آدرس"
            />
          </div>
        </div>

    </>
  )
}

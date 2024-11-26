import React from "react";
import Image from "next/image";
import vectorsee from "@/svg/Vectorsee.svg";
import vectorremove from "@/svg/Vectorremove.svg";

export default function Tabel() {
  return (
    <>
      <div>
        <table className="min-w-[1000px] h-[336px]  mt-[4%]  rounded-r-[8px]  ">
          <thead>
            <tr className="bg-[#4A4A4A]  text-white ">
              <th className=" rounded-tr-lg px-4 py-2">ردیف</th>
              <th className=" px-4 py-2">عنوان</th>
              <th className=" px-4 py-2">تاریخ ارسال</th>
              <th className=" px-4 py-2">ساعت ارسال</th>
              <th className=" px-4 py-2">وضعیت</th>
              <th className=" rounded-tl-[8px] px-4 py-2">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">1</td>
              <td className="border border-gray-300 px-4 py-2"> ویزیت</td>
              <td className="border border-gray-300 px-4 py-2">1402/11/02</td>
              <td className="border border-gray-300 px-4 py-2">14:02</td>
              <td className="border border-gray-300 px-4 py-2">
                پاسخ داده شده-خوانده نشده
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorsee}
                    alt="Vector"
                  />
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorremove}
                    alt="Vector"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">2</td>
              <td className="border border-gray-300 px-4 py-2">جابجایی نوبت</td>
              <td className="border border-gray-300 px-4 py-2">1402/11/01</td>
              <td className="border border-gray-300 px-4 py-2">13:00</td>
              <td className="border border-gray-300 px-4 py-2">
                پاسخ داده شده-خوانده شده
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorsee}
                    alt="Vector"
                  />
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorremove}
                    alt="Vector"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">3</td>
              <td className="border border-gray-300 px-4 py-2">خدمات منزل</td>
              <td className="border border-gray-300 px-4 py-2">1402/10/25</td>
              <td className="border border-gray-300 px-4 py-2">8:00</td>
              <td className="border border-gray-300 px-4 py-2">
                پاسخ داده شده-خوانده نشده
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorsee}
                    alt="Vector"
                  />
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorremove}
                    alt="Vector"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">4</td>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">
                جابجایی نوبت
              </td>
              <td className="border border-gray-300 px-4 py-2">1402/10/03</td>
              <td className="border border-gray-300 px-4 py-2">20:00</td>
              <td className="border border-gray-300 px-4 py-2">
                پاسخ داده شده-خوانده شده
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorsee}
                    alt="Vector"
                  />
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorremove}
                    alt="Vector"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">5</td>
              <td className="border border-gray-300 px-4 py-2">جابجایی نوبت</td>
              <td className="border border-gray-300 px-4 py-2">1402/10/01</td>
              <td className="border border-gray-300 px-4 py-2">11:00</td>
              <td className="border border-gray-300 px-4 py-2">
                پاسخ داده شده-خوانده شده
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorsee}
                    alt="Vector"
                  />
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorremove}
                    alt="Vector"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">6</td>
              <td className="border border-gray-300 px-4 py-2">سفارش محصول</td>
              <td className="border border-gray-300 px-4 py-2">1402/10/01</td>
              <td className="border border-gray-300 px-4 py-2">12:00</td>
              <td className="border border-gray-300 px-4 py-2">
                پاسخ داده شده-خوانده شده
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center items-center gap-5">
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorsee}
                    alt="Vector"
                  />
                  <Image
                    className="w-[20px] h-[17px] "
                    src={vectorremove}
                    alt="Vector"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

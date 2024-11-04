import React from "react";
import Image from "next/image";
import justify from "../../svg/Document Justify  Right 3.svg";
import showe from "../../svg/Show.svg";
import delet from "../../svg/Delete 2.svg";
function Tabeladmin() {
  return (
    <div className=" h-[77%]">
      <table className="min-w-full border-collapse rounded-t-2xl relative top-10 ">
        <thead>
          <tr className=" rounded-tr-2xl">
            <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">نقش</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">نام کاربری</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">نام و نام خانوادگی</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">شماره موبایل</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]"> تاریخ ایجاد</th>
            <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image
                  src={justify}
                  alt="justify icon"
                  width={24}
                  height={24}
                />
                <Image src={showe} alt="showe icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" w-[67%] flex justify-between absolute top-full ">
        <div></div>
        <div>
          <button className="w-[136px] h-[36px] bg-[#0974A2] rounded-[8px]">
            خروجی اکسل
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabeladmin;

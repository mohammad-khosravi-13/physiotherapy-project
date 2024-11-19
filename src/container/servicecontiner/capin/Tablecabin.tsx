import React from "react";
import Image from "next/image";
import minus from "@/svg/minus.svg";
import add from "@/svg/add.svg"
import edit1 from "@/svg/Edit 1.svg"
function Tablecabin() {
  return (
    <div>
      <div className=" flex justify-between mt-4">
        <div>
          <h1>تعداد کابین ها:</h1>
        </div>
        <div>
          <button className="w-[177px] h-[40px] rounded-[8px] text-white bg-[#269200]">
            افزودن کابین ها
          </button>
        </div>
      </div>
      <div className=" flex  items-center gap-5">
        <div>
          <p>کابین های ویزیت:</p>
        </div>
        <div className=" flex shadow-custom w-[134px] h-[36px] items-center justify-center rounded-[8px]">
          <p>کابین شماره 1</p>
          <Image src={minus} alt="minus logo" width={24} height={24} />
        </div>
        <div className=" flex text-[#0974A2] ">
          <Image src={add} alt="add logo" width={24} height={24} />
          <p>اضافه کردن</p>
        </div>
      </div>
      <div className=" flex  items-center gap-5 mt-7">
        <div>
          <p>کابین های درمان:</p>
        </div>
        <div className=" flex shadow-custom w-[134px] h-[36px] items-center justify-center rounded-[8px]">
          <p>کابین شماره 1</p>
          <Image src={minus} alt="minus logo" width={24} height={24} />
        </div>
        <div className=" flex shadow-custom w-[134px] h-[36px] items-center justify-center rounded-[8px]">
          <p>کابین شماره 1</p>
          <Image src={minus} alt="minus logo" width={24} height={24} />
        </div>
        <div className=" flex shadow-custom w-[134px] h-[36px] items-center justify-center rounded-[8px]">
          <p>کابین شماره 1</p>
          <Image src={minus} alt="minus logo" width={24} height={24} />
        </div>
        <div className=" flex text-[#0974A2] ">
          <Image src={add} alt="add logo" width={24} height={24} />
          <p>اضافه کردن</p>
        </div>
      </div>
      <div className=" h-[77%]">
        <table className="min-w-full border-collapse rounded-t-2xl relative top-10 text-center ">
          <thead>
            <tr className=" rounded-tr-2xl text-white">
              <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A] w-20">ردیف</th>
              <th className=" px-4 py-2 bg-[#4A4A4A] w-40">کابین</th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">نام خدمت</th>
              <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">
                1
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={add} alt="add icon" width={24} height={24} />
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">
                2
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={add} alt="add icon" width={24} height={24} />
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">
                3
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={add} alt="add icon" width={24} height={24} />
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">
                4
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={add} alt="add icon" width={24} height={24} />
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">
                5
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={add} alt="add icon" width={24} height={24} />
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablecabin;

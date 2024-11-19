import React from 'react'
import Image from 'next/image';
import search from "@/svg/Search 2.svg"
import delet from "@/svg/Delete 2.svg"
import edit from "@/svg/Edit 1.svg"
function Tableservice2() {
  return (
    <div>
      <div className=" flex justify-between items ">
        <div>
          <input
            type="text"
            className=" relative  border-2 pr-12 bg-[#FCFCFC] rounded-[8px] w-[412px] h-[48px]"
            placeholder="جستجو"
          />
          <div className=" relative bottom-9 right-3">
            <Image src={search} alt="search icon" width={24} height={24} />
          </div>
        </div>
        <div>
          <button className=" w-[177px] h-[40px] rounded-[8px] text-white bg-[#269200]">
            افزودن
          </button>
        </div>
      </div>
      <div className=" h-[77%]">
        <table className="min-w-full border-collapse rounded-t-2xl relative top-10 text-center ">
          <thead>
            <tr className=" rounded-tr-2xl text-white">
              <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A] w-20">
                ردیف
              </th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">نام خدمت</th>
              <th className=" px-4 py-2 bg-[#4A4A4A] w-40">هزینه هرپایه جلسه</th>
              <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">1</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={edit} alt="edit icon" width={24} height={24} />
                  <Image src={delet} alt="add icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">2</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={edit} alt="edit icon" width={24} height={24} />
                  <Image src={delet} alt="add icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">3</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={edit} alt="edit icon" width={24} height={24} />
                  <Image src={delet} alt="add icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">4</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={edit} alt="edit icon" width={24} height={24} />
                  <Image src={delet} alt="add icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 h-[48px]">5</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-4 w-28">
                <span className=" flex justify-around">
                  <Image src={edit} alt="edit icon" width={24} height={24} />
                  <Image src={delet} alt="add icon" width={24} height={24} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tableservice2
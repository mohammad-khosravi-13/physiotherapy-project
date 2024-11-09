import React from "react";
import Image from "next/image";
import delet1 from "@/svg/Delete 2.svg";
import edit1 from "@/svg/Edit 1.svg";
import image1 from "@/svg/image- 48.svg";
function Tablequestion() {
  return (
    <div>
      <div className=" float-end">
        <button className="w-[177px] text-white h-[36px] rounded-[8px] bg-[#269200] ">
          افزودن سوال جدید
        </button>
      </div>
      <div className=" h-[77%]">
        <table className="min-w-full border-collapse rounded-t-2xl relative top-10 ">
          <thead>
            <tr className=" rounded-tr-2xl text-white text-[14px]">
              <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">متن سوال</th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">متن پاسخ</th>
              <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
               2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                3
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 3
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                4
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 4
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                5
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 5
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                6
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 6
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                7
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 7
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                8
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 8
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                9
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 9
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                10
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                سوال 10
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                متن
              </td>
              <td className="border border-gray-300 px-2 w-28 py-2 ">
                <span className=" flex justify-around">
                  <Image src={edit1} alt="edit icon" width={24} height={24} />
                  <Image src={delet1} alt="delet icon" width={24} height={24} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablequestion;

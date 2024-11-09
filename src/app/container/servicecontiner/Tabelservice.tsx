import React from "react";
import Image from "next/image";
import justity from "@/svg/Document Justify  Right 1.svg"
import close from "@/svg/Close.svg"
function Tabelservice() {
  return (
    <div>
      <table className="min-w-full border-collapse rounded-t-2xl">
        <thead>
          <tr className=" rounded-tr-2xl text-white">
            <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">نام و نام خانوادگی</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">نام خدمت</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">الگوی مراجعه</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">زمان انجام خدمت</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]"> هزینه هر جلسه</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">تعداد کل جلسات</th>
            <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 1-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 1-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 1-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 1-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 1-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 1-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 1-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 h-12 flex justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-2
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2- 7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 flex h-12 justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 h-[48px]">
              ردیف 2-1
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-3</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-7</td>
            <td className="border border-gray-300 px-4 py-2 h-12 flex justify-between ">
              <Image src={justity} alt="justify icon" width={24} height={24} />
              <Image src={close} alt="close icon" width={24} height={24} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabelservice;

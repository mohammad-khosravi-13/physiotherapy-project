import React from "react";
import Image from "next/image";
import delet1 from "@/svg/Delete 2.svg";
import edit1 from "@/svg/Edit 1.svg";
import image1 from "@/svg/image- 48.svg";
import polygon from "@/svg/Polygon 10.svg"
function Tablevideo() {
  return (
    <div>
      <div className=" float-end">
        <button className="w-[177px] text-white h-[36px] rounded-[8px] bg-[#269200] ">
          افزودن ویدئو جدید
        </button>
      </div>
      <div className=" h-[77%]">
        <table className="min-w-full border-collapse rounded-t-2xl relative top-10 ">
          <thead>
            <tr className=" rounded-tr-2xl text-white text-[14px]">
              <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">عنوان فیلم</th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">کاور </th>
              <th className=" px-4 py-2 bg-[#4A4A4A]">فیلم</th>
              <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                عنوان 1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span className=" flex justify-center items-center">
                <Image src={image1} alt="image baner" width={36} height={36} />
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className=" flex justify-center items-center">
                  <Image
                    src={polygon}
                    alt="polygon image"
                    width={33}
                    height={33}
                  />
                </span>
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
                عنوان 2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span className=" flex justify-center items-center">
                <Image src={image1} alt="image baner" width={36} height={36} />
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className=" flex justify-center items-center">
                  <Image
                    src={polygon}
                    alt="polygon image"
                    width={33}
                    height={33}
                  />
                </span>
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
                عنوان 3
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span className=" flex justify-center items-center">
                <Image src={image1} alt="image baner" width={36} height={36} />
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className=" flex justify-center items-center">
                  <Image
                    src={polygon}
                    alt="polygon image"
                    width={33}
                    height={33}
                  />
                </span>
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
                عنوان 4
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span className=" flex justify-center items-center">
                <Image src={image1} alt="image baner" width={36} height={36} />
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className=" flex justify-center items-center">
                  <Image
                    src={polygon}
                    alt="polygon image"
                    width={33}
                    height={33}
                  />
                </span>
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
                عنوان 5
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span className=" flex justify-center items-center">
                <Image src={image1} alt="image baner" width={36} height={36} />
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className=" flex justify-center items-center">
                  <Image
                    src={polygon}
                    alt="polygon image"
                    width={33}
                    height={33}
                  />
                </span>
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
                عنوان 6
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <span className=" flex justify-center items-center">
                <Image src={image1} alt="image baner" width={36} height={36} />
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className=" flex justify-center items-center">
                  <Image
                    src={polygon}
                    alt="polygon image"
                    width={33}
                    height={33}
                  />
                </span>
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

export default Tablevideo;

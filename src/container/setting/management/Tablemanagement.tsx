import React from "react";
import Filtercontiner from "../../todaypanel/Filtercontiner";
import Image from "next/image";
import edit1 from "@/svg/Edit 1.svg";
import delet1 from "@/svg/Delete 2.svg";
function Tablemanagement() {
  return (
    <div>
      <div>
        <Filtercontiner />
      </div>
      <div className=" flex justify-between items-center mt-4 ">
        <div>
          <h1 className=" opacity-60">تاریخ</h1>
        </div>
        <div>
          <button className="bg-[#269200] rounded-[8px] text-white w-[118px] h-[36px]">
            افزودن
          </button>
        </div>
      </div>
      <div>
        <div className=" h-[77%]">
          <table className="min-w-full border-collapse rounded-t-2xl relative top-10 ">
            <thead>
              <tr className=" rounded-tr-2xl text-white text-[14px]">
                <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
                <th className=" px-4 py-2 bg-[#4A4A4A]">تاریخ اعمال </th>
                <th className=" px-4 py-2 bg-[#4A4A4A]">مبلغ ویزیت </th>
                <th className=" px-4 py-2 bg-[#4A4A4A]">مدت زمان ویزیت</th>
                <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  2
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  3
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  4
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  5
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  6
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  7
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  8
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  9
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border text-center border-gray-300 px-4 py-2 w-10 h-[48px]">
                  10
                </td>
                <td className="border border-gray-300 px-4 py-2"> </td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-2 w-28 py-2 ">
                  <span className=" flex justify-around">
                    <Image src={edit1} alt="edit icon" width={24} height={24} />
                    <Image
                      src={delet1}
                      alt="delet icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" float-end mt-16 text-white ">
        <div>
          <button className="w-[136px] h-[36px] bg-[#0974A2] rounded-[8px]">
            خروجی اکسل
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tablemanagement;

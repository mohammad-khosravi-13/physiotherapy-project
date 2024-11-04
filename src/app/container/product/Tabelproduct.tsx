import React from "react";
import Image from "next/image";
import delet from "../../svg/Delete 2.svg";
import edit from "../../svg/Edit 1.svg";
import rectangel from "../../images/Rectangle 2683.png";
function Tabelproduct() {
  return (
    <div>
      <table className="min-w-full border-collapse rounded-t-2xl relative top-10 ">
        <thead>
          <tr className=" rounded-tr-2xl">
            <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">تصویر محصول</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">نام محصول</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">قیمت </th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">موجودی</th>
            <th className=" px-4 py-2 rounded-tl-xl bg-[#4A4A4A]">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-2</td>
            <td className="border border-gray-300 px-4 py-2">
              <span className=" flex justify-center">
                <Image
                  src={rectangel}
                  alt="rectangel images"
                  width={34}
                  height={34}
                />
              </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            <td className="border border-gray-300 px-4 py-4 ">
              <span className=" flex justify-around">
                <Image src={edit} alt="edit icon" width={24} height={24} />
                <Image src={delet} alt="delet icon" width={24} height={24} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" relative top-14  flex justify-between  ">
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

export default Tabelproduct;

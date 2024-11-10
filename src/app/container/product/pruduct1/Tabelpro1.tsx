import React from 'react'

function Tabelpro1() {
  return (
    <div className=" h-[77%]">
      <table className="min-w-full border-collapse rounded-t-2xl relative top-10 ">
        <thead>
          <tr className=" rounded-tr-2xl">
            <th className=" px-4 py-2 rounded-tr-lg bg-[#4A4A4A]">ردیف</th>
            <th className=" px-4 py-2 bg-[#4A4A4A]">روش ارسال</th>
            <th className=" px-4 py-2 rounded-tl-lg bg-[#4A4A4A]">استان ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
            <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
          </tr>
            <tr>
                <td className="border border-gray-300 px-4 py-2">ردیف 2-4</td>
                <td className="border border-gray-300 px-4 py-2">ردیف 2-5</td>
                <td className="border border-gray-300 px-4 py-2">ردیف 2-6</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabelpro1
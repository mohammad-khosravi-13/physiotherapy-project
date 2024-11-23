import React from 'react'

export default function InformationForm() {
  return (

    <>
    
    <div>
            <h3 className="text-[20px]">آیا به پوکی استخوان دچارید؟ </h3>
            <div className="flex justify-start gap-7  mt-3 ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <h3>بله</h3>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <h3>خیر</h3>
              </div>
            </div>
            <h3 className="mt-7 text-[20px]">
              آیا سابقه سکته مغزی داشته‌اید؟{" "}
            </h3>
            <div className="flex justify-start gap-7  mt-3 ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <h3>بله</h3>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <h3>خیر</h3>
              </div>
            </div>
            <h3 className="mt-7 text-[20px]">آیا به ام اس دچارید؟ </h3>
            <div className="flex justify-start gap-7  mt-3 ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <h3>بله</h3>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <h3>خیر</h3>
              </div>
            </div>
            <h3 className="mt-5 text-[18px]">سوابق بیماری</h3>
          </div>
          <div className="flex justify-start">
            <input
              className="w-[548px] h-[203px] p-4 mt-5 shadow-md rounded-[8px]"
              type="text"
              placeholder="بنویسید"
            />
          </div>
    </>
  )
}

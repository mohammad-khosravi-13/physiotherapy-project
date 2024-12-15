"use client";

import React from "react";

export default function Checkbox() {
  return (
    <>
      <div>
        <div className="flex  mt-20 ">
          <h3>امکان یادآوری از طریق</h3>
        </div>

        <div className="flex flex-col mt-10 gap-5">
          <div className="flex justify-between">
            <h1 className="text-[16px]">پیامک</h1>
            <div className="toggle-switch">
              <input type="checkbox" id="switch1" />
              <label htmlFor="switch1"> </label>
            </div>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[16px]">ایمیل</h1>
            <div className="toggle-switch">
              <input type="checkbox" id="switch2" />
              <label htmlFor="switch2"></label>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* استایل کلی سوئیچ */
        .toggle-switch {
          position: relative;
          width: 50px;
          height: 24px;
          display: inline-block;
        }

        /* مخفی کردن چک‌باکس */
        .toggle-switch input {
          display: none;
        }

        /* زمینه سوئیچ */
        .toggle-switch label {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #f0f0f0;
          border-radius: 24px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        /* دایره داخلی */
        .toggle-switch label::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          background: #ff4d4d; /* رنگ اولیه قرمز */
          border-radius: 50%;
          top: 2px;
          left: 2px;
          transition: all 0.3s ease;
        }

        /* زمانی که چک‌باکس فعال است */
        .toggle-switch input:checked + label {
          background: #ddd; /* رنگ پس‌زمینه زمانی که فعال است */
        }

        .toggle-switch input:checked + label::after {
          transform: translateX(26px);
          background: #4caf50; /* رنگ دایره سبز */
        }
      `}</style>
    </>
  );
}

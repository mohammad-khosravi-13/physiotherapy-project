"use client";

import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Image from "next/image";
import close from "@/svg/Close.svg";

const toPersianNumbers = (str) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (d) => persianNumbers[parseInt(d)]);
};

const getDayStyle = (date) => {
  const day = date.toDate().getDay();
  if (day === 6) {
    return {
      className: "bg-red-500 text-white font-bold",
    };
  }
  return {};
};

const Calendarwork = () => {
  const [value, setValue] = useState(new Date());
  const [selectDate, setSelectDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [dayTexts, setDayTexts] = useState({});
  const [inputText, setInputText] = useState("");

  const customLocale = {
    ...persian_fa,
    days: [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنجشنبه",
      "جمعه",
    ],
    months: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  };

  const clickDate = (date) => {
    setSelectDate(date);
    setInputText(dayTexts[date.format("YYYY-MM-DD")] || "");
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSaveText = () => {
    if (selectDate) {
      const formattedDate = selectDate.format("YYYY-MM-DD");
      setDayTexts((prev) => ({
        ...prev,
        [formattedDate]: inputText,
      }));
      closeModal();
    }
  };

  const handleDeleteText = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const newDayTexts = { ...dayTexts };
    delete newDayTexts[formattedDate];
    setDayTexts(newDayTexts);
  };

  const addTextToDays = (day) => {
    const formattedDate = day.format("YYYY-MM-DD");
    return (
      <div className="text-center w-20 ml-10 ">
        <span>{toPersianNumbers(day.day.toString())}</span>
        {dayTexts[formattedDate] && (
          <div className=" w-20 flex justify-end gap-9">
            <button onClick={() => handleDeleteText(day)} className="mt-16">
              <Image src={close} alt=" close icon" width={24} height={24} />
            </button>
            <p className="text-[16px] text-black mt-16">
              {toPersianNumbers(dayTexts[formattedDate])}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div>
        <Calendar
          value={value}
          onChange={(date) => {
            setValue(date);
            clickDate(date);
          }}
          shadow={false}
          calendar={persian}
          locale={customLocale}
          calendarPosition="bottom-right"
          dayStyle={getDayStyle}
          mapDays={({ date }) => ({
            children: addTextToDays(date),
            onClick: () => clickDate(date),
          })}
        />
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 w-full max-w-[430px] flex flex-col h-auto rounded-[8px] shadow-lg">
            <button
              onClick={closeModal}
              className="float-end w-6 relative right-full bottom-5"
            >
              <Image src={close} alt="close icon" width={24} height={24} />
            </button>
            <h2 className="text-[16px] text-center font-bold mb-4">
              اضافه کردن رویداد:
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-[16px]">
                <label htmlFor="time" className="whitespace-nowrap">
                  ساعت
                </label>
                <input
                  type="text"
                  id="time"
                  className="drop-shadow-md border-2 w-full sm:w-auto flex-1 rounded-[8px] h-[36px] px-2"
                  value={toPersianNumbers(
                    selectDate?.format("YYYY/MM/DD") || ""
                  )}
                  disabled
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-[16px]">
                <label htmlFor="event" className="whitespace-nowrap">
                  رویداد
                </label>
                <input
                  type="text"
                  id="event"
                  className="drop-shadow-md border-2 w-full sm:w-auto flex-1 rounded-[8px] h-[36px] px-2"
                  value={inputText}
                  onChange={handleTextChange}
                  placeholder="متن رویداد را وارد کنید"
                />
              </div>

              <button
                onClick={handleSaveText}
                className="btn w-full sm:w-[139px] h-[34px] rounded-[8px] text-white bg-[#269200] mx-auto mt-2"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendarwork;

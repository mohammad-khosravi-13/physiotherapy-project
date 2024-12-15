"use client";
import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./Calender.css";

const getDayStyle = (date) => {
  const day = date.toDate().getDay();
  if (day === 6) {
    return { backgroundColor: "red", color: "white", fontWeight: "bold" };
  }
  return {};
};

function Calenderrivers() {
  const [value, setValue] = useState(new Date());

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
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  };

  return (
    <div>
      <div>
        <Calendar
          value={value}
          onChange={setValue}
          shadow={false}
          calendar={persian}
          locale={customLocale}
          calendarPosition="bottom-right"
          multiple={true}
          dayStyle={getDayStyle}
        />
      </div>
    </div>
  );
}

export default Calenderrivers;

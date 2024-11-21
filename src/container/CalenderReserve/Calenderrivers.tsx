"use client";
import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import "./Calender.css";

function Calenderrivers() {
  const [value, setValue] = useState<DateObject>(new DateObject());
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
    ], // روزها
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
    ], // ماه‌ها
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

const getDayStyle = (date: DateObject) => {
  const day = date.toDate().getDay();
  if (day === 6) {
    return { backgroundColor: "red", color: "white", fontWeight: "bold" };
  }
  return {};
};

export default Calenderrivers;

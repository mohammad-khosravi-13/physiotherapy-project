"use client";
import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const getDayStyle = (date: any) => {
  const day = date.toDate().getDay();
  if (day === 6) {
    return { backgroundColor: "red", color: "white", fontWeight: "bold" };
  }
  return {};
};

const CustomCalendar: React.FC = () => {
  const [value, setValue] = useState<any[]>([]);

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

  return (
    <div>
      <Calendar
        value={value}
        onChange={(dates) => setValue(dates as any[])}
        shadow={false}
        calendar={persian}
        locale={customLocale}
        calendarPosition="bottom-right"
        multiple={true}
        dayStyle={getDayStyle}
      />
    </div>
  );
};

export default CustomCalendar;

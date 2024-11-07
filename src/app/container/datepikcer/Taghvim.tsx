// "use client";
// import React, { useState } from "react";
// import { Calendar } from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";

// function Taghvim() {
//   const [value, setValue] = useState(new Date());

//   // تعریف locale سفارشی
//   const customLocale = {
//     ...persian_fa, // شروع از متن‌های پیش‌فرض فارسی
//     days: [
//       "شنبه",
//       "یکشنبه",
//       "دوشنبه",
//       "سه‌شنبه",
//       "چهارشنبه",
//       "پنجشنبه",
//       "جمعه",
//     ], // روزها
//     months: [
//       "فروردین",
//       "اردیبهشت",
//       "خرداد",
//       "تیر",
//       "مرداد",
//       "شهریور",
//       "مهر",
//       "dfgd",
//       "آذر",
//       "دی",
//       "بهمن",
//       "اسفند",
//     ], // ماه‌ها
//   };
    

//   return (
//     <div>
//       <div>
//         <Calendar
//           value={value} // تاریخ انتخاب شده
//           onChange={setValue} // تابعی برای تغییر تاریخ
//           shadow={false} // تنظیم سایه
//           calendar={persian} // استفاده از تقویم هجری شمسی
//           locale={customLocale} // استفاده از locale سفارشی
//           calendarPosition="bottom-right" // موقعیت تقویم
//           multiple={true} // فعال کردن انتخاب چندتایی
//         />
//       </div>
//     </div>
//   );
// }

// export default Taghvim;

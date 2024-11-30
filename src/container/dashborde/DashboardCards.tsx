import React from "react";

function DashboardCards() {
  const iteme = [
    { text: "کاربر ثبت نام شده", color: "bg-[#1F8E1F] bg-opacity-30" },
    { text: "سفارشات محصول", color: "bg-[#FF7A00] bg-opacity-30" },
    { text: "رزرو خدمات کلینیک", color: "bg-[#4339F2] bg-opacity-30" },
    { text: "رزرو خدمات منزل", color: "bg-[#FF3A29] bg-opacity-30" },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-2 md:grid-cols-4 sm:w-full gap-7 text-center text-black">
        {iteme.map((item, index) => (
          <div
            key={index}
            className={`${item.color} w-[140px] h-[130px] md:w-[232px] md:h-[200px] rounded-md flex items-center justify-center`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCards;

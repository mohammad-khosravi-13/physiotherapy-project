"use client";
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Area,
} from "recharts";

function ReservationPanel() {
  const data = [
    { month: "فروردین", current: 70, previous: 50 },
    { month: "اردیبهشت", current: 80, previous: 60 },
    { month: "خرداد", current: 60, previous: 40 },
    { month: "تیر", current: 90, previous: 70 },
    { month: "مرداد", current: 100, previous: 80 },
    { month: "شهریور", current: 75, previous: 55 },
  ];

  return (
    <div className="p-4">
      <ResponsiveContainer width={400} height={250}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="30">
              <stop offset="5%" stopColor="#34B53A" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#34B53A" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="30">
              <stop offset="5%" stopColor="#4339F2" stopOpacity={2} />
              <stop offset="95%" stopColor="#4339F2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="current"
            stroke="#34B53A"
            fillOpacity={1}
            fill="url(#colorGreen)"
          />
          <Area
            type="monotone"
            dataKey="previous"
            stroke="#4339F2"
            fillOpacity={1}
            fill="url(#colorBlue)"
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#34B53A"
            strokeWidth={2}
            dot={{ r: 5, fill: "#34B53A" }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#4339F2"
            strokeWidth={2}
            dot={{ r: 5, fill: "#4339F2" }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 -mt-20 ">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#34B53A] rounded-full"></span>
          <span>این ماه</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#4339F2] rounded-full"></span>
          <span>ماه قبل</span>
        </div>
      </div>
    </div>
  );
}

export default ReservationPanel;

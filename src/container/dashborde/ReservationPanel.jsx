"use client";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ReservationPanel() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="p-4 h-44 md:ml-5  ">
      <ResponsiveContainer width="100%" height="100%" >
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0.1 0.1" />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#4339F2"
            fill="#4339F2"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#34B53A"
            fill="#34B53A"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-4">
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

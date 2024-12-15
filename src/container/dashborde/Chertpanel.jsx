"use client";
import React from "react";
import Productsuperior from "@/container/dashborde/Productsuperior";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ReservationPanel from "@/container/dashborde/ReservationPanel";

const items = [
  { color: "bg-green-500", text: "خدمات منزل" },
  { color: "bg-red-500", text: "خدمات کلینیک" },
  { color: "bg-blue-500", text: "محصولات" },
];
const data = [
  { month: "2", min: 700, max: 400, max2: 0 },
  { month: "4", min: 800, max: 500, max2: 120 },
  { month: "6", min: 600, max: 300, max2: 100 },
  { month: "8", min: 750, max: 390, max2: 210 },
  { month: "10", min: 550, max: 358, max2: 50 },
  { month: "12", min: 800, max: 450, max2: 100 },
  { month: "14", min: 500, max: 440, max2: 80 },
  { month: "16", min: 560, max: 350, max2: 50 },
  { month: "18", min: 600, max: 500, max2: 60 },
  { month: "20", min: 610, max: 360, max2: 130 },
  { month: "22", min: 800, max: 600, max2: 50 },
  { month: "24", min: 550, max: 400, max2: 70 },
  { month: "26", min: 700, max: 400, max2: 200 },
  { month: "28", min: 450, max: 450, max2: 100 },
  { month: "30", min: 600, max: 300, max2: 50 },
];

const TemperatureChart = () => {
  return (
    <>
      <div className="flex gap-5 lg:w-full w-[350px]  ">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`${item.color} w-5 h-5 rounded-full`}></div>
            <span className="text-black">{item.text}</span>
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center mt-5">
        <div className=" w-full flex h-[200px] sm:h-[400px] lg:h-[350px]  sm:float-start">
          <ResponsiveContainer width="100%" height="100%" >
            <LineChart
              data={data}
              margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
            >
              <CartesianGrid stroke="#ccc" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis orientation="right" dx={50}/>
              <Tooltip />
              <Line
                dot={false}
                type="linear"
                dataKey="min"
                stroke="red"
                name="Min Temp"
                strokeWidth={4}
              />
              <Line
                type="linear"
                dataKey="max"
                stroke="#34B53A"
                name="Max Temp (Green)"
                strokeWidth={4}
                dot={false}
              />
              <Line
                type="linear"
                dataKey="max2"
                stroke="#4339F2"
                name="Max Temp (Orange)"
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-14 font-bold text-[16px]">
        <div className="w-full lg:w-[50%]">
          <p>رزرو ها</p>
          <ReservationPanel />
        </div>
        <div className="w-full lg:w-[50%] mt-12 lg:mt-0">
          <p className="mr-3">محصولات برتر</p>
          <Productsuperior />
        </div>
      </div>
    </>
  );
};

export default TemperatureChart;

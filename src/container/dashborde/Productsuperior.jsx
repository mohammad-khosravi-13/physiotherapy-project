"use client";
import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
];

function Productsuperior() {
  return (
    <ResponsiveContainer className=" p-2 mt-16" width="100%" height={100}>
      <BarChart
        width={10}
        data={data}
        layout="vertical"
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={15}
      >
        <XAxis type="number" reversed={true} hide />
        <Bar
          dataKey="pv"
          fill="blue"
          strokeWidth={100}
          background={{ fill: "#DAD7FE", borderRadius: 100 }}
          label={({ x, y, value, index }) => {
            let customLabel = "";
            if (index === 0) {
              customLabel = "فوم رولر";
            } else if (index === 1) {
              customLabel = "توپ ژله‌ای";
            } else if (index === 2) {
              customLabel = "ویت کاف";
            }

            return (
              <text x={x + 69} y={y + 10} fill="#000" fontSize="16">
                {customLabel}
              </text>
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Productsuperior;

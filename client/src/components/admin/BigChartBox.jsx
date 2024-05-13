import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    accessories: 4000,
    clothes: 2400,
    shoes: 2400,
  },
  {
    name: "Mon",
    accessories: 3000,
    clothes: 1398,
    shoes: 2210,
  },
  {
    name: "Tue",
    accessories: 2000,
    clothes: 9800,
    shoes: 2290,
  },
  {
    name: "Wed",
    accessories: 2780,
    clothes: 3908,
    shoes: 2000,
  },
  {
    name: "Thu",
    accessories: 1890,
    clothes: 4800,
    shoes: 2181,
  },
  {
    name: "Fri",
    accessories: 2390,
    clothes: 3800,
    shoes: 2500,
  },
  {
    name: "Sat",
    accessories: 3490,
    clothes: 4300,
    shoes: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox w-full h-full flex flex-col justify-between">
      <h2 className="title">Revenue Analytiscs</h2>
      <div className="chart w-full h-full">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
            contentStyle={{background:"#3E4E59"}}
            />
            <Area
              type="monotone"
              dataKey="accessories"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="shoes"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const props = [
  { name: "Accessories", value: 400, color: "#0088FE", },
  { name: "Bag", value: 300, color: "#00C49F", },
  { name: "Jacket", value: 300, color: "#FFBB28", },
  { name: "Shoes", value: 200, color: "#FF8042", },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox h-full flex flex-col justify-between">
      <h2>Leads by source</h2>
      <div className="chart flex items-center justify-center h-full w-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={props}
              innerRadius={100}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {props.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options flex justify-between gap-3 text-sm">
        {props.map((item) => (
          <div className="option flex flex-col gap-3 items-center" key={item.name}>
            <div className="title flex gap-3 items-center">
              <div className="dot w-3 h-3 rounded-full" style={{ background: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;

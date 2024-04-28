import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = (props) => {
  return (
    <div className="barChartBox w-full h-full">
      <h2 className="text-xl mb-5">{props.title}</h2>
      <div className="chart h-full">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
            contentStyle={{background:"#2a3447", borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;

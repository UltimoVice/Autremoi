import React from "react";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

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

const ChartBox = (props) => {
  return (
    <div className="chartBox flex w-full">
      <div className="boxInfo flex flex-col justify-between basis-2/3">
        <div className="title flex items-center gap-3">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h2 className="font-bold text-2xl">{props.number}</h2>
        <Link to={"/"} className="text-violet-500">View all</Link>
      </div>
      <div className="chartInfo basis-2/3 flex flex-col justify-between">
        <div className="chart min-w-[100px] min-h-[100px]">
          <ResponsiveContainer width="99%" height="100%" className="">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts flex-col flex text-right">
          <span
            className="percentage font-bold text-xl"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration text-sm">last 30 days</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;

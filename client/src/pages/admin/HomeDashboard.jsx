import React from "react";
import TopBox from "../../components/admin/TopBox";
import ChartBox from "../../components/admin/ChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/dataAdminDashboard";
import BarChartBox from "../../components/admin/BarChartBox";
import PieChartBox from "../../components/admin/PieChartBox";
import BigChartBox from "../../components/admin/BigChartBox";

const HomeDashboard = () => {
  return (
    <div className="home grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)]">
      <div className="box1 p-5 rounded-xl border-solid border-[1px] border-slate-800 col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="box2 p-5 rounded-xl border-solid border-[1px] border-slate-800">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box3 p-5 rounded-xl border-solid border-[1px] border-slate-800">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box4 p-5 rounded-xl border-solid border-[1px] border-slate-800 col-span-1 row-span-3"><PieChartBox /></div>
      <div className="box5 p-5 rounded-xl border-solid border-[1px] border-slate-800">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box6 p-5 rounded-xl border-solid border-[1px] border-slate-800">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box7 p-5 rounded-xl border-solid border-[1px] border-slate-800 col-span-2 row-span-2"><BigChartBox/></div>
      <div className="box8 p-5 rounded-xl border-solid border-[1px] border-slate-800"><BarChartBox {...barChartBoxVisit}/> </div>
      <div className="box9 p-5 rounded-xl border-solid border-[1px] border-slate-800"><BarChartBox {...barChartBoxRevenue}/> </div>
    </div>
  );
};

export default HomeDashboard;

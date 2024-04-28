import React from "react";
import { Link } from "react-router-dom";
import { menu } from "/Autremoi/src/data/dataAdminDashboard.js";

const MenuAdmin = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item flex flex-col gap-3 mb-5" key={item.id}>
          <span className="title text-xs font-extralight text-slate-100 uppercase">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link
            to={"/"}
            className="listItem flex items-center gap-3 p-3 hover:bg-slate-800" key={listItem.id}
          >
            <img src={listItem.icon} alt="" />
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default MenuAdmin;

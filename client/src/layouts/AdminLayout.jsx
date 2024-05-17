import React from "react";
import { Outlet } from "react-router-dom";

import MenuAdmin from "../components/admin/MenuAdmin";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import FooterAdmin from "../components/admin/FooterAdmin";

const AdminLayout = () => {
  return (
    <div className="m-0 p-0 box-border bg-slate-900 text-slate-100 w-full">
      <NavbarAdmin />
      <div className="cont w-full flex">
        <div className="w-[250px] py-1 px-5 border-r-slate-500 border-solid border-r-2">
          <MenuAdmin />
        </div>
        <div className="py-1 px-5 w-full">
          <Outlet />
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
};

export default AdminLayout;

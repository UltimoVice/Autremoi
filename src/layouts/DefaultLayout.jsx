import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/shared/Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;

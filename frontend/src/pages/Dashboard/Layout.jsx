import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Layout;

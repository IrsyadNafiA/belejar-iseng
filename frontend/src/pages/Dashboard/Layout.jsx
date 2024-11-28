import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="flex w-full">
        <Sidebar />
        <div className="content w-full p-4">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

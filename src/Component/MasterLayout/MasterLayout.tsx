// import React from 'react'

import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default function MasterLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_6fr] h-screen">
      {/* Sidebar */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Outlet */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

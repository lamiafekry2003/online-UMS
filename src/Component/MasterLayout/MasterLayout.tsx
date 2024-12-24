

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
// grid grid-cols-[.1fr_6fr]

export default function MasterLayout() {
  return (
    <div className=" grid grid-cols-[.1fr_6fr] h-full">
      {/* Sidebar */}
      <div className="">
       <SideBar/>
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

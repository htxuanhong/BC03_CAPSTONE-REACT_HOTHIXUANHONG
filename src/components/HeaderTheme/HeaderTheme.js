import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderTheme() {
  return (
    <div className="h-20 w-full flex items-center justify-between shadow-lg px-20">
      <NavLink to="/">
        <span className="text-red-500 text-3xl font-medium">Logo</span>
      </NavLink>

      <div className="space-x-5 text-lg font-medium text-gray-600 ">
        <span className="hover:text-orange-600 hover:ease-in duration-150">
          Lịch chiếu
        </span>
        <span className="hover:text-orange-600 hover:ease-in duration-150">
          Cụm rạp
        </span>
        <span className="hover:text-orange-600 hover:ease-in duration-150">
          Tin tức
        </span>
      </div>

      <UserNav />
    </div>
  );
}

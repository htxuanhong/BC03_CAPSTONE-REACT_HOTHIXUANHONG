import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderTheme() {
  return (
    <div className="h-16 w-full flex items-center justify-between shadow-lg px-20 bg-slate-100">
      <NavLink to="/">
        <img
          src="https://mpng.subpng.com/20180615/oli/kisspng-cinema-film-director-television-film-digital-millennium-copyright-act-5b23cf472887a5.197278891529073479166.jpg"
          alt=""
          className="h-16 w-16 rounded-full"
        />
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
        <span className="hover:text-orange-600 hover:ease-in duration-150">
          Ứng dụng
        </span>
      </div>

      <UserNav />
    </div>
  );
}

import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function MovieTabItem({ movie }) {
  let isLogin = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  return (
    <div
      className="grid grid-cols-4 justify-items-stretch mt-2 ml-8"
      style={{ maxWidth: "80%" }}
    >
      <NavLink className="col-span-1 w-24 mb-4" to={`/detail/${movie.maPhim}`}>
        <img src={movie.hinhAnh} alt="" />
      </NavLink>
      <div className="col-span-3 mx-auto">
        <NavLink
          to={`/detail/${movie.maPhim}`}
          style={{ fontSize: "18px", fontWeight: 600 }}
          className="text-slate-500 text-xl hover:text-slate-800 font-bold transition duration-300 text-left"
        >
          {movie.tenPhim.toUpperCase()}
        </NavLink>
        <div className="grid-cols-2 grid gap-2 mt-3">
          {movie.lstLichChieuTheoPhim.map((time, index) => {
            if (index < 4) {
              return (
                <NavLink
                  className="border border-x-slate-200 bg-gray-100 p-2 rounded cursor-pointer ml-4  hover:font-bold hover:text-sm "
                  key={index}
                  to={
                    isLogin == null ? `/login` : `/purchase/${time.maLichChieu}`
                  }
                >
                  <span className="text-greenlight">
                    {moment(time.ngayChieuGioChieu).format("DD/MM/YYYY ")}
                  </span>
                  ~{" "}
                  <span className="text-redLight">
                    {moment(time.ngayChieuGioChieu).format("HH:MM")}
                  </span>
                </NavLink>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

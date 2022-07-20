import moment from "moment";
import React from "react";

export default function MovieTabItem({ movie }) {
  return (
    <div className="flex p-5 border-b space-x-5" style={{ maxWidth: "80%" }}>
      <img src={movie.hinhAnh} alt="" className="w-20" />
      <div>
        <p style={{ fontSize: "18px", fontWeight: 600 }}>{movie.tenPhim}</p>

        <div className="flex flex-wrap">
          {movie.lstLichChieuTheoPhim.map((time, index) => {
            if (index < 4) {
              return (
                <a
                  className="border border-x-slate-200 bg-gray-100 p-2 rounded cursor-pointer  hover:font-bold hover:text-sm "
                  style={{ margin: "0px 16px 16px 0" }}
                  key={index}
                  href={`/purchase/${time.maLichChieu}`}
                >
                  <span className="text-greenlight">
                    {moment(time.ngayChieuGioChieu).format("DD/MM/YYYY ")}
                  </span>
                  ~{" "}
                  <span className="text-redLight">
                    {moment(time.ngayChieuGioChieu).format("HH:MM")}
                  </span>
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

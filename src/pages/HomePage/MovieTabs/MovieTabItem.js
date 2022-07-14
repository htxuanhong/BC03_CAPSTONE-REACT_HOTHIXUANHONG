import React from "react";

export default function MovieTabItem({ movie }) {
  console.log("movie", movie);
  return (
    <div className="flex p-5 border-b border-red space-x-5">
      <img src={movie.hinhAnh} alt="" className="w-20" />
      <div>
        <p>{movie.tenPhim}</p>
      </div>
    </div>
  );
}

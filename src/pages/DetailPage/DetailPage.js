import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((res) => {
        console.log(res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" w-4/5 mx-auto py-10 space-y-10">
      <div className="flex items-center space-x-20 ">
        <img src={movie.hinhAnh} className="w-96 rounded " alt="" />
        <Progress
          type="circle"
          percent={movie.danhGia * 10}
          width={400}
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          strokeWidth={10}
          format={(number) => {
            return <span className=" text-blue-400">{number / 10} điểm</span>;
          }}
        />
      </div>
      <p> {movie.tenPhim}</p>
      <p>{movie.moTa}</p>
    </div>
  );
}

// boileplate

import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  let handlePurchase = () => {
    window.location.href = "/pick-group/:id";
  };
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
    <div className=" w-4/6 mx-auto py-10 space-y-10">
      <div className="flex items-center space-x-20 ">
        <div>
          <img
            src={movie.hinhAnh}
            className="w-96  rounded "
            style={{ height: "430px" }}
            alt=""
          />
          <button
            onClick={handlePurchase}
            className="bg-red-600 py-1.5 px-1 rounded text-white text-md "
            style={{ marginTop: "15px", marginLeft: "35%" }}
          >
            <span className=" border border-pink-300 rounded py-1 px-4 font-bold">
              {" "}
              MUA VÉ
            </span>
          </button>
        </div>
        <div>
          <Progress
            type="circle"
            percent={movie.danhGia * 10}
            width={250}
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
      </div>
      <p> {movie.tenPhim}</p>
      <p>{movie.moTa}</p>
    </div>
  );
}

// boileplate

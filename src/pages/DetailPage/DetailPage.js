import { Progress } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterLayout from "../../HOC/FooterLayout";
import { movieService } from "../../services/movieService";
import ModalPlayingTrailer from "../HomePage/MovieItem/PlayingVideo/ModalPlayingTrailer";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [visible, setVisible] = useState(false);
  const [trailer, setTrailer] = useState("");

  let handlePickGroup = () => {
    window.location.href = `/pick-group/${movie.maPhim}`;
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
  }, [id]);

  return (
    <div
      className="w-screen"
      style={{
        backgroundImage: `url(
          "https://2phimmoi.net/wp-content/themes/halimmovies/media/img/body_bg.gif"
        )`,
      }}
    >
      <div className="py-8 container  mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="py-10  bg-blackDark rounded-md ">
          <div className="flex items-center justify-between space-x-20 mx-20 ">
            <div>
              <div
                className="lg:w-80 md:w-64 w-48  lg:h-430 md:h-80 h-72 rounded basis-1/3 "
                style={{
                  backgroundImage: `url(${movie.hinhAnh})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="flex mt-4 justify-center ">
                <button
                  onClick={() => {
                    setVisible(true);
                    setTrailer(movie.trailer);
                  }}
                  className="bg-red-600 py-1.5 px-1 rounded text-white text-md mr-2 "
                >
                  <span className=" border border-pink-300 rounded py-1 px-4 font-bold">
                    {" "}
                    XEM TRAILER
                  </span>
                </button>
                <button
                  onClick={handlePickGroup}
                  className="bg-red-600 py-1.5 px-1 rounded text-white text-md ml-2"
                >
                  <span className=" border border-pink-300 rounded py-1 px-4 font-bold">
                    {" "}
                    MUA VÉ
                  </span>
                </button>
              </div>
            </div>
            <div className="basis-2/3">
              <div className=" text-white text-left ">
                <p
                  className="text-2xl text-yellow-100 "
                  style={{ textTransform: "uppercase" }}
                >
                  {movie.tenPhim}
                </p>
                <p className="mt-5">
                  Trạng thái:{" "}
                  <span className="text-bluexh " style={{ fontSize: "17px" }}>
                    {movie.dangChieu ? "đang chiếu" : "sắp chiếu"}
                  </span>
                </p>
                <p className="mt-2">
                  Ngày khởi chiếu: {""}{" "}
                  <span className="text-bluexh">
                    {moment(movie.ngayKhoiChieu).format("DD-MM-YYYY")}
                  </span>
                </p>
                <p className="mt-2">
                  Ảnh hưởng:{" "}
                  <span className="text-grayLight">
                    {movie.hot ? "phim đang Hot" : "chưa Hot"}
                  </span>
                </p>
                <p className="mt-2">
                  <span>Nội dung phim: {""}</span>
                  <span className="text-grayLight">{movie.moTa}</span>
                </p>
                <p className="mt-8">
                  {" "}
                  <span className="flex justify-center">
                    <Progress
                      type="circle"
                      percent={movie.danhGia * 10}
                      width={100}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                      strokeWidth={10}
                      format={(number) => {
                        return (
                          <span className=" text-red-400">
                            {number / 10} điểm
                          </span>
                        );
                      }}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {visible && (
          <ModalPlayingTrailer
            visible={visible}
            setVisible={setVisible}
            movie={trailer}
          />
        )}
      </div>
      <FooterLayout />
    </div>
  );
}

// boileplate

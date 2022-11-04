import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalPlayingTrailer from "./PlayingVideo/ModalPlayingTrailer";
import "./PlayingVideo/play.css";

const MovieItem = ({ movie }) => {
  const [visible, setVisible] = useState(false);
  const [trailer, setTrailer] = useState("");

  console.log("movie: ", movie);
  return (
    <div>
      <div className="h-full hover:shadow-lg transition-all duration-300 ">
        <div
          className="lg:h-72 md:h-60 sm:h-44 h-36 w-full flex justify-center items-center "
          style={{
            backgroundImage: `url(${movie.hinhAnh})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="relative h-full w-full opacity-0 hover:opacity-100  bg-blackDark">
            <div
              className="absolute icon-play cursor-pointer top-1/2 left-1/2"
              style={{ transform: "translate(-50%,-50%)" }}
              onClick={() => {
                setVisible(true);
                setTrailer(movie.trailer);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-play" />
            </div>
            <div className="absolute w-full bottom-2 ">
              <div className="text-white font-bold text-lg">
                <p>{movie.tenPhim.toUpperCase()}</p>
              </div>
              <div className="flex justify-center">
                <NavLink
                  to={`detail/${movie.maPhim}`}
                  className="bg-red-600  py-2 px-1 rounded text-white hover:text-white hover:bg-red-500 mt-3 text-xs inline-block mr-2"
                >
                  <span className=" border border-pink-300 rounded py-1 px-2 font-bold">
                    XEM CHI TIẾT
                  </span>
                </NavLink>
                <NavLink
                  to={`pick-group/${movie.maPhim}`}
                  className="bg-red-600 py-2 px-1 rounded text-white hover:text-white hover:bg-red-500 mt-3 text-xs inline-block "
                >
                  <span className=" border border-pink-300 rounded py-1 px-2 font-bold">
                    {" "}
                    MUA VÉ
                  </span>
                </NavLink>
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
    </div>
  );
};

export default MovieItem;

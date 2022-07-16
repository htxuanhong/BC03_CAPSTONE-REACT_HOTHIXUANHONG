import { Card } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
// {
// "maPhim": 9129,
// "tenPhim": "hehehe",
// "biDanh": "hehehe",
// "trailer": "hehehe",
// "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hehehe_gp01.jpg",
// "moTa": "hehehe",
// "maNhom": "GP01",
// "ngayKhoiChieu": "2022-06-07T00:00:00",
// "danhGia": 1,
// "hot": true,
// "dangChieu": true,
// "sapChieu": true
// }
const MovieItem = ({ movie }) => {
  console.log("movie: ", movie);
  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={
        <img
          alt="example"
          src={movie.hinhAnh}
          style={{ height: "320px" }}
          className="  overflow-hidden"
        />
      }
    >
      <Meta
        title={movie.tenPhim}
        description={
          <span className="text-lg font-medium text-blue-200">
            {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
          </span>
        }
      />
      <div className="flex">
        <NavLink
          to={`detail/${movie.maPhim}`}
          className="bg-red-600 py-2 px-1 rounded text-white hover:text-white mt-3 text-xs inline-block mr-2"
        >
          <span className=" border border-pink-300 rounded py-1 px-2 font-bold">
            XEM CHI TIẾT
          </span>
        </NavLink>
        <NavLink
          to={`pick-group/${movie.maPhim}`}
          className="bg-red-600 py-2 px-1 rounded text-white hover:text-white mt-3 text-xs inline-block "
        >
          <span className=" border border-pink-300 rounded py-1 px-2 font-bold">
            {" "}
            MUA VÉ
          </span>
        </NavLink>
      </div>
    </Card>
  );
};

export default MovieItem;

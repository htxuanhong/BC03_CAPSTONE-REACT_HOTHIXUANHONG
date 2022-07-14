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
      <NavLink
        to={`detail/${movie.maPhim}`}
        className="bg-red-400 px-5 py-2 rounded text-white hover:text-white mt-5 inline-block"
      >
        Xem chi tiết
      </NavLink>
    </Card>
  );
};

export default MovieItem;

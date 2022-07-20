import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { movieService } from "../../services/movieService";
import "./PurchasePage.css";
export default function PurchasePage() {
  let { id } = useParams();
  const [dataRow, setDataRow] = useState({});

  // console.log("dataRow", dataRow);
  useEffect(() => {
    movieService
      .getPurchaseTicker(id)
      .then((res) => {
        console.log(res);
        setDataRow(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  let className = "ghe";

  data?.danhSachGhe?.map((ds) => {
    if (ds.loaiGhe === "vip") {
      className += "vip";
    }
    if (ds.daDat) {
      className += "daDat";
    }
    return className;
  });

  return (
    <div className="flex flex-wrap ">
      <div className="seat-list-container basis-2/3 mx-auto pt-10  ">
        <div className="grid-row ">
          {dataRow?.danhSachGhe?.map((ds, index) => {
            return (
              <div className={className} key={index}>
                {ds.tenGhe}
              </div>
            );
          })}
        </div>
        <div className="flex mx-auto justify-center mt-10 seat-type">
          <div>
            <div className="daDat">X</div>
            <p>Đã đặt</p>
          </div>
          <div className="ml-8 mr-7">
            <div className="ghe "></div>
            <p>Thường</p>
          </div>
          <div>
            <div className="vip"></div>
            <p>Vip</p>
          </div>
        </div>
      </div>
      <div className="basis-1/3 my-8" style={{ boxShadow: "0 0 5px grey" }}>
        <div className=" ticker-infor">
          <div className="text-4xl text-greenlightxh text-center py-7">
            {""}VND
          </div>
          <hr />
          <div className="flex justify-between py-4 px-5">
            <h2>Cụm rạp:</h2>
            <p>{dataRow?.thongTinPhim?.tenCumRap}</p>
          </div>
          <hr />
          <div className="flex justify-between py-4 px-5">
            <h2>Địa chỉ</h2>
            <p>{dataRow?.thongTinPhim?.diaChi}</p>
          </div>
          <hr />
          <div className="flex justify-between py-4 px-5">
            <h2>Rạp</h2>
            <p>{dataRow?.thongTinPhim?.tenRap}</p>
          </div>
          <hr />
          <div className="flex  justify-between py-4 px-5">
            <h2>Ngày giờ chiếu:</h2>
            <p>
              {dataRow?.thongTinPhim?.ngayChieu} -{" "}
              {dataRow?.thongTinPhim?.gioChieu}
            </p>
          </div>
          <hr />
          <div className="flex  justify-between py-4 px-5">
            <h2>Tên phim:</h2>
            <p>{dataRow?.thongTinPhim?.tenPhim}</p>
          </div>
          <hr />
          <div className="flex justify-between py-4 px-5">
            <h2>Chọn</h2>
            <p>dfdfdf</p>
          </div>

          <div className="bg-red-500 hover:bg-red-800 py-5 text-white font-medium text-2xl text-center ">
            ĐẶT VÉ
          </div>
        </div>
      </div>
    </div>
  );
}

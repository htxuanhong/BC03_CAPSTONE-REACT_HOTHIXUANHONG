import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React, { useRef } from "react";

const MovieCarouselBanner = ({ chunkedBannerList }) => {
  const carouselRef = useRef();
  // console.log(carouselRef);

  const onChange = (currentSlide) => {
    console.log("bannerlist:", currentSlide);
  };

  const nextSlice = () => {
    carouselRef.current.next();
  };
  const prevSlice = () => {
    carouselRef.current.prev();
  };

  return (
    <div>
      <div
        onClick={prevSlice}
        className="text-slate-300 hover:text-slate-500 font-bold absolute z-10"
        style={{
          top: "345px",
          fontSize: "48px",
        }}
      >
        <LeftOutlined />
      </div>
      <div
        onClick={nextSlice}
        className="text-slate-300 hover:text-slate-500 font-bold absolute z-10"
        style={{
          top: "345px",
          right: 0,
          fontSize: "48px",
        }}
      >
        <RightOutlined />
      </div>
      <Carousel
        arrows
        ref={carouselRef}
        afterChange={onChange}
        autoplay
        dots={{
          className: "custom-dots",
        }}
      >
        {chunkedBannerList.map((movie) => {
          return (
            <div>
              {movie.map((item) => {
                return (
                  <img
                    alt=""
                    src={item.hinhAnh}
                    className="w-full"
                    style={{ height: "610px" }}
                  />
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieCarouselBanner;
// {
//   "statusCode": 200,
//   "message": "Xử lý thành công!",
//   "content": [
//     {
//       "maBanner": 1,
//       "maPhim": 1282,
//       "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
//     },
//     {
//       "maBanner": 2,
//       "maPhim": 1283,
//       "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
//     },
//     {
//       "maBanner": 3,
//       "maPhim": 1284,
//       "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png"
//     }
//   ],
//   "dateTime": "2022-07-14T16:04:16.3240484+07:00",
//   "messageConstants": null
// }

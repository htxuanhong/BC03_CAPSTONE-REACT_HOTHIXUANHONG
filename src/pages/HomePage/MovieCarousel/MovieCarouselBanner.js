import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
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
        className="text-slate-300 hover:text-slate-500 font-extrabold absolute z-10 flex items-center"
        style={{
          top: "47%",
          fontSize: "48px",
        }}
      >
        <DoubleLeftOutlined />
      </div>

      <div
        onClick={nextSlice}
        className="text-slate-300 hover:text-slate-500 font-extrabold absolute z-10"
        style={{
          top: "45%",
          right: 0,
          fontSize: "48px",
        }}
      >
        <DoubleRightOutlined />
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
                    className="w-full relative"
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

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
    <div className="relative">
      <div
        onClick={prevSlice}
        className="text-slate-300 left-0 lg:text-5xl md:text-4xl text-3xl  hover:text-slate-500 font-extrabold absolute z-10 flex top-1/2 "
        style={{ transform: "translateY(-50%)" }}
      >
        <DoubleLeftOutlined />
      </div>

      <div
        onClick={nextSlice}
        className="text-slate-300 lg:text-5xl md:text-4xl text-3xl right-0 hover:text-slate-500 font-extrabold flex top-1/2  absolute z-10"
        style={{ transform: "translateY(-50%)" }}
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
                    className="w-full relative lg:h-610 md:h-400 sm:h-80"
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

import _ from "lodash";
import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import "./homePage.css";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieCarouselBanner from "./MovieCarousel/MovieCarouselBanner";
import MovieTabs from "./MovieTabs/MovieTabs";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [bannerList, setBannerList] = useState([]);

  console.log("movieList: ", movieList);
  useEffect(() => {
    let fetchMoviesList = async () => {
      let result = await movieService.getMovieList();

      let chunkedList = _.chunk(result.data.content, 8);
      setMovieList(chunkedList);
    };

    fetchMoviesList();
  }, []);

  useEffect(() => {
    let fetchBannerList = async () => {
      let result = await movieService.getMovieListBanner();

      let chunkedBannerList = _.chunk(result.data.content, 1);

      console.log("result", result, "chunkedBannerList", chunkedBannerList);
      setBannerList(chunkedBannerList);
    };
    fetchBannerList();
  }, []);

  return (
    <div id="banner_homepage">
      <MovieCarouselBanner chunkedBannerList={bannerList} />
      <div className="px-72">
        <div id="carousel_homepage" className="container mx-auto  ">
          <MovieCarousel chunkedList={movieList} />
        </div>

        <MovieTabs />
      </div>
    </div>
  );
}

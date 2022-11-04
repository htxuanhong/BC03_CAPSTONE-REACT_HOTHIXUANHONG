import React from "react";
import { useWindowSize } from "../../../Hook/useWindowSize";
import MovieTabMobile from "./MovieTabMobile/MovieTabMobile";
import MovieTabs from "./MovieTabs";
import MovietabTablet from "./MovietabTablet/MovietabTablet";

export default function MovieTabResponsive() {
  let windowSize = useWindowSize();
  const renderTab = () => {
    if (windowSize.width > 1024) {
      return <MovieTabs />;
    } else if (windowSize.width > 640) {
      return <MovietabTablet />;
    } else {
      return <MovieTabMobile />;
    }
  };
  return <div>{renderTab()}</div>;
}

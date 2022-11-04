import { Carousel } from "antd";
import MovieItem from "../MovieItem/MovieItem";

const MovieCarousel = ({ chunkedList }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      afterChange={onChange}
      dots={{
        className: "custom-dots",
      }}
    >
      {chunkedList.map((movies, index) => {
        return (
          <div className="h-max w-full py-10 px-4 mx-auto">
            <div className="grid grid-cols-4 lg:gap-6 gap-4">
              {movies.map((item) => {
                return <MovieItem movie={item} key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;

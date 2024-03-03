import React from "react";
import "./Movie.scss";
import useStore from "../../store";

const Movie = () => {
  const { currentMovie } = useStore(); // 获取当前电影对象

  return (
    <div className="movieWrapper">
      {currentMovie ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentMovie.url}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>You haven't selected a movie yet!</p>
      )}
    </div>
  );
};

export default Movie;

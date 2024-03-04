import React, { useEffect } from "react";
import "./MovieList.scss";
// import { moviesdata } from "./movies";
import useStore from "../../../../store";

const MovieList = () => {
  const { movieList, setCurrentMovie, currentMovie } = useStore();

  const handleMovieClick = (movie) => {
    setCurrentMovie(movie);
  };

  useEffect(() => {
    // console.log(currentMovie);
  }, [currentMovie]);

  return (
    <div className="movieListWrapper">
      <div className="box main">
        {movieList.map((movie) => {
          return (
            <div
              className="child-box"
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            >
              <a href="#movie">
                <img src={movie.img} alt={movie.name + "poster"} />
                <div className="down">
                  <h3>{movie.name}</h3>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;

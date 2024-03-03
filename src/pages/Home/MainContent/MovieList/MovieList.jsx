import React from "react";
import "./MovieList.scss";
import { moviesdata } from "./movies";

const MovieList = () => {
  return (
    <div className="movieListWrapper">
      <div className="box main">
        {moviesdata.map((movie) => {
          return (
            <div className="child-box" key={movie.id}>
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

import React from "react";
import "./MovieList.scss";

const MovieList = () => {
  return (
    <div className="movieListWrapper">
      <div className="box main">
        <div className="child-box">
          <a href="#movie">
            <img src="./assets/Your_name_poster.jpg" alt="Your name poster" />
            <div className="down">
              <h3>Your name</h3>
            </div>
          </a>
        </div>
        <div className="child-box">
          <a href="#movie">
            <img src="./assets/1.jpeg" alt="Spirited Away poster" />
            <div className="down">
              <h3>Spirited Away</h3>
            </div>
          </a>
        </div>

        <div className="child-box">
          <a href="#movie">
            <img src="./assets/7.webp" alt="Big Fish & Begonia poster" />
            <div className="down">
              <h3>大鱼海棠</h3>
            </div>
          </a>
        </div>
        <div className="child-box">
          <a href="#movie">
            <img src="./assets/3.jpeg" alt="The Wind Rises poster" />
            <div className="down">
              <h3>The Wind Rises</h3>
            </div>
          </a>
        </div>
        <div className="child-box">
          <a href="#movie">
            <img src="./assets/4.jpeg" alt="Kiki's Delivery Service poster" />
            <div className="down">
              <h3>Kiki's Delivery</h3>
            </div>
          </a>
        </div>
        <div className="child-box">
          <a href="#movie">
            <img src="./assets/5.jpeg" alt="Howl's Moving Castle poster" />
            <div className="down">
              <h3>Howl's Moving Castle</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import React from "react";
import "./SongList.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

const SongList = () => {
  return (
    <div className="songlistWrapper">
      <ul className="list">
        <li className="songbox">
          <div>
            <img src="./assets/rec2.jpg" alt="" />
            <span className="songename">秋殇别恋</span>
          </div>
          <div>
            <span>马展月</span>
          </div>
          <div>
            <span>03:20</span>
          </div>
          <div>
            <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
          </div>
        </li>
        <hr />
        <li className="songbox">
          <div>
            <img src="./assets/rec2.jpg" alt="" />
            <span className="songename">秋殇别恋</span>
          </div>
          <div>
            <span>马展月</span>
          </div>
          <div>
            <span>03:20</span>
          </div>

          <div>
            <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SongList;

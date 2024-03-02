import React from "react";
import "./PlayerRight.scss";
import useStore from "../../../../store";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const PlayerRight = () => {
  return (
    <div className="playerRightWrapper">
      <ul className="button">
        <li>
          <div className="playerBtn">
            <SkipPreviousIcon
              style={{ marginRight: "1em", fontSize: "30px" }}
            ></SkipPreviousIcon>
            <PauseCircleIcon style={{ fontSize: "30px" }}></PauseCircleIcon>
            <SkipNextIcon
              style={{ marginLeft: "1em", fontSize: "30px" }}
            ></SkipNextIcon>
          </div>
        </li>
        <li className="line">
          <span>0:00</span>
          <div className="progress-bar-background">
            <div class="progress-bar-foreground" style={{ width: "50%" }}></div>
          </div>
          <span>03:45</span>
        </li>
      </ul>
    </div>
  );
};

export default PlayerRight;

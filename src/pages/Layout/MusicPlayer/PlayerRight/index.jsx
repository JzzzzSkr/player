import React from "react";
import "./PlayerRight.scss";
import useStore from "../../../../store";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const PlayerRight = () => {
  const { currentSong } = useStore();

  // If there is no current song, display a simplified version of the player
  if (!currentSong) {
    return (
      <div className="playerRightWrapper">
        <ul className="button">
          <li>
            <div className="playerBtn">
              <SkipPreviousIcon
                style={{ marginRight: "1em", fontSize: "30px" }}
              />
              <PlayCircleFilledIcon style={{ fontSize: "30px" }} />
              <SkipNextIcon style={{ marginLeft: "1em", fontSize: "30px" }} />
            </div>
          </li>
        </ul>
      </div>
    );
  }

  // If there is a current song, display the full player with progress bar
  return (
    <div className="playerRightWrapper">
      <ul className="button">
        <li>
          <div className="playerBtn">
            <SkipPreviousIcon
              style={{ marginRight: "1em", fontSize: "30px" }}
            />
            <PauseCircleIcon style={{ fontSize: "30px" }} />
            <SkipNextIcon style={{ marginLeft: "1em", fontSize: "30px" }} />
          </div>
        </li>
        <li className="line">
          <span>0:00</span>
          <div className="progress-bar-background">
            <div
              className="progress-bar-foreground"
              style={{ width: "50%" }}
            ></div>
          </div>
          <span>{currentSong.time}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlayerRight;

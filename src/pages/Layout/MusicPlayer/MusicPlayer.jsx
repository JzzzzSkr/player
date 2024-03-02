import React from "react";
import "./MusicPlayer.scss";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";

const MusicPlayer = () => {
  return (
    <div className="musicWrapper">
      <PlayerLeft />
      <PlayerRight />
    </div>
  );
};

export default MusicPlayer;

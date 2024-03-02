import React from "react";
import "./MusicPlayer.scss";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";
import useStore from '../../../store'

const MusicPlayer = () => {

  return (
    <div className="musicWrapper">
      <PlayerLeft />
      <PlayerRight />
    </div>
  );
};

export default MusicPlayer;

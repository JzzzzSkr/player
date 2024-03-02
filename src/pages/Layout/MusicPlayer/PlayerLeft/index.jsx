import React from "react";
import "./PlayerLeft.scss";
import useStore from "../../../../store";

const PlayerLeft = () => {
  const {  currentSong  } = useStore();

  if (!currentSong) {
    return <div className="playerLeftWrapper"></div>;
  }

  return (
    <div className="playerLeftWrapper">
      <img src={currentSong.img || ""} alt={currentSong.title || "Song Title"} />
      <div className="songinfo">
        <h3>{currentSong.title}</h3>
        <span>{currentSong.singer || "Artist Name"}</span>
      </div>
    </div>
  );
};

export default PlayerLeft;

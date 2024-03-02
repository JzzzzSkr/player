import React from "react";
import "./PlayerLeft.scss";
import useStore from "../../../../store";

const PlayerLeft = () => {
  const {  currentSong  } = useStore();

  // 如果 currentSong 为 null，不渲染任何内容
  if (!currentSong) {
    return null;
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

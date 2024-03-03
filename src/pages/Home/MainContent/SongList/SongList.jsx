import React from "react";
import "./SongList.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import useStore from "../../../../store"; 
import { songsdata } from "./audio";
import { useEffect } from "react";

const SongList = () => {
  const { isPlaying, currentSong, togglePlay, setCurrentSong, songList } =
    useStore();

  useEffect(() => {
    console.log("isPlaying changed to:", isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    console.log("currentSong changed to:", currentSong);
  }, [currentSong]);

  return (
    <div className="songlistWrapper">
      <ul className="list">
        {songList.map((item, index) => (
          <React.Fragment key={index}>
            <li className="songbox">
              <div className="songpic">
                <img src={item.img} alt="" />
                <span className="songename">{item.title}</span>
              </div>
              <div>
                <span>{item.singer}</span>
              </div>
              <div>
                <span>{item.time}</span>
              </div>
              <div
                onClick={() =>
                  currentSong === item ? togglePlay() : setCurrentSong(item)
                }
              >
                {isPlaying && currentSong === item ? (
                  <PauseCircleOutlineIcon />
                ) : (
                  <PlayCircleOutlineIcon />
                )}
              </div>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

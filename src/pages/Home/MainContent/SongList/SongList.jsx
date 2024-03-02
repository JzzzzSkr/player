import React from "react";
import "./SongList.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import useStore from "../../../../store"; // 假设 store.js 和 SongList 组件在同一个目录下
import {songsdata} from "../../../../audio"

const SongList = () => {
  const { isPlaying, currentSong, togglePlay, setCurrentSong } = useStore();

  return (
    <div className="songlistWrapper">
      <ul className="list">
        {songsdata.map((item, index) => (
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
                <span>{item.duration}</span>
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

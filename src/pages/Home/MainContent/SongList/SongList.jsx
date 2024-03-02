import React from "react";
import "./SongList.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline"; // Note: This import is unused
import { songsdata } from "../../../../audio";

const SongList = () => {
  return (
    <div className="songlistWrapper">
      <ul className="list">
        {songsdata.map((item, index) => (
          // Use React Fragment <>...</> to wrap adjacent elements
          <React.Fragment key={index}>
            <li className="songbox">
              <div className="songpic">
                <img src={item.img} alt="" />
                <span className="songename">{item.title}</span>{" "}
                {/* Assuming item has a name property */}
              </div>
              <div>
                <span>{item.singer}</span>{" "}
                {/* Assuming item has an artist property */}
              </div>
              <div>
                <span>03:01</span>{" "}
                {/* Assuming item has a duration property */}
              </div>
              <div>
                <PlayCircleOutlineIcon />
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

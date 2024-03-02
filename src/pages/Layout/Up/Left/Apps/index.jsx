import React from "react";
import "./Apps.scss";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MovieIcon from "@mui/icons-material/Movie";

const Apps = () => {
  const navagate = useNavigate();

  return (
    <div className="appsWrapper">
      <h3>Apps</h3>
      <ul>
        <li
          className="side-menu"
          onClick={() => {
            navagate("home");
          }}
        >
          <span>
            <HomeIcon />
          </span>
          <p style={{ fontSize: "14px", marginLeft: "0.5em" }}>Home</p>
        </li>
        <li
          className="side-menu"
          onClick={() => {
            navagate("library");
          }}
        >
          <span>
            <LibraryMusicIcon />
          </span>
          <p style={{ fontSize: "14px", marginLeft: "0.5em" }}>Music library</p>
        </li>
        <li
          className="side-menu"
          onClick={() => {
            navagate("movie");
          }}
        >
          <span>
            <MovieIcon />
          </span>
          <p style={{ fontSize: "14px", marginLeft: "0.5em" }}>Movie</p>
        </li>
      </ul>
    </div>
  );
};

export default Apps;

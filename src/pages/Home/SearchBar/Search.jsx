import React, { useState } from "react";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
import useStore from "../../../store";
import { songsdata } from "../MainContent/SongList/audio";

const Search = () => {
  const { setSongList } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term.trim()) {
      setSongList(songsdata);
    } else {
      const filteredSongs = songsdata.filter((song) =>
        song.title.toLowerCase().includes(term.toLowerCase())
      );
      setSongList(filteredSongs);
    }
  };

  return (
    <div className="searchWrapper">
      <div className="search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;

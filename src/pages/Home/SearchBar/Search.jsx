import React from "react";
import './Search.scss'
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="searchWrapper">
      <div className="search-bar">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;

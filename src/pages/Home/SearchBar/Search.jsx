import React, { useState } from "react";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
import useStore from "../../../store";
import { songsdata } from "../MainContent/SongList/audio";
import { moviesdata } from "../MainContent/MovieList/movies";

const Search = () => {
  const { setSongList, activeKey, movieList, setMovieList } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  console.log(activeKey);
  // 假如activeKey是1，那么就是songlist搜索，如果是activeKey是2，那么就是movielist搜索
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // 如果搜索框为空，则重置列表为完整的歌曲或电影列表
    if (!term.trim()) {
      if (activeKey === "1") {
        setSongList(songsdata); // 重置歌曲列表
      } else if (activeKey === "2") {
        setMovieList(moviesdata); // 重置电影列表
      }
    } else {
      // 根据 activeKey 和搜索词过滤歌曲或电影列表
      if (activeKey === "1") {
        const filteredSongs = songsdata.filter((song) =>
          song.title.toLowerCase().includes(term.toLowerCase())
        );
        setSongList(filteredSongs); // 更新过滤后的歌曲列表
      } else if (activeKey === "2") {
        const filteredMovies = movieList.filter(
          (movie) => movie.name.toLowerCase().includes(term.toLowerCase()) // 确保电影对象有 title 属性
        );
        setMovieList(filteredMovies); // 更新过滤后的电影列表
      }
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

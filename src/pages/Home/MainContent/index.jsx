import React, { useState } from "react";
import "./MainContent.scss";
import { Tabs } from "antd";
import SongList from "./SongList/SongList";
import MovieList from "./MovieList/MovieList";

const MainContent = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
    // console.log(key);
    setActiveKey(key);
  };

  const tabItems = [
    {
      label: (
        <span className={activeKey === "1" ? "active-tab" : "inactive-tab"}>
          Play List
        </span>
      ),
      key: "1",
      children: <SongList />,
    },
    {
      label: (
        <span className={activeKey === "2" ? "active-tab" : "inactive-tab"}>
          Movies
        </span>
      ),
      key: "2",
      children: <MovieList />,
    },
    // Add more items as needed
  ];

  return (
    <div className="mainWrapper">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        tabBarStyle={{ borderBottom: "none" }}
        items={tabItems}
      />
    </div>
  );
};

export default MainContent;

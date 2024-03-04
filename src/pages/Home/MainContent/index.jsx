import React from "react";
import "./MainContent.scss";
import { Tabs } from "antd";
import SongList from "./SongList/SongList";
import MovieList from "./MovieList/MovieList";
import useStore from "../../../store";

const MainContent = () => {
  const { activeKey, setActiveKey } = useStore();

  const onChange = (key) => {
    setActiveKey(key);
    // console.log("后来key" + activeKey);
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
        defaultActiveKey={activeKey}
        onChange={onChange}
        tabBarStyle={{ borderBottom: "none" }}
        items={tabItems}
      />
    </div>
  );
};

export default MainContent;

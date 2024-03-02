import React from "react";
import "./Layout.scss";
import Up from "./Up/Up";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

const Layout = () => {
  return (
    <div className="layoutWrapper">
      <Up></Up>

      {/* <Outlet></Outlet> */}

      <MusicPlayer></MusicPlayer>
    </div>
  );
};

export default Layout;

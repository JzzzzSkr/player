import React from "react";
import "./Left.scss";
import Iconmenu from "./Iconmenu";
import Profile from "./Profile";
import Apps from "./Apps";

const Left = () => {
  return (
    <div className="leftWrapper">
      <div className="nav">
        <Iconmenu></Iconmenu>
        <Profile></Profile>
        <Apps></Apps>
      </div>
    </div>
  );
};

export default Left;

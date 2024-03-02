import React from "react";
import "./Up.scss";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Up = () => {
  return (
    <div className="upWrapper">
      <Left></Left>
      <Right></Right>
    </div>
  );
};

export default Up;

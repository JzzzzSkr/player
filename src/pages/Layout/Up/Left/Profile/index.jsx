import React from "react";
import "./Profile.scss";
import GitHubIcon from "@mui/icons-material/GitHub";


const Profile = () => {
  return (
    // 宽度是父级的100% 高度由内容撑开
    <div className="profileWrapper">
      <div className="userHeader">
        <img src="./assets/profile.jpeg" alt="" />
      </div>

      <div className="userName">
        <span>Michael Liang</span>
        <a className="git" href="https://github.com/JzzzzSkr">
          <GitHubIcon style={{ fontSize: "medium" }} />
          <span style={{ fontSize: "10px", marginLeft: "4px" }}>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;

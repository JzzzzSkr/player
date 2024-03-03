import React from "react";
import "./LibraryRight.scss";
import useStore from "../../../store"; // 确保路径正确

const Library = () => {
  const { historySet } = useStore(); // 从全局状态中获取播放历史

  // 创建 historySet 的副本并倒序，以保持原始 historySet 不变
  const reversedHistorySet = [...historySet].reverse();

  return (
    <div className="libraryRightWrapper">
      <h3>History listen</h3>
      <ul>
        {reversedHistorySet.map((item, index) => (
          <li className="songbox" key={index}>
            <div className="musImg">
              {/* 假设历史项包含图片路径 img 和标题 title */}
              <img src={item.img} alt={item.title} />
            </div>
            <div className="MusicName">
              <span className="name">{item.title}</span>
              {/* 如果有创作者或艺术家信息，也可以显示 */}
              <span className="creater">{item.artist}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;

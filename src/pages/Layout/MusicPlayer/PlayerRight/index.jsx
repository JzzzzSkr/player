import React, { useEffect, useRef, useState } from "react";
import "./PlayerRight.scss";
import useStore from "../../../../store";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { songsdata } from "../../../../audio";

const PlayerRight = () => {
  const { isPlaying, togglePlay, setCurrentSong, currentSong } = useStore();
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [currentSong]);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handlePlayPause = () => {
    if (currentSong) {
      // 这里假设您有方法来播放或暂停音乐，可能是通过HTML的 <audio> 元素或其他方式
      // 例如: audioRef.current.play() 或 audioRef.current.pause()
      togglePlay();
    } else {
      return;
    }
  };

  const moveToNextSong = () => {
    if (currentSong) {
      // 首先找到当前歌曲在songsdata数组中的索引
      const currentIndex = songsdata.findIndex(
        (song) => song.id === currentSong.id
      );

      // 计算下一首歌曲的索引，使用取余操作符来实现循环
      const nextIndex = (currentIndex + 1) % songsdata.length;

      // 使用下一首歌曲的索引来设置新的当前歌曲
      setCurrentSong(songsdata[nextIndex]);
    }
  };

  const handleProgressBarClick = (e) => {
    if (!audioRef.current) return; 
    if (!currentSong) return;

    const progressBar = progressBarRef.current; // 进度条的引用
    const clickPosition =
      (e.pageX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth; // 计算点击位置占进度条总宽度的比例
    const newTime = clickPosition * audioRef.current.duration; // 根据比例计算新的播放时间
    audioRef.current.currentTime = newTime; // 更新播放时间
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const paddedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${minutes}:${paddedSeconds}`;
  };

  const handlePrev = () => {
    if (currentSong) {
      // 首先找到当前歌曲在songsdata数组中的索引
      const currentIndex = songsdata.findIndex(song => song.id === currentSong.id);
  
      // 当currentIndex为0时，currentIndex - 1为-1，通过添加songsdata.length并取余，可以正确地跳转到列表的最后一首歌
      const prevIndex = (currentIndex - 1 + songsdata.length) % songsdata.length;
  
      // 使用前一首歌曲的索引来设置新的当前歌曲
      setCurrentSong(songsdata[prevIndex]);
    }
  };
  

  if (!currentSong) {
    return (
      <div className="playerRightWrapper">
        <ul className="button">
          <li>
            <div className="playerBtn">
              <SkipPreviousIcon
                style={{ marginRight: "1em", fontSize: "30px" }}
              />
              <PlayCircleFilledIcon style={{ fontSize: "30px" }} />
              <SkipNextIcon style={{ marginLeft: "1em", fontSize: "30px" }} />
            </div>
          </li>
        </ul>
      </div>
    );
  }

  // If there is a current song, display the full player with progress bar
  return (
    <div className="playerRightWrapper">
      <audio
        ref={audioRef}
        src={currentSong.url}
        onEnded={moveToNextSong}
      ></audio>
      <ul className="button">
        <li>
          <div className="playerBtn">
            <SkipPreviousIcon
              style={{ marginRight: "1em", fontSize: "30px" }}
              onClick={handlePrev}
            />
            {isPlaying ? (
              <PauseCircleIcon
                style={{ fontSize: "30px" }}
                onClick={handlePlayPause}
              />
            ) : (
              <PlayCircleFilledIcon
                style={{ fontSize: "30px" }}
                onClick={handlePlayPause}
              />
            )}
            <SkipNextIcon
              style={{ marginLeft: "1em", fontSize: "30px" }}
              onClick={moveToNextSong}
            />
          </div>
        </li>
        <li className="line">
          <span>{formatTime(currentTime)}</span>
          <div
            ref={progressBarRef}
            onClick={handleProgressBarClick}
            className="progress-bar-background"
          >
            <div
              className="progress-bar-foreground"
              style={{
                width: `${
                  audioRef.current
                    ? (currentTime / audioRef.current.duration) * 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
          <span>{currentSong.time}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlayerRight;

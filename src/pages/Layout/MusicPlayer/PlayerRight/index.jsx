import React, { useEffect, useRef, useState } from "react";
import "./PlayerRight.scss";
import useStore from "../../../../store";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { songsdata } from "../../../Home/MainContent/SongList/audio";

const PlayerRight = () => {
  const { isPlaying, togglePlay, setCurrentSong, currentSong } =
    useStore();
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Update progress based on audio time update
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

  // Play or pause the audio based on isPlaying state
  useEffect(() => {
    if (currentSong && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  // Toggle play or pause
  const handlePlayPause = () => {
    if (currentSong) {
      togglePlay();
    }
  };

  // Move to the next song in the list
  const moveToNextSong = () => {
    if (currentSong) {
      const currentIndex = songsdata.findIndex(
        (song) => song.id === currentSong.id
      );
      const nextIndex = (currentIndex + 1) % songsdata.length;
      setCurrentSong(songsdata[nextIndex]);
    }
  };

  // Move to the previous song in the list
  const handlePrev = () => {
    if (currentSong) {
      const currentIndex = songsdata.findIndex(
        (song) => song.id === currentSong.id
      );
      const prevIndex =
        (currentIndex - 1 + songsdata.length) % songsdata.length;
      setCurrentSong(songsdata[prevIndex]);
    }
  };

  // Handle progress bar click to change the current time
  const handleProgressBarClick = (e) => {
    if (!audioRef.current || !currentSong) return;

    const progressBar = progressBarRef.current;
    const clickPosition =
      (e.pageX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    const newTime = clickPosition * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  // Format time from seconds to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const paddedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${minutes}:${paddedSeconds}`;
  };

  if (!currentSong) {
    return <div className="playerRightWrapper">Please select a song</div>;
  }

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
          <span>{currentSong.time}</span>{" "}
          {/* Assuming this is the formatted total duration of the song */}
        </li>
      </ul>
    </div>
  );
};

export default PlayerRight;

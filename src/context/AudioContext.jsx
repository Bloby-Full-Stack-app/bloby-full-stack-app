import React, { createContext, useEffect, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = (props) => {
  const storedTrack = JSON.parse(localStorage.getItem("currentTrack"));

  const [audioState, setAudioState] = useState({
    audioSrc: storedTrack?.audioSrc || "",
    currentTime: storedTrack?.currentTime || 0,
    isPlaying: false,
  });

  const { audioSrc, currentTime, isPlaying } = audioState;

  useEffect(() => {
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, isPlaying })
    );
  }, [audioSrc, currentTime, isPlaying]);

  const setCurrentTime = (time) => {
    setAudioState((prevState) => ({ ...prevState, currentTime: time }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime: time, isPlaying })
    );
  };

  const setIsPlaying = (isPlaying) => {
    setAudioState((prevState) => ({ ...prevState, isPlaying: isPlaying }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, isPlaying: isPlaying })
    );
  };

  return (
    <AudioContext.Provider
      value={{ audioState, setAudioState, setCurrentTime, setIsPlaying }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
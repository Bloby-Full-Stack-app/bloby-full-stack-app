import React, { createContext, useEffect, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = (props) => {
  const storedTrack = JSON.parse(localStorage.getItem("currentTrack"));

  const [audioState, setAudioState] = useState({
    audioSrc: storedTrack?.audioSrc || "",
    currentTime: storedTrack?.currentTime || 0,
    isPlaying: storedTrack?.isPlaying || false,
    title: storedTrack?.title || "",
    artist: storedTrack?.artist || "",
    image: storedTrack?.image || ""
  });

  const { audioSrc, currentTime, isPlaying, title, artist, image } = audioState;

  useEffect(() => {
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, isPlaying, title, artist, image })
    );
  }, [audioSrc, currentTime, isPlaying, title, artist, image]);

  const setCurrentTime = (time) => {
    setAudioState((prevState) => ({ ...prevState, currentTime: time }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime: time, isPlaying, title, artist, image })
    );
  };

  const setIsPlaying = (isPlaying) => {
    setAudioState((prevState) => ({ ...prevState, isPlaying: isPlaying }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, title, artist, isPlaying: isPlaying, image})
    );
  };

  const setTitle = (title) => {
    setAudioState((prevState) => ({ ...prevState, title: title }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, isPlaying, title: title, image })
    );
  };

  const setArtist = (artist) => {
    setAudioState((prevState) => ({ ...prevState, artist: artist }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, isPlaying, title, artist: artist, image })
    );
  }

  const setImage = (image) => {
    setAudioState((prevState) => ({ ...prevState, image: image }));
    localStorage.setItem(
      "currentTrack",
      JSON.stringify({ audioSrc, currentTime, isPlaying, title, artist, image: image })
    );
  }

  return (
    <AudioContext.Provider
      value={{ audioState, setAudioState, setCurrentTime, setIsPlaying, setArtist, setTitle, setImage }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
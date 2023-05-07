import React, { createContext, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = (props) => {
  const [audioSrc, setAudioSrc] = useState("");

  return (
    <AudioContext.Provider value={[audioSrc, setAudioSrc]}>
      {props.children}
    </AudioContext.Provider>
  );
};

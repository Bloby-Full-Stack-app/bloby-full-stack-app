import React, { useContext, useEffect, useRef } from 'react';
import { AudioContext } from '../context/AudioContext';

function Player() {
  const { audioState, setAudioState, setCurrentTime, setIsPlaying } = useContext(AudioContext);
  const { audioSrc, currentTime, isPlaying, title, artist, image } = audioState;
  const audioRef = useRef();

  useEffect(() => {
    const storedTrack = JSON.parse(localStorage.getItem("currentTrack"));
    if (storedTrack && storedTrack.audioSrc) {
      setAudioState({
        audioSrc: storedTrack.audioSrc,
        currentTime: storedTrack.currentTime,
        isPlaying: storedTrack.isPlaying,
        title: storedTrack.title,
        artist: storedTrack.artist,
        image: storedTrack.image
      });
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
      if (audioState.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__cover">
        <img src={image} alt="" />
      </div>

      <div className="player__content">
        <span className="player__track">
          <b className="player__title">{title.length > 20 ? `${title.substring(0, 10)}...` : title}</b> –{" "}
          <span className="player__artist">{artist}</span>
        </span>
        <audio
          src={audioSrc}
          ref={audioRef}
          id="audio3"
          controls
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        ></audio>
      </div>
    </div>
  );
}

export default Player;
import React, { useContext, useEffect, useRef } from 'react'
import {AudioContext} from '../context/AudioContext';

function Player() {
    const [audioSrc] = useContext(AudioContext);

    return (
        <div className="player">
            <div className="player__cover">
                <img src="assets/img/covers/cover.svg" alt="" />
            </div>

            <div className="player__content">
                <span className="player__track"><b className="player__title">Epic Cinematic</b> – <span className="player__artist">AudioPizza</span></span>
                <audio src={audioSrc} id="audio3" controls autoPlay></audio>
            </div>
        </div>
    );
}

export default Player;

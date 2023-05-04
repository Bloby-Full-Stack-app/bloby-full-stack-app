import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Player() {

    return (
        <div className="player">
            <div className="player__cover">
                <img src="assets/img/covers/cover.svg" alt="" />
            </div>

            <div className="player__content">
                <span className="player__track"><b className="player__title">Epic Cinematic</b> – <span className="player__artist">AudioPizza</span></span>
                <audio src="http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3" id="audio3" controls></audio>
            </div>
        </div>
    );
}

export default Player;

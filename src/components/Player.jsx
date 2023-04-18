import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { setTrack } from '../redux/store';

function Player({ playlist, track }) {

    const dispatch = useDispatch();
    const currentPlaylist = useSelector(state => state.currentPlaylist);
    const currentTrack = useSelector(state => state.currentTrack);

    const handleClick = (event) => {
        event.preventDefault();
        console.log(currentTrack);
      };

    function handleTrackEnd() {
        //setTrack("testing.mp3");
        /*if (currentPlaylist) {
            const currentIndex = currentPlaylist.indexOf(currentTrack);
            if (currentIndex === currentPlaylist.length - 1) {
                dispatch(setTrack(null));
            } else {
                dispatch(setTrack(currentPlaylist[currentIndex + 1]));
            }
        } else {
            dispatch(setTrack(null));
        }*/
    }

    /*const handlePrevTrack = () => {
        // decrement current track index (with boundary check)
        const newIndex = currentTrack - 1;
        if (newIndex >= 0) {
            setTrack(newIndex);
        }
    };

    const handleNextTrack = () => {
        // increment current track index (with boundary check)
        const newIndex = currentTrack + 1;
        if (newIndex < playlist.length) {
            setTrack(newIndex);
        }
    };*/

    return (
        <div className="player">
            <div className="player__cover">
                <img src="assets/img/covers/cover.svg" alt="" />
            </div>

            <div className="player__content">
                <span className="player__track">
                    <b className="player__title">zzz</b> – <span className="player__artist">zzz</span>
                </span>
                <>
                {track && (
                    <audio src={ track.mp3 } onEnded={handleTrackEnd} id="audio" autoPlay></audio>
                )}
                </>
                <button onClick={handleClick}>Prev</button>
                <button onClick={handleClick}>Next</button>
            </div>
        </div>
    );
}

export default Player;

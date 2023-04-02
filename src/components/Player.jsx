import React, { useEffect, useState } from 'react'

 function Player () {

    const [playlist, setPlaylist] = useState([
        { title: 'Epic Cinematicsss', artist: 'AudioPizza', src: 'http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3' },
        { title: 'Motivation', artist: 'AudioJungle', src: 'http://srm.net/mp3/srm_drepte_hona_8kl.mp3' },
        { title: 'My heart will go on', artist: 'Celine Dion', src: 'http://80s.lt/Files/mp3/EN/Celine%20Dion/Celine%20Dion%20-%20My%20Heart%20Will%20Go%20On.mp3' },
      ]);

      const [currentSongIndex, setCurrentSongIndex] = useState(0);

      useEffect(() => {
        // load audio source when current song index changes
        const audioPlayer = document.getElementById('audio');
        audioPlayer.src = playlist[currentSongIndex].src;
        audioPlayer.play();
      }, [currentSongIndex]);
    
      const handlePrevSong = () => {
        // decrement current song index (with boundary check)
        const newIndex = currentSongIndex - 1;
        if (newIndex >= 0) {
          setCurrentSongIndex(newIndex);
        }
      };
    
      const handleNextSong = () => {
        // increment current song index (with boundary check)
        const newIndex = currentSongIndex + 1;
        if (newIndex < playlist.length) {
          setCurrentSongIndex(newIndex);
        }
      };

    return (
        <div className="player">
        <div className="player__cover">
          <img src="assets/img/covers/cover.svg" alt="" />
        </div>
  
        <div className="player__content">
          <span className="player__track">
            <b className="player__title">{playlist[currentSongIndex].title}</b> – <span className="player__artist">{playlist[currentSongIndex].artist}</span>
          </span>
          <audio src={playlist[currentSongIndex].src} id="audio" controls></audio>
          <button onClick={handlePrevSong}>Prev</button>
          <button onClick={handleNextSong}>Next</button>
        </div>
      </div>
    );
}

export default Player;

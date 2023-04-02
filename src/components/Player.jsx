import React, { useState } from 'react'

 function Player () {

    return (
	<div class="player">
		<div class="player__cover">
			<img src="assets/img/covers/cover.svg" alt="" />
		</div>

		<div class="player__content">
			<span class="player__track"><b class="player__title">Epic Cinematic</b> – <span class="player__artist">AudioPizza</span></span>
			<audio src="http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3" id="audio" controls></audio>
		</div>
	</div>
    )
}

export default Player;

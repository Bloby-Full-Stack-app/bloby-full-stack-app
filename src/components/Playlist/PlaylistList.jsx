import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { getUserPlaylists } from '../../api/endpoints/playlist';
import Playlist from './Playlist';

function PlaylistList() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    let loaded = false;
    const getCurrentUserPlaylists = async () => {
        try {
            const response = await axios(getUserPlaylists());
            const { data } = response;
            setPlaylists(data?.data || []);
        } catch (error) {
            console.log("Error loading playlists:", error);
        }
    };
    if (playlists.length === 0 && !loaded) {
        getCurrentUserPlaylists();
    }
    return () => {
        loaded = true;
      };

}, []);

  return (
    <div>
      {playlists.slice(0,5).map(playlist => (
          <Playlist
            key={playlist._id}
            id={playlist._id}
            name={playlist.name}
            tracks={playlist.tracks.length > 1 ? playlist.tracks.length + " Tracks" : playlist.tracks.length + " Track"}
          />
      ))}
      
    </div>
  );
}

export default PlaylistList;
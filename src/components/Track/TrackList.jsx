import React, { useEffect, useMemo, useState } from 'react'
import Track from './Track';
import { fetchTracks } from '../../api/endpoints/tracks';
import axios from '../../api/axios';
import { useSearchParams } from 'react-router-dom';
import AddToPlaylistModal from '../Modals/AddToPlayListModal';

function TrackList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let loaded = false;
    const getTracksList = async () => {
      const promise = axios(
        fetchTracks()
      );

      const res = await promise;
      const { data } = res;
      if (res.status === 200 || res.status === 201) {
        try {
          setTracks(data?.data || []);
        } catch { }
      } else {
        // TODO: Handle tracks loading error
      }
    };

    console.log(tracks.length);

    if (tracks.length === 0 && !loaded) {
      getTracksList();
    }
    return () => {
      loaded = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {tracks.slice(0,5).map(track => (
          <Track
            key={track._id}
            id={track._id}
            name={track.name}
            artist={track.artist}
            album={track.album}
            length="3:44"
          />
      ))}
      
    </div>
  );
}

export default TrackList;
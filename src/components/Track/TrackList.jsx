import React, { useEffect, useState } from 'react'
import Track from './Track';
import { fetchLikedTracks } from '../../api/endpoints/tracks';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { likeTrack } from '../../redux/actions/tracks';

function TrackList({ tracks, inPlaylist }) {
  const dispatch = useDispatch();
  
  const [likedTracks, setLikedTracks] = useState([]);

  useEffect(() => {
    const fetchLikedTracksList = async () => {
      const res = await axios(fetchLikedTracks());
      const { data } = res;

      if (res.status === 200 || res.status === 201) {
        setLikedTracks(data?.data?.map(track => track._id) || []);
      } else {
        // TODO: Handle error
      }
    };

    fetchLikedTracksList();
  }, []);

  const handleLikeTrack = (trackId) => {
    return async (event) => {
      event.preventDefault();

      const promise = dispatch(likeTrack(trackId));

      promise.then(res => {
        const updatedLikedTracks = res.isLiked
          ? [...likedTracks, trackId]
          : likedTracks.filter(id => id !== trackId);

        setLikedTracks(updatedLikedTracks);
      });
    };
  };

  return (
    <div>
      {tracks.slice(0, 5).map(track => (
        <Track
          key={track._id}
          id={track._id}
          name={track.name}
          Image={track.Image}
          artist={track.artist}
          album={track.album}
          handleLikeTrack={handleLikeTrack(track._id)}
          isLiked={likedTracks.includes(track._id)}
          inPlaylist={inPlaylist}
          length="3:44"
        />
      ))}
    </div>
  );
}



export default TrackList;
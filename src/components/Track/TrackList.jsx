import React, { useEffect, useMemo, useState } from 'react'
import Track from './Track';
import { fetchTracks } from '../../api/endpoints/tracks';
import axios from '../../api/axios';
import { useSearchParams } from 'react-router-dom';

function TrackList() {
    const [tracks, setTracks] = useState([]);
    const [pages, setPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    /*const currentTrack = useSelector(state => state.currentTrack);
    const dispatch = useDispatch();*/

    /*useEffect(() => {
        fetch('http://localhost:8090/api/fetchTracks')
            .then(response => response.json())
            .then(data => setTracks(data));
    }, []);*/

    const currentPage = useMemo(() => {
        // set current page from the search param,
        // otherwise fallback to page: 1
        return Number(searchParams.get('page') ?? 1);
      }, [searchParams]);

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
            } catch {}
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

    /*function handleClick(track) {
        console.log('Track clicked:', track.name);
        dispatc(setTrack(track));
    }*/

    return (
        <>
            {tracks.slice(0, 5).map(track => (
                <Track
                    key={track._id}
                    name={track.name}
                    artist={track.artist}
                    image={track.Image}
                    length={track.length}
                    id={track._id}
                />
            ))}
        </>
    );
}

export default TrackList;
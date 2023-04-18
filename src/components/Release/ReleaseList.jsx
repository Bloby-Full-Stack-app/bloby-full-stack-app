import React, { useEffect, useMemo, useState } from 'react'
import Track from './Release';
import { fetchReleases } from '../../api/endpoints/releases';
import axios from '../../api/axios';
import { useSearchParams } from 'react-router-dom';
import Release from './Release';

function ReleaseList() {
    const [releases, setReleases] = useState([]);
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
        const getReleasesList = async () => {
          const promise = axios(
            fetchReleases()
            );

          const res = await promise;
          const { data } = res;
          if (res.status === 200 || res.status === 201) {
            try {
              setReleases(data?.data || []);
            } catch {}
          } else {
            // TODO: Handle tracks loading error
          }
        };
    
        if (releases.length === 0 && !loaded) {
          getReleasesList();
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
            {releases.map(release => (
                <Release
                    key={release.id}
                    name={release.name}
                    artist={release.artist}
                    image={release.Image}
                    //length={release.length}
                    //onClick={() => handleClick(track)}
                />
            ))}
        </>
    );
}

export default ReleaseList;
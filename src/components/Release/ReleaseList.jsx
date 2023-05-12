import React, { useEffect, useMemo, useState } from 'react'
import Track from './Release';
import { fetchReleases } from '../../api/endpoints/releases';
import axios from '../../api/axios';
import { useSearchParams } from 'react-router-dom';
import Release from './Release';

function ReleaseList({ releases }) {

    return (
        <>
            {releases.map(release => (
                <Release
                    key={release._id}
                    name={release.name}
                    artist={release.artist}
                    image={release.Image}
                    mp3={release.mp3}
                    //length={release.length}
                    //onClick={() => handleClick(track)}
                />
            ))}
        </>
    );
}

export default ReleaseList;
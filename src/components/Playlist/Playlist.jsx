import React from 'react'
import { Link } from 'react-router-dom';

function Playlist(props) {
    return (
        <>
            <li className="single-item">
                <a href="" data-link data-title="Cinematic" data-artist="AudioPizza" data-img="assets/img/covers/cover1.jpg" className="single-item__cover">
                    <img src={props.Image} alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" /></svg>
                </a>
                <div className="single-item__title">
                    <h4><Link to={`/playlist/${props.id}`}>{props.name}</Link></h4>
                    <span><a href="">{props.tracks}</a></span>
                </div>
                <span className="single-item__time">{props.length}</span>
            </li>
        </>
    )
}

export default Playlist
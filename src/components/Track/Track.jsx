import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUserPlaylists } from '../../api/endpoints/playlist';
import axios from '../../api/axios';
import AddToPlayListModal from '../AddToPlayListModal';

function Track(props) {
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        console.log(props.id);
    };

    const handleAddToPlaylist = (playlistId) => {
        // Perform logic to add track to selected playlist
        console.log(`Added xd to ${playlistId}`);
        setSelectedPlaylist(playlistId);
      };
    return (
        <>
            <li className="single-item">
                {props.top ?
                    <>
                        <span className="single-item__number">{props.number}</span>
                        <span className="single-item__rate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z" />
                            </svg>
                            {props.rate}
                        </span>
                    </>
                    : ''}

                <Link to={`/release`} data-link data-title="Cinematic" data-artist="AudioPizza" data-img="assets/img/covers/cover1.jpg" className="single-item__cover">
                    <img src={props.Image} alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" /></svg>
                </Link>
                <div className="single-item__title">
                    <h4><a href="#">{props.name}</a></h4>
                    <span><a href="artist.html">{props.artist}</a></span>
                </div>
                <button onClick={handleOpenModal} className="single-item__add open-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
                </button>
                <Link to={`/playlist/${props.id}`} className="single-item__export">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path></svg>
                </Link>
                <span className="single-item__time">{props.length}</span>
            </li>

            {isOpen && 
                <AddToPlayListModal trackId={props.id} onCloseModal={() => setIsOpen(false)} />
            }
        </>
    )
}

export default Track
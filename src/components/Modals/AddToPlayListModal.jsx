import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserPlaylists } from "../../api/endpoints/playlist";
import { addTrackToPlaylist } from "../../redux/actions/playlist";
import { useDispatch } from "react-redux";

const AddToPlayListModal = (props) => {
    const dispatch = useDispatch();
    const [playlists, setPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState('')
    const formData = new FormData();

    useEffect(() => {
        const getCurrentUserPlaylists = async () => {
            try {
                const response = await axios(getUserPlaylists());
                const { data } = response;
                setPlaylists(data?.data || []);
            } catch (error) {
                console.log("Error loading playlists:", error);
            }
        };
        getCurrentUserPlaylists();
    }, []);

    const handleAddToPlaylist = (event) => {
        event.preventDefault();
		formData.append('playlistName', playlistName);
        // console log formData data
        console.log(formData.get('playlistName'))
		dispatch(addTrackToPlaylist(props.trackId, {
            playlistName: playlistName
        }));
        //onAddToPlaylist(playlistId);
        props.onCloseModal();
    };

    return (
        <>
            <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready">
                <div className="mfp-container mfp-inline-holder">
                    <div className="mfp-content">
                        <div>
                            <div className="modal">
                                <div className="modal__content">
                                    <button className="modal__close" onClick={props.onCloseModal} type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                                        </svg>
                                    </button>
                                    <h4 className="sign__title">Your playlists</h4>
                                    <select
                                        className="sign__select"
                                        name="playlistName"
                                        id="playlistName"
                                        onChange={e => setPlaylistName(e?.target?.value)}
                                    >
                                        <option value="">Select a playlist</option>
                                        {playlists.map((playlist) => (
                                            <option key={playlist._id} value={playlist.name}>
                                                {playlist.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button onClick={handleAddToPlaylist} className="sign__btn" type="button">
                                        Add to playlist
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddToPlayListModal;

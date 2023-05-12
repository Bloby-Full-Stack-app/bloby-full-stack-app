import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTrack } from "../../redux/actions/tracks";

const AddTrack = (props, { title, artists, genres, albums, images}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(title)
	const [image, setImage] = useState(images)
	const [artist, setArtist] = useState(artists)
	const [genre, setGenre] = useState(genres)
	const [album, setAlbum] = useState(albums)
    const [file, setFile] = useState(props.file);
	const [mp3File, setMp3File] = useState(props.mp3)

    const handleAddTrack = (event) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('artist', artist);
        formData.append('genre', genre);
        formData.append('album', album);
        formData.append('Image', image);
        formData.append('mp3', mp3File);
        formData.append('file', file)
        dispatch(createTrack(formData));
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
                                    <h4 className="sign__title">Add merged track</h4>
                                    <label className="sign__label">Cover</label>
                                    <div className="release__cover">
                                        <img src={images} alt="" />
                                    </div>
                                    <div className="release__stat">
                                        <input id="mp3" name="mp3" value={mp3File} type="text" onChange={e => setMp3File(e?.target?.value)} hidden />
                                    </div>
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label className="sign__label">Title</label>
                                            <input id="title" type="text" name="title" className="sign__input" placeholder="Title" defaultValue={title} onChange={e => setName(e?.target?.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label className="sign__label">Artist</label>
                                            <input id="artist" type="text" name="artist" className="sign__input" placeholder="Artist" defaultValue={artists} onChange={e => setArtist(e?.target?.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label className="sign__label">Genre</label>
                                            <input id="genre" type="text" name="genre" className="sign__input" placeholder="Genre" defaultValue={genres} onChange={e => setGenre(e?.target?.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label className="sign__label">Album</label>
                                            <input id="album" type="text" name="album" className="sign__input" placeholder="Album" defaultValue={albums} onChange={e => setAlbum(e?.target?.value)} />
                                        </div>
                                    </div>


                                    <button onClick={handleAddTrack} className="sign__btn" type="button">
                                        Save track
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

export default AddTrack;

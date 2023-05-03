import React, { useEffect, useState } from 'react'
import PlaylistList from '../components/Playlist/PlaylistList';
import { getUploadedTracks } from '../redux/actions/tracks';
import { useDispatch } from 'react-redux';
import AddTrack from '../components/Modals/AddTrack';

function TrackEditor() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('')
	const [image, setImage] = useState('')
	const [artist, setArtist] = useState('')
	const [genre, setGenre] = useState('')
	const [album, setAlbum] = useState('')
	const [mp3File, setMp3File] = useState(null)
    const [audio1, setAudio1] = useState({
        title: "Song 1",
        src: " "
    });

    const [output, setOutput] = useState({
        title: "Output",
        src: ""
    });

    const [audio2, setAudio2] = useState({
        title: "Song 2",
        src: ""
    });

    const handleOpenModal = () => {
        // if output src is not empty
        if (output.src !== "") {
            setIsOpen(true);
        }
    };

    const handleFileUpload = async (event) => {
        const files = event.target.files;
        const file1 = files[0];
        const file2 = files[1];

        setAudio1({
            title: file1.name,
            src: URL.createObjectURL(file1)
        });

        setAudio2({
            title: file2.name,
            src: URL.createObjectURL(file2)
        });

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`mp3Files`, files[i]);
        }

        const promise = dispatch(getUploadedTracks(formData));
        promise.then(res => {
            //const blobUrl = URL.createObjectURL(new Blob([res.data.mp3], { type: 'audio' }));
            setName(res.data.name || '')
			setArtist(res.data.artist || '')
			setImage(res.data.Image || '')
			setGenre(res.data.genre || '')
			setAlbum(res.data.album || '')
			setMp3File(res.data.mp3)
            setOutput({
                title: res.data.artist,
                src: res.data.mp3
            });
        }).catch(error => {
            console.log(error); // this will log any errors that occurred during the request
        });
    };

    useEffect(() => {
        console.log(output.src)
    }, [output]);

    return (
        <main className="main">
            <div className="container-fluid">
                <div className="row row--grid">
                    <div className="col-12">
                        <div className="dashbox">
                            <div className="dashbox__title">
                                <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Playlists</h3>
                                <div className="dashbox__wrap">
                                    <a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" /></svg></a>
                                    <a className="dashbox__more" href="#">View All</a>
                                </div>
                            </div>

                            <div className="dashbox__list-wrap">
                                <ul className="main__list main__list--dashbox">
                                    <PlaylistList />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row--grid">
                    <div className="col-12">
                        <div>
                            <label htmlFor="fileInput" className="hero__btn hero__btn--video">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                                </svg>
                                Add Tracks
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                multiple
                                style={{ display: "none" }}
                                onChange={handleFileUpload}
                            />
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="dashbox">
                            <div className="dashbox__list-wrap">
                                <div className="col-12">
                                    {audio1 &&
                                        <div className="player__content">
                                            <span className="player__track"><b className="player__title">{audio1.title}</b> – <span className="player__artist">AudioPizza</span></span>
                                            <audio src={audio1.src} id="audio0" controls></audio>
                                        </div>
                                    }
                                    {audio2 &&
                                        <div className="player__content">
                                            <span className="player__track"><b className="player__title">{audio2.title}</b> – <span className="player__artist">AudioPizza</span></span>
                                            <audio src={audio2.src} id="audio1" controls></audio>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="article">
                            {output &&
                                <div className="player__content">
                                    <span className="player__track"><b className="player__title">{output.title}</b> – <span className="player__artist">AudioPizza</span></span>
                                    <audio src={output.src} id="audio2" controls></audio>
                                </div>
                            }
                        </div>
                        <div className="col-3">
                            <button onClick={handleOpenModal} className="sign__btn" type="button">Save</button>
                        </div>
                        {isOpen && 
                            <AddTrack name={name} artist={artist} image={image} album={album} genre={genre} mp3={mp3File} onCloseModal={() => setIsOpen(false)}/>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TrackEditor;
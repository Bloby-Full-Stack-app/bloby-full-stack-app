import React, { useEffect, useState } from 'react'
import { getUploadedTracks } from '../redux/actions/tracks';
import { useDispatch } from 'react-redux';
import AddTrack from '../components/Modals/AddTrack';
import { fetchCurrentUserReleases, fetchLikedTracks } from '../api/endpoints/tracks';
import axios from 'axios';
import TrackList from '../components/Track/TrackList';
import Waveform from '../components/Waveform';
import { FaRegTimesCircle, FaVolumeUp, FaRegClock } from 'react-icons/fa'
import FadeInInput from '../components/inputRange/FadeInInput';
import FadeOutInput from '../components/inputRange/FadeOutInput';
import PitchInput from '../components/inputRange/PitchInput';
import SpeedInput from '../components/inputRange/SpeedInput';
import VolumeInput from '../components/inputRange/VolumeInput';
import ProgressModal from '../components/Modals/ProgressModal';

function TrackEditor() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [album, setAlbum] = useState('')
    const [mp3File, setMp3File] = useState(null)
    const [currentUserReleases, setCurrentUserReleases] = useState([]);
    const [likedTracks, setLikedTracks] = useState([])
    const [files, setFiles] = useState([]);
    const [audio1, setAudio1] = useState({
        title: "",
        src: "",
        file: null
    });

    const [output, setOutput] = useState({
        title: "",
        src: ""
    });

    const [audio2, setAudio2] = useState({
        title: "",
        src: "",
        file: null
    });

    const [selected, setSelected] = useState("fadein");
    const [volume, setVolume] = useState(0.5);
    const [fadeIn, setFadeIn] = useState(0);
    const [fadeOut, setFadeOut] = useState(0);
    const [pitch, setPitch] = useState(1);
    const [speed, setSpeed] = useState(1);
    const handleVolumeChange = (value) => {
        setVolume(value);
    };
    const handleFadeInChange = (value) => {
        setFadeIn(value);
    };
    const handleFadeOutChange = (value) => {
        setFadeOut(value);
    };
    const handlePitchChange = (value) => {
        setPitch(value);
    };
    const handleSpeedChange = (value) => {
        setSpeed(value);
    };

    const renderEffectInput = () => {
        switch (selected) {
            case "fadein":
                return <FadeInInput fadeIn={fadeIn} onFadeInChange={handleFadeInChange} />;
            case "fadeout":
                return <FadeOutInput fadeOut={fadeOut} onFadeOutChange={handleFadeOutChange} />;
            case "pitch":
                return <PitchInput pitch={pitch} onPitchChange={handlePitchChange} />
            case "speed":
                return <SpeedInput speed={speed} onSpeedChange={handleSpeedChange} />
            case "volume":
                return <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />

            default:
                return null;
        }
    };

    const handleRadioClick = (event) => {
        setSelected(event.target.id);
    }

    const handleOpenModal = () => {
        // if output src is not empty
        if (output.src !== "") {
            setIsOpen(true);
        }
    };

    const handleFileUpload = async (event) => {
        const newFiles = event.target.files;
        const newAudioFiles = [];
      
        // Create an array of new audio files
        for (let i = 0; i < newFiles.length; i++) {
          const file = newFiles[i];
          const newAudio = {
            title: file.name,
            src: URL.createObjectURL(file),
            file: file
          };
          newAudioFiles.push(newAudio);
        }
      
        // If there are already files uploaded, append the new files to the existing files array
        const updatedFiles = files.length > 0 ? [...files, ...newFiles] : newFiles;
      
        if (newAudioFiles.length === 1) {
          if (!audio1.src) {
            setAudio1(newAudioFiles[0]);
          } else if (!audio2.src) {
            setAudio2(newAudioFiles[0]);
          } else {
            // Handle case where there are already 2 files uploaded
            console.log("Only 2 files can be uploaded at a time");
          }
        } else if (newAudioFiles.length > 1) {
          setAudio1(newAudioFiles[0]);
          setAudio2(newAudioFiles[1]);
          console.log("Only the first 2 files will be uploaded");
        }
      
        console.log(newAudioFiles);
        console.log(updatedFiles);
        setFiles(updatedFiles);
      };
      

    const handleFile1Removal = (async) => {
        setAudio1({
            title: "",
            src: "",
            file: null
        });
    }

    const handleFile2Removal = (async) => {
        setAudio2({
            title: "",
            src: "",
            file: null
        });
    }

    useEffect(() => {
        console.log(output.src)
    }, [output, mp3File, audio1, audio2, files]);

    const handlePreview = async (event) => {
        setIsLoading(true);
        setIsOpen2(true);
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`mp3Files`, files[i]);
            formData.append(`fadeinDuration`, fadeIn);
            formData.append(`pitch`, pitch);
            formData.append(`speed`, speed);
            formData.append(`fadeoutDuration`, fadeOut);
            formData.append(`volume`, volume)
        }

        const promise = dispatch(getUploadedTracks(formData));
        console.log(files)
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
            setIsLoading(false)
            setIsOpen2(false);
        }).catch(error => {
            setIsLoading(false)
            setIsOpen2(false);
            console.log(error); // this will log any errors that occurred during the request
        });
    }

    useEffect(() => {
        const getCurrentUserReleases = async () => {
            try {
                const response = await axios(fetchCurrentUserReleases());
                const { data } = response;
                setCurrentUserReleases(data?.data || []);
            } catch (error) {
                console.log("Error loading releases:", error);
            }
        };

        getCurrentUserReleases();
    }, []);

    const fetchLikedTracksList = async () => {
        const res = await axios(fetchLikedTracks());
        const { data } = res;

        if (res.status === 200 || res.status === 201) {
            setLikedTracks(data?.data || []);
        } else {
            // TODO: Handle error
        }
    };

    useEffect(() => {
        fetchLikedTracksList();
    }, []);

    return (
        <main className="main">
            <div className="container-fluid">
                <div className="row row--grid">
                    <div className="col-12">
                        <div className="row row--grid">
                            <div className="col-12 col-lg-6">
                                <div className="dashbox">
                                    <div className="dashbox__title">
                                        <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Liked tracks</h3>
                                        <div className="dashbox__wrap">
                                            <button className="dashbox__refresh" onClick={fetchLikedTracksList}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" /></svg></button>
                                            <a className="dashbox__more" href="#">View All</a>
                                        </div>
                                    </div>
                                    <div className="dashbox__list-wrap">
                                        <ul className="main__list main__list--dashbox dashbox__scroll">
                                            <TrackList tracks={likedTracks} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="dashbox">
                                    <div className="dashbox__title">
                                        <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Releases</h3>

                                        <div className="dashbox__wrap">
                                            <a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" /></svg></a>
                                            <a className="dashbox__more" href="#">View All</a>
                                        </div>
                                    </div>
                                    <div className="dashbox__list-wrap">
                                        <ul className="main__list main__list--dashbox dashbox__scroll">
                                            <TrackList tracks={currentUserReleases} />
                                        </ul>
                                    </div>
                                </div>
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
                                Upload Tracks
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
                        {audio1.title && audio1.src &&
                            <div className="dashbox">
                                <div className="dashbox__list-wrap">
                                    <div className="col-12">
                                        <div className="profile__meta">
                                            <div style={{ alignSelf: 'flex-end' }}>
                                                <FaRegTimesCircle onClick={handleFile1Removal} size="1.5em" color="white" />
                                            </div>
                                            <h3 style={{ alignSelf: 'flex-start' }}>{audio1.title}</h3>
                                        </div>

                                        <Waveform url={audio1.src} />
                                    </div>
                                </div>
                            </div>
                        }
                        {audio2.title && audio2.src &&
                            <div className="dashbox">
                                <div className="dashbox__list-wrap">
                                    <div className="col-12">
                                        <div className="profile__meta">
                                            <div style={{ alignSelf: 'flex-end' }}>
                                                <FaRegTimesCircle onClick={handleFile2Removal} size="1.5em" color="white" />
                                            </div>
                                            <h3 style={{ alignSelf: 'flex-start' }}>{audio2.title}</h3>
                                        </div>
                                        <Waveform url={audio2.src} />
                                    </div>
                                </div>
                            </div>
                        }

                        {audio1.src && audio2.src &&
                            <>
                                <div style={{ margin: '30px' }}>
                                    <div className="main__filter">
                                        <div className="slider-radio">
                                            <input type="radio" name="grade" id="fadein" checked={selected === "fadein"} onChange={handleRadioClick} />
                                            <label htmlFor="fadein" onClick={handleRadioClick}>
                                                <svg width='25' height='20' fill='#222227' xmlns='http://www.w3.org/2000/svg' style={{ marginRight: '4px' }}>
                                                    <path opacity='.2' d='M1 20c-.552 0-1-.446-1-.998v-4.215a1 1 0 0 1 1-1h.294c2.74.005 4.094-.163 5.705-.937 1.931-.927 3.601-2.653 5.035-5.476 1.37-2.697 2.882-4.55 4.583-5.718C18.64.267 20.274-.014 23.547.001H24a1 1 0 0 1 1 1V19.01c0 .552-.448.99-1 .99H1Z' fill={selected === "fadein" ? "#FFF" : "#EF3852"} />
                                                    <path d='M1 15.787a1 1 0 1 1 0-2h.294c2.74.005 4.094-.163 5.705-.937 1.931-.927 3.601-2.653 5.035-5.476 1.37-2.697 2.882-4.55 4.583-5.718C18.64.267 20.274-.014 23.547.001H24a1 1 0 1 1 0 2h-.462c-2.893-.013-4.197.211-5.79 1.304-1.402.962-2.702 2.558-3.93 4.975-1.626 3.199-3.607 5.247-5.953 6.373-1.962.942-3.55 1.14-6.574 1.134H1Z' fill={selected === "fadein" ? "#FFF" : "#EF3852"} />
                                                </svg>

                                                {selected === "fadein" ? "Fade in" : ""}
                                            </label>
                                            <input type="radio" name="grade" id="fadeout" checked={selected === "fadeout"} onChange={handleRadioClick} />
                                            <label htmlFor="fadeout" onClick={handleRadioClick}>
                                                <svg width='25' height='20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ marginRight: '4px' }}><path opacity='.3' d='M24 20c.552 0 1-.446 1-.998v-4.215a1 1 0 0 0-1-1h-.294c-2.74.005-4.094-.163-5.705-.937-1.931-.927-3.601-2.653-5.035-5.476-1.37-2.697-2.882-4.55-4.583-5.718C6.36.267 4.726-.014 1.453.001H1a1 1 0 0 0-1 1V19.01c0 .552.448.99 1 .99h23Z' fill={selected === "fadeout" ? "#FFF" : "#EF3852"} /><path d='M24 15.787a1 1 0 1 0 0-2h-.294c-2.74.005-4.094-.163-5.705-.937-1.931-.927-3.601-2.653-5.035-5.476-1.37-2.697-2.882-4.55-4.583-5.718C6.36.267 4.726-.014 1.453.001H1a1 1 0 1 0 0 2h.462c2.893-.013 4.197.211 5.79 1.304 1.402.962 2.702 2.558 3.93 4.975 1.626 3.199 3.607 5.247 5.953 6.373 1.962.942 3.55 1.14 6.574 1.134H24Z' fill={selected === "fadeout" ? "#FFF" : "#EF3852"} />
                                                </svg>
                                                {selected === "fadeout" ? "Fade out" : ""}
                                            </label>
                                            <input type="radio" name="grade" id="pitch" checked={selected === "pitch"} onChange={handleRadioClick} />
                                            <label htmlFor="pitch" onClick={handleRadioClick}>
                                                <svg width='20' height='20' fill={selected === "pitch" ? "#FFF" : "#EF3852"} xmlns='http://www.w3.org/2000/svg' style={{ marginRight: '4px' }}>
                                                    <g fill={selected === "pitch" ? "#FFF" : "#EF3852"}>
                                                        <path d='M9 2a1 1 0 1 1 2 0v16a1 1 0 1 1-2 0V2ZM1 9a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V9ZM14 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1ZM5 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5ZM18 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z' />
                                                    </g>
                                                </svg>
                                                {selected === "pitch" ? "Pitch" : ""}
                                            </label>
                                            <input type="radio" name="grade" id="speed" checked={selected === "speed"} onChange={handleRadioClick} />
                                            <label htmlFor="speed" onClick={handleRadioClick}>
                                                <FaRegClock size="1.5em" color={selected === "speed" ? "#FFF" : "#EF3852"} style={{ marginRight: '4px' }} /> {selected === "speed" ? "Speed" : ""}
                                            </label>
                                            <input type="radio" name="grade" id="volume" checked={selected === 'volume'} onChange={handleRadioClick} />
                                            <label htmlFor="volume" onClick={handleRadioClick}>
                                                <FaVolumeUp size="1.5em" color={selected === "volume" ? "#FFF" : "#EF3852"} style={{ marginRight: '4px' }} /> {selected === "volume" ? "Volume" : ""}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {renderEffectInput()}
                                <div className="col-3">
                                    <button onClick={handlePreview} className="sign__btn" type="button">Preview</button>
                                </div>
                            </>
                        }
                        {isOpen2 &&
                            <ProgressModal />
                        }
                        {output.src &&
                            <>

                                <Waveform url={output.src} />

                                <div className="col-3">
                                    <button onClick={handleOpenModal} className="sign__btn" type="button">Save</button>
                                </div>
                            </>
                        }

                        {isOpen &&
                            <AddTrack title={name} artists={artist} images={image} albums={album} genres={genre} mp3={output.src} onCloseModal={() => setIsOpen2(false)} />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TrackEditor;
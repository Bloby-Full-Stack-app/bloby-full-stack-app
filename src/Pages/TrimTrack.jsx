import React, { useEffect, useState } from 'react'
import { getTrimmedTrack, getUploadedTracks } from '../redux/actions/tracks';
import { useDispatch } from 'react-redux';
import AddTrack from '../components/Modals/AddTrack';
import { fetchCurrentUserReleases, fetchLikedTracks } from '../api/endpoints/tracks';
import axios from 'axios';
import TrackList from '../components/Track/TrackList';
import Waveform from '../components/Waveform';
import { FaRegTimesCircle } from 'react-icons/fa'
import ProgressModal from '../components/Modals/ProgressModal';

function TrimTrack() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [album, setAlbum] = useState('')
    const [mp3File, setMp3File] = useState('')
    const [currentUserReleases, setCurrentUserReleases] = useState([]);
    const [likedTracks, setLikedTracks] = useState([])
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [regionStart, setRegionStart] = useState(null)
    const [regionEnd, setRegionEnd] = useState(null)
    const [audio1, setAudio1] = useState({
        title: "",
        src: "",
        file: null
    });

    const [output, setOutput] = useState({
        title: "",
        src: "",
        file: null
    });

    const handleRegionChange = (region) => {
        setRegionStart(region.start);
        setRegionEnd(region.end - region.start);
        console.log(regionEnd)
      };

    const handleOpenModal = () => {
        if (output.src !== "") {
            setIsOpen(true);
        }
    };

    const addTrackToMergeList = (track) => {
        console.log(track)

        if (audio1.src === "") {
            setAudio1({
                title: track.name,
                src: track.mp3,
                file: track.file,
            })
        }
    };

    const handleFile1Removal = () => {
        setAudio1({
            title: "",
            src: "",
            file: null
        });
    };

    const handlePreview = async (event) => {
        setIsLoading(true);
        setIsOpen2(true);
        const formData = new FormData();
        formData.append(`file`, audio1.file)
        formData.append(`startTime`, regionStart)
        formData.append(`endTime`, regionEnd)

        const promise = dispatch(getTrimmedTrack(formData));
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
                src: res.data.mp3,
                file: res.data.file
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
    }, [regionStart, regionEnd]);

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
                                            <TrackList inPlaylist={true} addTrack={addTrackToMergeList} tracks={likedTracks} />
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
                                        <TrackList inPlaylist={true} addTrack={addTrackToMergeList} tracks={currentUserReleases} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row--grid">
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

                                        <Waveform hasRegion={true} url={audio1.src} selectedRegion={selectedRegion} onRegionChange={handleRegionChange} />
                                    </div>
                                </div>
                            </div>
                        }

                        {audio1.src &&
                            <>
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

                                <Waveform hasRegion={false} url={output.src} />

                                <div className="col-3">
                                    <button onClick={handleOpenModal} className="sign__btn" type="button">Save</button>
                                </div>
                            </>
                        }

                        {isOpen &&
                            <AddTrack title={name} artists={artist} images={image} albums={album} genres={genre} mp3={output.src} file={output.file} onCloseModal={() => setIsOpen(false)} />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TrimTrack;
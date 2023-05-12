import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArtistById } from '../api/endpoints/auth';
import TrackList from '../components/Track/TrackList';

function Artist() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const [artist, setArtist] = useState(null);
    const [artistReleases, setArtistReleases] = useState([])
    const [artistLikedTracks, setArtistLikedTracks] = useState([])
    const [artistSavedPlaylists, setArtistSavedPlaylists] = useState([])

    useEffect(() => {
        const getArtist = async () => {
            const promise = axios(getArtistById({ userId }));
            const res = await promise;
            const { data } = res;
            if (res.status === 200 || res.status === 201) {
                try {
                    setArtist(data?.data || {});
                    setArtistReleases(data?.data.releases || []);
                    setArtistLikedTracks(data?.data.likedTracks || []);
                } catch {

                }
            } else {

            }
        };

        if (userId && !artist) {
            getArtist();
        }

    }, [artist, userId]);

    return (
        <main className="main">
			<div className="container-fluid">
				<div className="row row--grid">
					<div className="col-12">
						<div className="profile">
							<div className="profile__user">
								<div className="profile__avatar">
									<img src="assets/img/avatar.svg" alt="" />
								</div>
                                {artist &&
								<div className="profile__meta">
									<h3>{artist.username}</h3>
									<span>{artist.role}</span>
								</div>
                                }
							</div>
							<ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a>
								</li>
									
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Releases</a>
										</li>
							</ul>

							
						</div>

						<div className="tab-content">
							<div className="tab-pane fade show active" id="tab-1" role="tabpanel">

								<div className="row row--grid">
									<div className="col-12 col-lg-6">
										<div className="dashbox">
											<div className="dashbox__title">
												<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Liked tracks</h3>

												<div className="dashbox__wrap">
													<button className="dashbox__refresh"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" /></svg></button>
													<a className="dashbox__more" href="#">View All</a>
												</div>
											</div>

											<div className="dashbox__list-wrap">
												<ul className="main__list main__list--dashbox">
													<TrackList tracks={artistLikedTracks} />
                                                    
												</ul>
											</div>
										</div>
									</div>
									<div className="col-12 col-lg-6">
										<div className="dashbox">
											<div className="dashbox__title">
												<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Playlists</h3>

												<div className="dashbox__wrap">
													<a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" /></svg></a>
													<a className="dashbox__more" href="#">View All</a>
												</div>
											</div>

											<div className="dashbox__list-wrap">
												<ul className="main__list main__list--dashbox dashbox__scroll">
													
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="tab-2" role="tabpanel">
								<div className="col-12">
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
												<TrackList tracks={artistReleases} />
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
    )
}

export default Artist;
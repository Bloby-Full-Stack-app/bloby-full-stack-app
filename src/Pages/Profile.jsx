import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Track from '../components/Track/Track';
import { createTrack, getUploadedTrack } from '../redux/actions/tracks';
import { useDispatch } from 'react-redux';
import { useSignOut } from 'react-auth-kit'
import { getUserPlaylists } from '../api/endpoints/playlist';
import axios from 'axios';
import PlaylistList from '../components/Playlist/PlaylistList';
import TrackList from '../components/Track/TrackList';
import { fetchCurrentUserReleases, fetchLikedTracks } from '../api/endpoints/tracks';
import { createEvent } from '../redux/actions/event';
import { getEvents } from '../api/endpoints/event';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function Profile() {
	const user = JSON.parse(localStorage.getItem("_auth_state"));
	const dispatch = useDispatch()
	const [likedTracks, setLikedTracks] = useState([])
	const [name, setName] = useState('')
	const [image, setImage] = useState('http://localhost:3000/assets/img/covers/cover.svg')
	const [artist, setArtist] = useState('')
	const [genre, setGenre] = useState('')
	const [album, setAlbum] = useState('')
	const [mp3File, setMp3File] = useState(null)
	const [title, setTitle] = useState('');
	const [about, setAbout] = useState('');
	const [date, setDate] = useState('');
	const [trackFile, setTrackFile] = useState({})
	const [eventImage, setEventImage] = useState(null);
	const [address, setAddress] = useState('')
	const [playlists, setPlaylists] = useState([]);
	const [currentUserReleases, setCurrentUserReleases] = useState([]);
	const [events, setEvents] = useState([])

	const signOut = useSignOut()

	const handleMp3Upload = async (event) => {
		const mp3File = event.target.files[0];
		setMp3File(event.target.files[0]);
		const formData = new FormData();
		formData.append("mp3", mp3File);
		const promise = dispatch(getUploadedTrack(formData));

		promise.then(res => {
			setName(res.data.name || '')
			setArtist(res.data.artist || '')
			setImage(res.data.Image || '')
			setGenre(res.data.genre || '')
			setAlbum(res.data.album || '')
			setMp3File(res.data.mp3)
			setTrackFile(res.data.file)
		}).catch(error => {
			console.log(error); // this will log any errors that occurred during the request
		});
	};

	const handleSubmit = async (event) => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('artist', artist);
		formData.append('genre', genre);
		formData.append('image', image);
		formData.append('album', album);
		formData.append('mp3', mp3File);
		formData.append('file', trackFile);
		dispatch(createTrack(formData));
	}

	const handleImageUpload = async (event) => {
		setEventImage(event.target.files[0]);
	}

	const handleAddEvent = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('title', title);
		formData.append('about', about);
		formData.append('Image', eventImage);
		formData.append('date', date);
		formData.append('address', address);
		dispatch(createEvent(formData));
	}

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

		const getCurrentUserReleases = async () => {
			try {
				const response = await axios(fetchCurrentUserReleases());
				const { data } = response;
				setCurrentUserReleases(data?.data || []);
			} catch (error) {
				console.log("Error loading releases:", error);
			}
		};

		const fetchEvents = async () => {
			try {
				const response = await axios(getEvents());
				const { data } = response;
				setEvents(data?.data || []);
			} catch (error) {
				console.log("Error loading events:", error);
			}
		};

		fetchEvents();
		getCurrentUserReleases();
		getCurrentUserPlaylists();
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
					<Breadcrumb />
					<div className="col-12">
						<div className="main__title main__title--page">
							<h1>Profile</h1>
						</div>
					</div>
				</div>

				<div className="row row--grid">
					<div className="col-12">
						<div className="profile">
							<div className="profile__user">
								<div className="profile__avatar">
									<img src="assets/img/avatar.svg" alt="" />
								</div>
								<div className="profile__meta">
									<h3>{user.username}</h3>
									<span>{user.role}</span>
								</div>
							</div>
							<ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a>
								</li>
								{user.role == 'Artist' &&
									<>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Releases</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Upload new track</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#tab-5" role="tab" aria-controls="tab-5" aria-selected="false">Events</a>
										</li>
									</>
								}
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">Settings</a>
								</li>
							</ul>

							<button onClick={() => signOut()} className="profile__logout" type="button">
								<span>Sign out</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" /></svg>
							</button>
						</div>

						<div className="tab-content">
							<div className="tab-pane fade show active" id="tab-1" role="tabpanel">

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
												<ul className="main__list main__list--dashbox">
													<TrackList tracks={likedTracks} />
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
													<PlaylistList />
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
											<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Your Releases</h3>

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
							<div className="tab-pane fade" id="tab-3" role="tabpanel">
								<div className="row row--grid">
									<div className="col-12">
										<form onSubmit={handleSubmit} className="sign__form sign__form--profile">
											<div className="release">
												<div className="release__content">
													<label className="sign__label">Cover</label>
													<div className="release__cover">
														<img src={image} alt="" onChange={e => setImage(e?.target?.src)} />
													</div>
													<div className="release__stat">
														<input id="mp3" name="mp3" type="file" onChange={handleMp3Upload} />
													</div>
												</div>
												<div className="release__list">
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Title</label>
															<input id="title" type="text" name="title" className="sign__input" placeholder="Title" value={name} onChange={e => setName(e?.target?.value)} />
														</div>
													</div>
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Artist</label>
															<input id="artist" type="text" name="artist" className="sign__input" placeholder="Artist" value={artist} onChange={e => setArtist(e?.target?.value)} />
														</div>
													</div>
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Genre</label>
															<input id="genre" type="text" name="genre" className="sign__input" placeholder="Genre" value={genre} onChange={e => setGenre(e?.target?.value)} />
														</div>
													</div>
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Album</label>
															<input id="album" type="text" name="album" className="sign__input" placeholder="Album" value={album} onChange={e => setAlbum(e?.target?.value)} />
														</div>
													</div>

												</div>
											</div>
											<div className="col-12">
												<button className="sign__btn" type="submit">Upload</button>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="tab-4" role="tabpanel">
								<div className="row row--grid">

									<div className="col-12 col-lg-6">
										<form action="#" className="sign__form sign__form--profile">
											<div className="row">
												<div className="col-12">
													<h4 className="sign__title">Profile details</h4>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">Login</label>
														<input id="username" type="text" name="username" className="sign__input" placeholder="User123" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">Email</label>
														<input id="email" type="text" name="email" className="sign__input" placeholder="email@email.com" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">First name</label>
														<input id="firstname" type="text" name="firstname" className="sign__input" placeholder="John" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">Last name</label>
														<input id="lastname" type="text" name="lastname" className="sign__input" placeholder="Doe" />
													</div>
												</div>

												<div className="col-12">
													<button className="sign__btn" type="button">Save</button>
												</div>
											</div>
										</form>
									</div>

									<div className="col-12 col-lg-6">
										<form action="#" className="sign__form sign__form--profile">
											<div className="row">
												<div className="col-12">
													<h4 className="sign__title">Change password</h4>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">Old password</label>
														<input id="oldpass" type="password" name="oldpass" className="sign__input" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">New password</label>
														<input id="newpass" type="password" name="newpass" className="sign__input" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">Confirm new password</label>
														<input id="confirmpass" type="password" name="confirmpass" className="sign__input" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label">Select</label>
														<select name="select" id="select" className="sign__select">
															<option value="0">Option</option>
															<option value="1">Option 2</option>
															<option value="2">Option 3</option>
															<option value="3">Option 4</option>
														</select>
													</div>
												</div>

												<div className="col-12">
													<button className="sign__btn" type="button">Change</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="tab-5" role="tabpanel">
								<div className="row row--grid">
									<div className="col-12">
										<form onSubmit={handleAddEvent} className="sign__form sign__form--profile">

											<div className="release">
												<div className="release__content">
													<label className="sign__label">Cover</label>
													<div className="release__cover">
														<img src={eventImage && URL.createObjectURL(eventImage)} alt="" />
													</div>
													<div className="release__stat">
														<input id="Image" name="Image" type="file" onChange={handleImageUpload} />
													</div>
												</div>
												<div className="release__list">
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Title</label>
															<input id="title" type="text" name="title" className="sign__input" placeholder="Title" value={title} onChange={e => setTitle(e?.target?.value)} />
														</div>
													</div>
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Date</label>
															<LocalizationProvider dateAdapter={AdapterDayjs}>
																<MobileDateTimePicker label={'"year"'} openTo="year" value={date}
																	onChange={(newValue) => setDate(newValue)} />
															</LocalizationProvider>
														</div>

													</div>
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">Address</label>
															<input id="address" type="text" name="address" className="sign__input" placeholder="Address" value={address} onChange={e => setAddress(e?.target?.value)} />
														</div>
													</div>
													<div className="col-12">
														<div className="sign__group">
															<label className="sign__label">About</label>
															<input id="artists" type="text" name="artists" className="sign__input" placeholder="Artists" value={about} onChange={e => setAbout(e?.target?.value)} />
														</div>
													</div>

												</div>
											</div>
											<div className="col-12">
												<button className="sign__btn">Add event</button>
											</div>

										</form>
									</div>
									<div className="col-12">
										<div className="dashbox">
											<div className="dashbox__table-wrap">
												<div className="dashbox__table-scroll">
													<table className="main__table">
														<thead>
															<tr>
																<th><a href="#">Cover <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																<th><a href="#" className="active">Title <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z" /></svg></a></th>
																<th><a href="#" className="active">Address <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z" /></svg></a></th>
																<th><a href="#" className="active">About <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a></th>

																<th><a href="#">Status <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
															</tr>
														</thead>
														<tbody>
															{events.map((event) => (
																<React.Fragment key={event._id}>
																	<>
																		<tr>
																			<td>
																				<div className="main__table-img">
																					<img src={event.image} alt="" />
																				</div>
																			</td>
																			<td>
																				<div className="main__table-text">{event.title}</div>
																			</td>
																			<td>
																				<div className="main__table-text">{event.address}</div>
																			</td>
																			<td>
																				<div className="main__table-text">{event.about}</div>
																			</td>
																			<td>
																				<div className="main__table-text main__table-text--green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg> Scheduled</div>
																			</td>
																		</tr>
																	</>
																</React.Fragment>
															))}
														</tbody>
													</table>
												</div>
											</div>
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

export default Profile;
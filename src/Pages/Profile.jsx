import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Track from '../components/Track/Track';
import { createTrack } from '../redux/actions/tracks';
import { useDispatch } from 'react-redux';

function Profile() {
	const user = JSON.parse(localStorage.getItem("_auth_state"));
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [filename, setFilename] = useState('')
	const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
	const [mp3, setMp3] = useState('')

	const handleSubmit = async (event) => {
        dispatch(createTrack({
            name: name,
			artist: artist,
            //filename: filename,
			mp3: mp3,
			genre: genre,
        }))
	}

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
									<span>Volna ID: 11104</span>
								</div>
							</div>

							<ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Orders</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Upload new track</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">Settings</a>
								</li>
							</ul>

							<button className="profile__logout" type="button">
								<span>Sign out</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" /></svg>
							</button>
						</div>

						<div className="tab-content">
							<div className="tab-pane fade show active" id="tab-1" role="tabpanel">
								<div className="row row--grid">
									<div className="col-12 col-lg-6 col-xl-3">
										<div className="stats">
											<span>My balance <a href="#modal-topup" className="open-modal">top up</a></span>
											<p><b>$90.99</b></p>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z" /></svg>
										</div>
									</div>

									<div className="col-12 col-lg-6 col-xl-3">
										<div className="stats">
											<span>Premium plan</span>
											<p><b>$39.99</b>/month</p>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z" /></svg>
										</div>
									</div>

									<div className="col-12 col-lg-6 col-xl-3">
										<div className="stats">
											<span>Minutes listened</span>
											<p><b>407 021</b></p>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z" /></svg>
										</div>
									</div>

									<div className="col-12 col-lg-6 col-xl-3">
										<div className="stats">
											<span>Promo code</span>

											<form action="#" className="stats__form">
												<input type="text" placeholder="__-__-__-__" />
												<button type="button">send</button>
											</form>
										</div>
									</div>
								</div>

								<div className="row row--grid">

									<div className="col-12 col-lg-6">
										<div className="dashbox">
											<div className="dashbox__title">
												<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg>Liked tracks</h3>

												<div className="dashbox__wrap">
													<a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" /></svg></a>
													<a className="dashbox__more" href="#">View All</a>
												</div>
											</div>

											<div className="dashbox__list-wrap">
												<ul className="main__list main__list--dashbox">
													{user.likedTracks.map(track => (

														<Track
															key={track.id}
															name={track.name}
															artist={track.artist}
															Image={track.Image}
															length={track.length}
														//onClick={() => handleClick(track)}
														/>
													))}
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
												<ul className="main__list main__list--dashbox">
													<Track image="assets/img/covers/cover4.jpg" artist="Playlist 1" title="34 songs" length="5:25:47" />
													<Track image="assets/img/covers/cover5.jpg" artist="Playlist 2" title="34 songs" length="5:25:47" />
													<Track image="assets/img/covers/cover9.jpg" artist="Playlist 3" title="34 songs" length="5:25:47" />
													<Track image="assets/img/covers/cover10.jpg" artist="Playlist 4" title="34 songs" length="5:25:47" />
													<Track image="assets/img/covers/cover11.jpg" artist="Playlist 5" title="34 songs" length="5:25:47" />
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="tab-2" role="tabpanel">
								<div className="row row--grid">
									<div className="col-12">
										<div className="dashbox">
											<div className="dashbox__table-wrap">
												<div className="dashbox__table-scroll">
													<table className="main__table">
														<thead>
															<tr>
																<th>№</th>
																<th><a href="#">Product <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																<th><a href="#" className="active">Title <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z" /></svg></a></th>
																<th><a href="#" className="active">Date <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg></a></th>
																<th><a href="#">Quantity <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																<th><a href="#">Total <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
																<th><a href="#">Status <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z" /></svg></a></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div className="main__table-text main__table-text--number"><a href="#modal-info" className="open-modal">631</a></div>
																</td>
																<td>
																	<div className="main__table-img">
																		<img src="assets/img/store/item3.jpg" alt="" />
																	</div>
																</td>
																<td>
																	<div className="main__table-text"><a href="#">Music Blank</a></div>
																</td>
																<td>
																	<div className="main__table-text">Aug 21, 2021</div>
																</td>
																<td>
																	<div className="main__table-text">17</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--price">$67.83</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg>  Delivered</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="main__table-text main__table-text--number"><a href="#modal-info" className="open-modal">632</a></div>
																</td>
																<td>
																	<div className="main__table-img">
																		<img src="assets/img/store/item3.jpg" alt="" />
																	</div>
																</td>
																<td>
																	<div className="main__table-text"><a href="#">Music Blank</a></div>
																</td>
																<td>
																	<div className="main__table-text">Aug 21, 2021</div>
																</td>
																<td>
																	<div className="main__table-text">17</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--price">$67.83</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z" /></svg> Canceled</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="main__table-text main__table-text--number"><a href="#modal-info" className="open-modal">708</a></div>
																</td>
																<td>
																	<div className="main__table-img">
																		<img src="assets/img/store/item4.jpg" alt="" />
																	</div>
																</td>
																<td>
																	<div className="main__table-text"><a href="#">Headphones ZR-991</a></div>
																</td>
																<td>
																	<div className="main__table-text">Aug 14, 2021</div>
																</td>
																<td>
																	<div className="main__table-text">1</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--price">$199</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--grey"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" /></svg> On the way</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="main__table-text main__table-text--number"><a href="#modal-info" className="open-modal">750</a></div>
																</td>
																<td>
																	<div className="main__table-img">
																		<img src="assets/img/store/item1.jpg" alt="" />
																	</div>
																</td>
																<td>
																	<div className="main__table-text"><a href="#">Vinyl Player</a></div>
																</td>
																<td>
																	<div className="main__table-text">Aug 5, 2021</div>
																</td>
																<td>
																	<div className="main__table-text">1</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--price">$11 899</div>
																</td>
																<td>
																	<div className="main__table-text main__table-text--green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg> Delivered</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="tab-3" role="tabpanel">
								<div className="row row--grid">
									<div className="col-12">
										<form onSubmit={handleSubmit} className="sign__form sign__form--profile">
											<div className="row">
												<div className="col-12">
													<h4 className="sign__title">Upload track</h4>
												</div>
												<div className="release">
													<div className="release__content">
														<label className="sign__label" for="image">Cover</label>
														<div className="release__cover">
															<img src="assets/img/covers/cover4.jpg" alt="" />
														</div>
														<div className="release__stat">
															<input id="filename" type="file" name="filename" onChange={e => setFilename(e?.target?.value)}/>
														</div>
													</div>
													<div className="release__list">
														<div className="col-12">
															<div className="sign__group">
																<label className="sign__label" for="title">Title</label>
																<input id="title" type="text" name="title" className="sign__input" placeholder="Title" value={name} onChange={e => setName(e?.target?.value)}/>
															</div>
														</div>
														<div className="col-12">
															<div className="sign__group">
																<label className="sign__label" for="artist">Artist</label>
																<input id="artist" type="text" name="artist" className="sign__input" placeholder="Artist" value={artist} onChange={e => setArtist(e?.target?.value)}/>
															</div>
														</div>
														<div className="col-12 col-md-6 col-lg-12">
															<div className="sign__group">
																<label className="sign__label" for="genre">Genre</label>
																<input id="genre" type="text" name="genre" className="sign__input" placeholder="Genre" value={genre} onChange={e => setGenre(e?.target?.value)}/>
															</div>
														</div>
														<div className="col-12 col-md-6 col-lg-12">
															<div className="sign__group">
																<label className="sign__label" for="genre">Track link</label>
																<input id="mp3" type="text" name="mp3" className="sign__input" value={mp3} placeholder="Track link (.mp3)" onChange={e => setMp3(e?.target?.value)}/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-12">
													<button className="sign__btn" type="submit">Upload</button>
												</div>
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
														<label className="sign__label" for="username">Login</label>
														<input id="username" type="text" name="username" className="sign__input" placeholder="User123" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label" for="email">Email</label>
														<input id="email" type="text" name="email" className="sign__input" placeholder="email@email.com" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label" for="firstname">First name</label>
														<input id="firstname" type="text" name="firstname" className="sign__input" placeholder="John" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label" for="lastname">Last name</label>
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
														<label className="sign__label" for="oldpass">Old password</label>
														<input id="oldpass" type="password" name="oldpass" className="sign__input" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label" for="newpass">New password</label>
														<input id="newpass" type="password" name="newpass" className="sign__input" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label" for="confirmpass">Confirm new password</label>
														<input id="confirmpass" type="password" name="confirmpass" className="sign__input" />
													</div>
												</div>

												<div className="col-12 col-md-6 col-lg-12 col-xl-6">
													<div className="sign__group">
														<label className="sign__label" for="select">Select</label>
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
							
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Profile;
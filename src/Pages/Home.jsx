import React, { useEffect, useState } from 'react'
import Release from '../components/Releases'
import UpcomingEvent from '../components/UpcomingEvent'
import Artist from '../components/Artist'
import Track from '../components/Track/Track'
import Podcast from '../components/Podcast'
import Product from '../components/Product'
import News from '../components/News'
import TrackList from '../components/Track/TrackList'
import { fetchTracks } from '../api/endpoints/tracks'
import axios from 'axios'


function Home () {
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		const fetchTracksList = async () => {
		  const res = await axios(fetchTracks());
		  const { data } = res;
	
		  if (res.status === 200 || res.status === 201) {
			setTracks(data?.data || []);
		  } else {
			// TODO: Handle error
		  }
		};
	
		fetchTracksList();
	  }, []);
	return (
		<main className="main">
			<div className="container-fluid">
				<section className="row">
					<div className="col-12">
						<div className="hero owl-carousel" id="hero">
							<div className="hero__slide" data-bg="assets/img/home/slide1.jpg">
								<h1 className="hero__title">Record Label & Music streaming</h1>
								<p className="hero__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
								<div className="hero__btns">
									<a href="#" className="hero__btn hero__btn--green">Buy now</a>
									<a href="#" className="hero__btn">Learn more</a>
								</div>
							</div>
							<div className="hero__slide" data-bg="assets/img/home/slide2.jpg">
								<h2 className="hero__title">Metallica and Slipknot feature in trailer for ‘Long Live Rock’ documentary</h2>
								<p className="hero__text">It also features Rage Against The Machine, Guns N' Roses and a number of others</p>
								<div className="hero__btns">
									<a href="#" className="hero__btn hero__btn--green">Learn more</a>
									<a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="hero__btn hero__btn--video open-video"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg> Watch video</a>
								</div>
							</div>
							<div className="hero__slide" data-bg="assets/img/home/slide3.jpg">
								<h2 className="hero__title">New Artist of Our Label</h2>
								<p className="hero__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
								<div className="hero__btns">
									<a href="#" className="hero__btn">Learn more</a>
								</div>
							</div>
						</div>
						<button className="main__nav main__nav--hero main__nav--prev" data-nav="#hero" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
						<button className="main__nav main__nav--hero main__nav--next" data-nav="#hero" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
					</div>
				</section>
				<section className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>New Releases</h2>

							<a href="releases.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
						</div>
					</div>
					<Release cover="assets/img/covers/cover1.jpg" title="Space Melody" artist="Alan Walker" artist2="Maddix" />
					<Release cover="assets/img/covers/cover11.jpg" title="Like That" artist="Stefflon Don" />
					<Release cover="assets/img/covers/cover12.jpg" title="One Big Country" artist="LOCASH" />
				</section>
				<section className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>Upcoming Events</h2>

							<a href="events.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
						</div>
					</div>
					<div className="col-12">
						<div className="main__carousel-wrap">
							<div className="main__carousel main__carousel--events owl-carousel" id="events">
								<UpcomingEvent img="assets/img/events/event1.jpg" soldOut={false} date="March 16, 2021" time="7:00 pm" name="Big Daddy" address="71 Pilgrim Avenue Chevy Chase, MD 20815" />
								<UpcomingEvent img="assets/img/events/event2.jpg" soldOut={true} date="March 16, 2021" time="5:00 pm" name="Big Daddy" address="71 Pilgrim Avenue Chevy Chase, MD 20815" />
								<UpcomingEvent img="assets/img/events/event3.jpg" soldOut={false} date="March 16, 2021" time="7:00 pm" name="Big Daddy" address="71 Pilgrim Avenue Chevy Chase, MD 20815" />
								<UpcomingEvent img="assets/img/events/event4.jpg" soldOut={false} date="April 23, 2023" time="9:30 pm" name="Rocky Pub" address="514 S. Magnolia St. Orlando, FL 32806" />
							</div>
							<button className="main__nav main__nav--prev" data-nav="#events" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
							<button className="main__nav main__nav--next" data-nav="#events" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
						</div>
					</div>
				</section>
				<section className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>Artists</h2>

							<a href="artists.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
						</div>
					</div>
					<div className="col-12">
						<div className="main__carousel-wrap">
							<div className="main__carousel main__carousel--artists owl-carousel" id="artists">
								<Artist img="assets/img/artists/artist1.jpg" name="BENEE Featuring" />
								<Artist img="assets/img/artists/artist2.jpg" name="Jason Aldean" />
								<Artist img="assets/img/artists/artist3.jpg" name="John Doe" />
								<Artist img="assets/img/artists/artist4.jpg" name="Megan Thee" />
								<Artist img="assets/img/artists/artist5.jpg" name="Chawki Ferroukhi" />
								<Artist img="assets/img/artists/artist6.jpg" name="NLE CHOPPA" />
								<Artist img="assets/img/artists/artist7.jpg" name="NAQQA" />
								<Artist img="assets/img/artists/artist8.jpg" name="Balti" />
							</div>
							<button className="main__nav main__nav--prev" data-nav="#artists" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
							<button className="main__nav main__nav--next" data-nav="#artists" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
						</div>
					</div>
				</section>
				<section className="row row--grid">
					<div className="col-12 col-md-6 col-xl-4">
						<div className="row row--grid">
							<div className="col-12">
								<div className="main__title">
									<h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg><a href="#">Top singles</a></h2>
								</div>
							</div>
							<div className="col-12">
								<ul className="main__list">
									<Track number="1" top="true" rate="4" Image="assets/img/covers/cover1.jpg" artist="Cinematic" title="AudioPizza" length="2:35" />
									<Track number="2" top="true" rate="10" Image="assets/img/covers/cover2.jpg" artist="Chawki" title="AudioPizza" length="3:35" />
									<Track number="3" top="true" rate="12" Image="assets/img/covers/cover3.jpg" artist="AkremMag" title="EpicMotivational" length="4:21" />
									<Track number="4" top="true" rate="23" Image="assets/img/covers/cover4.jpg" artist="Samara" title="Minimum" length="3:47" />
									<Track number="5" top="true" rate="18" Image="assets/img/covers/cover5.jpg" artist="Balti" title="XDXD" length="3:47" />
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-xl-8">
						<div className="row row--grid">
							<div className="col-12">
								<div className="main__title">
									<h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.12,2.21A1,1,0,0,0,18.26,2l-8,2A1,1,0,0,0,9.5,5V15.35A3.45,3.45,0,0,0,8,15a3.5,3.5,0,1,0,3.5,3.5V10.78L18.74,9l.07,0L19,8.85l.15-.1a.93.93,0,0,0,.13-.15.78.78,0,0,0,.1-.15.55.55,0,0,0,.06-.18.58.58,0,0,0,0-.19.24.24,0,0,0,0-.08V3A1,1,0,0,0,19.12,2.21ZM8,20a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,8,20ZM17.5,7.22l-6,1.5V5.78l6-1.5Z" /></svg><a href="#">New singles</a></h2>
								</div>
							</div>
							<div className="col-12">
								<ul className="main__list">
									<TrackList tracks={tracks} limit="5" />
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>Podcasts</h2>

							<a href="podcasts.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
						</div>
					</div>
					<div className="col-12">
						<div className="main__carousel-wrap">
							<div className="main__carousel main__carousel--podcasts owl-carousel" id="podcasts">
								<Podcast image="assets/img/live/1.jpg" live="true" viewers="6.7K" title="Beautiful Stories From Anonymous People" />
								<Podcast image="assets/img/live/2.jpg" live="true" viewers="1.7K" title="Song Exploder" />
								<Podcast image="assets/img/live/3.jpg" live="true" viewers="924" title="Broken Record" />
								<Podcast image="assets/img/live/4.jpg" live="true" viewers="638" title="Desert Island Discs" />
								<Podcast image="assets/img/live/5.jpg" viewers="588" title="Riffs On Riffs" />
								<Podcast image="assets/img/live/6.jpg" viewers="924" title="Popcast" />
								<Podcast image="assets/img/live/7.jpg" viewers="277" title="Rolling Stone Music Now" />
								<Podcast image="assets/img/live/8.jpg" viewers="1.7K" title="Song vs. Song" />
								<Podcast image="assets/img/live/9.jpg" viewers="4.9K" title="Disgraceland" />
							</div>

							<button className="main__nav main__nav--prev" data-nav="#podcasts" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
							<button className="main__nav main__nav--next" data-nav="#podcasts" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
						</div>
					</div>
				</section>
				<section className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>Products</h2>

							<a href="store.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
						</div>
					</div>
					<div className="col-12">
						<div className="main__carousel-wrap">
							<div className="main__carousel main__carousel--store owl-carousel" id="store">
								<Product image="assets/img/store/item1.jpg" name="Vinyl Player" price="1 099" new="true" />
								<Product image="assets/img/store/item2.jpg" name="Vinyl Player" price="1 099" />
								<Product image="assets/img/store/item3.jpg" name="Vinyl Player" price="1 099" new="true" />
								<Product image="assets/img/store/item4.jpg" name="Vinyl Player" price="1 099" />
								<Product image="assets/img/store/item5.jpg" name="Vinyl Player" price="1 099" />
								<Product image="assets/img/store/item6.jpg" name="Vinyl Player" price="1 099" />
								<Product image="assets/img/store/item7.jpg" name="Vinyl Player" price="1 099" />
								<Product image="assets/img/store/item8.jpg" name="Vinyl Player" price="1 099" />
							</div>

							<button className="main__nav main__nav--prev" data-nav="#store" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></button>
							<button className="main__nav main__nav--next" data-nav="#store" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></button>
						</div>
					</div>
				</section>
				<section className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>News</h2>

							<a href="news.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
						</div>
					</div>
					<News image="assets/img/posts/1.jpg" backstage="true" type="Music" title="Foo Fighters share new live version of ‘No Son Of Mine’" date="2 hours ago" comments="61" />
					<News image="assets/img/posts/2.jpg" type="Music" title="Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig" date="3 hours ago" comments="18" />
					<News image="assets/img/posts/3.jpg" type="Features" title="Foo Fighters share new live version of ‘No Son Of Mine’" date="2 hours ago" comments="61" />
				</section>
			</div>
		</main>
	)
}

export default Home
import React from 'react'
import Artist from '../components/Artist';
import UpcomingEvent from '../components/UpcomingEvent';
import Breadcrumb from '../components/Breadcrumb';

function Artists() {
	return (
		<main className="main">
			<div className="container-fluid">
				<div className="row row--grid">
					<Breadcrumb />
					<div className="col-12">
						<div className="main__title main__title--page">
							<h1>Artists</h1>
						</div>
					</div>
				</div>

				<div className="row row--grid">
					<div className="col-12">
						<div className="main__filter">
							<form action="#" className="main__filter-search">
								<input type="text" placeholder="Search..." />
								<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
							</form>

							<div className="main__filter-wrap">
								<select className="main__select" name="genres">
									<option value="all">All artists</option>
									<option value="legacy">Legacy artists</option>
									<option value="active">Active artists</option>
								</select>

								<select className="main__select" name="years">
									<option value="All genres">All genres</option>
									<option value="1">Alternative</option>
									<option value="2">Blues</option>
									<option value="3">classNameical</option>
									<option value="4">Country</option>
									<option value="5">Electronic</option>
									<option value="6">Hip-Hop/Rap</option>
									<option value="7">Indie</option>
									<option value="8">Jazz</option>
									<option value="8">Latino</option>
									<option value="8">R&B/Soul</option>
									<option value="8">Rock</option>
								</select>
							</div>

							<div className="slider-radio">
								<input type="radio" name="grade" id="featured" /><label>Featured</label>
								<input type="radio" name="grade" id="popular" /><label>Popular</label>
								<input type="radio" name="grade" id="newest" /><label>Newest</label>
							</div>
						</div>

						<div className="row row--grid">
							<Artist img="assets/img/artists/artist4.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist3.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist5.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist6.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist8.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist1.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist3.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist4.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist5.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist3.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist1.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist6.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist7.jpg" name="BENEE Featuring" />
							<Artist img="assets/img/artists/artist8.jpg" name="BENEE Featuring" />
						</div>

						<button className="main__load" type="button">Load more</button>
					</div>
				</div>

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
			</div>
		</main>
	)
}

export default Artists;
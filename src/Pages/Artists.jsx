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



							<div className="slider-radio">
								<input type="radio" name="grade" id="featured" /><label>Featured</label>
								<input type="radio" name="grade" id="popular" /><label>Popular</label>
								<input type="radio" name="grade" id="newest" /><label>Newest</label>
							</div>
						</div>

						<div className="row row--grid">
							<div className="col-6 col-sm-4 col-md-3 col-xl-2">
								<Artist img="assets/img/artists/artist4.jpg" name="BENEE Featuring" />
							</div>
							<div className="col-6 col-sm-4 col-md-3 col-xl-2">
								<Artist img="assets/img/artists/artist3.jpg" name="BENEE Featuring" />
							</div>
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
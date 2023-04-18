import React from 'react'
import UpcomingEvent from '../components/UpcomingEvent';
import Release from '../components/Releases';
import Breadcrumb from '../components/Breadcrumb';
import Track from '../components/Track/Track';
import ReleaseList from '../components/Release/ReleaseList';

function Releases () {
    return (
        <main className="main">
            <div className="container-fluid">
                <div className="row row--grid">
                    <Breadcrumb />
                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1>Releases</h1>
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
                                <input type="radio" name="grade" id="featured" checked="checked" /><label for="featured">Featured</label>
                                <input type="radio" name="grade" id="popular" /><label for="popular">Popular</label>
                                <input type="radio" name="grade" id="newest" /><label for="newest">Newest</label>
                            </div>
                        </div>

                        <div className="row row--grid">
                            <ReleaseList />
                        </div>

                        <button className="main__load" type="button">Load more</button>
                    </div>
                </div>

                <section className="row row--grid">
                    <div className="col-12 col-xl-8">
                        <div className="row row--grid">
                            <div className="col-12">
                                <div className="main__title">
                                    <h2><a href="#">Upcoming events</a></h2>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <UpcomingEvent img="assets/img/events/event1.jpg" soldOut={false} date="March 16, 2021" time="7:00 pm" name="Big Daddy" address="71 Pilgrim Avenue Chevy Chase, MD 20815" />
                            </div>

                            <div className="col-12 col-md-6">
                                <UpcomingEvent img="assets/img/events/event1.jpg" soldOut={false} date="March 16, 2021" time="7:00 pm" name="Big Daddy" address="71 Pilgrim Avenue Chevy Chase, MD 20815" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-4">
                        <div className="row row--grid">
                            <div className="col-12">
                                <div className="main__title">
                                    <h2><a href="#">New Singles</a></h2>
                                </div>
                            </div>

                            <div className="col-12">
                                <ul className="main__list">
                                    <Track Image="assets/img/covers/cover6.jpg" artist="Jason Aldean" name="Got What I Got" length="3:47" />
                                    <Track Image="assets/img/covers/cover7.jpg" artist="Jason Aldean" name="Got What I Got" length="3:47" />
                                    <Track Image="assets/img/covers/cover8.jpg" artist="Jason Aldean" name="Got What I Got" length="3:47" />
                                    <Track Image="assets/img/covers/cover9.jpg" artist="Jason Aldean" name="Got What I Got" length="3:47" />
                                    <Track Image="assets/img/covers/cover5.jpg" artist="Jason Aldean" name="Got What I Got" length="3:47" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Releases;
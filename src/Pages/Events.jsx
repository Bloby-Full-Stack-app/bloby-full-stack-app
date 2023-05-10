import React from 'react'
import Artist from '../components/Artist';
import UpcomingEvent from '../components/UpcomingEvent';
import Breadcrumb from '../components/Breadcrumb';

function Events() {
    return (
        <main className="main">
            <div className="container-fluid">
                <div className="row row--grid">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Events</li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1>Events</h1>
                        </div>
                    </div>
                </div>

                <div className="row row--grid">
                    <div className="col-12">
                        <div className="main__filter">
                            <form action="#" className="main__filter-search">
                                <input type="text" placeholder="Date, place, etc." />
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                            </form>

                            <div className="slider-radio">
                                <input type="radio" name="grade" id="upcoming" /><label for="upcoming">Upcoming</label>
                                <input type="radio" name="grade" id="past" /><label for="past">Past</label>
                                <input type="radio" name="grade" id="free" /><label for="free">Free</label>
                            </div>
                        </div>

                        <div className="row row--grid">
                            <div className="col-12 col-md-6 col-xl-4">
                                <UpcomingEvent img="assets/img/events/event1.jpg" soldOut={false} date="March 16, 2021" time="7:00 pm" name="Big Daddy" address="71 Pilgrim Avenue Chevy Chase, MD 20815" />
                            </div>


                        </div>

                        <div className="row row--grid">
                            <div className="col-12">
                                <button className="main__load" type="button">Load more</button>
                            </div>
                        </div>
                    </div>
                    <form action="#" id="modal-ticket" className="zoom-anim-dialog mfp-hide modal modal--form">
                        <button className="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>

                        <h4 className="sign__title">To buy tickets</h4>

                        <div className="sign__group sign__group--row">
                            <label className="sign__label" for="value">Choose ticket:</label>
                            <select className="sign__select" name="value" id="value">
                                <option value="50">Regular - TND 49</option>
                                <option value="100">VIP Light - TND 99</option>
                                <option value="200">VIP - TND 169</option>
                            </select>

                            <span className="sign__text sign__text--small">You can spend money from your account on the renewal of the connected packages, or on the purchase of goods on our website.</span>
                        </div>

                        <button className="sign__btn" type="button">Buy</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Events;
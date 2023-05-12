import React, { useEffect, useState } from 'react'
import Artist from '../components/Artist';
import UpcomingEvent from '../components/UpcomingEvent';
import Breadcrumb from '../components/Breadcrumb';
import { fetchSavedEvents, getEvents } from '../api/endpoints/event';
import axios from 'axios';
import { addEventToFavorites } from '../redux/actions/event';
import { useDispatch } from 'react-redux';

function Events() {

    const [events, setEvents] = useState([])
    const [savedEvents, setSavedEvents] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchSavedEventsList = async () => {
            const res = await axios(fetchSavedEvents());
            const { data } = res;
            if (res.status === 200 || res.status === 201) {
                setSavedEvents(data?.data?.map(event => event._id) || []);
            } else {
                // TODO: Handle error
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
        

        fetchSavedEventsList();
        fetchEvents();
    }, []);

    useEffect(() => {

    }, [savedEvents]);

    const handleAddToFavorites = (eventId) => {
        return async (event) => {
            event.preventDefault();

            const promise = dispatch(addEventToFavorites(eventId));

            promise.then(res => {
                const updateSavedEvents = res.isSaved
                    ? [...savedEvents, eventId]
                    : savedEvents.filter(id => id !== eventId);

                setSavedEvents(updateSavedEvents);
            });
        };
    };
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
                                <input type="radio" name="grade" id="upcoming" /><label>Upcoming</label>
                                <input type="radio" name="grade" id="past" /><label>Past</label>
                                <input type="radio" name="grade" id="free" /><label>Free</label>
                            </div>
                        </div>

                        <div className="row row--grid">
                            {events.map((event) => (
                                <React.Fragment key={event._id}>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <UpcomingEvent id={event._id} handleAddToFavorites={handleAddToFavorites(event._id)} isSaved={savedEvents.includes(event._id)} img={event.image} soldOut={false} date={new Date(event.date).toLocaleString()} time="7:00 pm" name={event.title} address={event.address} />
                                    </div>
                                </React.Fragment>
                            ))}


                        </div>

                        <div className="row row--grid">
                            <div className="col-12">
                                <button className="main__load" type="button">Load more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Events;
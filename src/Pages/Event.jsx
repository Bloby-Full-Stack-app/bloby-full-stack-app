import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSavedEvents, getEventById, getEvents } from '../api/endpoints/event';
import { addEventToFavorites } from '../redux/actions/event';
import UpcomingEvent from '../components/UpcomingEvent';

function Event() {
    const user = JSON.parse(localStorage.getItem("_auth_state"));
    const { eventId } = useParams();
    const dispatch = useDispatch();
    const [event, setEvent] = useState(null);
    const [comments, setComments] = useState([]);
    const [events, setEvents] = useState([])
    const [savedEvents, setSavedEvents] = useState([])
    // check if the playlist belongs to the current user
    useEffect(() => {
        const getEvent = async () => {
            const promise = axios(getEventById({ eventId }));
            const res = await promise;
            const { data } = res;
            if (res.status === 200 || res.status === 201) {
                try {
                    setEvent(data?.data || {});
                    console.log(event);
                } catch {

                }
            } else {

            }
        };
        // Only call event if eventId is not null
        if (eventId && !event) {
            getEvent();
        }

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

    }, [event, eventId]);

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
                <section className="row">
                    <div className="col-12">
                        {event &&
                            <div className="hero__slide" data-bg={event.image}>
                                <h1 className="hero__title">{event.title}</h1>
                                <p className="hero__text">{event.address}</p>
                                <div className="hero__btns">
                                    <a href="#modal-ticket" className="hero__btn hero__btn--green open-modal">Buy ticket</a>
                                    <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" className="hero__btn open-map">View location</a>
                                </div>
                            </div>
                        }
                    </div>
                </section>

                <div className="row row--grid">
                    <div className="col-12 col-xl-10">
                        <div className="article">
                            {event &&
                                <>
                                    <div className="article__content">
                                        <div className="article__meta">
                                            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" className="article__place open-map"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.46,9.63A8.5,8.5,0,0,0,7.3,3.36,8.56,8.56,0,0,0,3.54,9.63,8.46,8.46,0,0,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05ZM12,6a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,12,6Zm0,7a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,13Z" /></svg> {event.address}</a>

                                            <span className="article__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" /></svg> {new Date(event.date).toLocaleString()}</span>
                                        </div>
                                        <p>{event.about}</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <ul>
                                            <li>Theme Forest</li>
                                            <li>Graphic River</li>
                                            <li>Audio Jungle</li>
                                            <li>3D Ocean</li>
                                            <li>Code Canayon</li>
                                        </ul>
                                    </div>
                                </>
                            }
                            <div className="share">
                                <a href="#" className="share__link share__link--fb"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z" /></svg> share</a>
                                <a href="#" className="share__link share__link--tw"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z" /></svg> tweet</a>
                                <a href="#" className="share__link share__link--vk"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.78479 8.92255C8.78479 8.92255 9.07355 8.89106 9.22145 8.73512C9.35684 8.59224 9.35214 8.32262 9.35214 8.32262C9.35214 8.32262 9.33414 7.06361 9.92967 6.87771C10.5166 6.69489 11.2702 8.09524 12.07 8.63372C12.6741 9.04085 13.1327 8.95174 13.1327 8.95174L15.2699 8.92255C15.2699 8.92255 16.3874 8.85495 15.8576 7.99231C15.8137 7.92164 15.5485 7.35397 14.269 6.1879C12.9284 4.9673 13.1084 5.16472 14.7221 3.05305C15.705 1.76715 16.0978 0.982093 15.975 0.646407C15.8584 0.325317 15.1353 0.410582 15.1353 0.410582L12.7297 0.425177C12.7297 0.425177 12.5513 0.401365 12.419 0.478949C12.2899 0.554996 12.2061 0.732441 12.2061 0.732441C12.2061 0.732441 11.8258 1.72721 11.3179 2.57372C10.2466 4.35892 9.81855 4.4534 9.64326 4.34279C9.23554 4.08392 9.33727 3.30424 9.33727 2.75039C9.33727 1.01973 9.60491 0.298431 8.81687 0.111769C8.5555 0.0495478 8.36299 0.00883541 7.6939 0.00192196C6.83543 -0.00652779 6.10921 0.00499461 5.69758 0.202411C5.42369 0.333767 5.2124 0.627203 5.34152 0.644103C5.50038 0.664843 5.86036 0.739354 6.0513 0.994383C6.29781 1.32392 6.2892 2.06289 6.2892 2.06289C6.2892 2.06289 6.43084 4.10005 5.95818 4.35277C5.6342 4.52638 5.1897 4.17226 4.2342 2.55221C3.7451 1.7226 3.37573 0.805416 3.37573 0.805416C3.37573 0.805416 3.30451 0.634117 3.17696 0.541938C3.02279 0.430555 2.80759 0.395987 2.80759 0.395987L0.521729 0.410582C0.521729 0.410582 0.178185 0.4198 0.0521924 0.566519C-0.0597138 0.696338 0.0435842 0.965961 0.0435842 0.965961C0.0435842 0.965961 1.8333 5.07638 3.86013 7.1481C5.71871 9.04699 7.8285 8.92255 7.8285 8.92255H8.78479Z" /></svg> share</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row row--grid">
                    <div className="col-12">
                        <div className="main__title">
                            <h2>Other Events</h2>

                            <a href="events.html" className="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row row--grid">
                            {events.slice(0,3).map((event) => (
                                <React.Fragment key={event._id}>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <UpcomingEvent id={event._id} handleAddToFavorites={handleAddToFavorites(event._id)} isSaved={savedEvents.includes(event._id)} img={event.image} soldOut={false} date="March 16, 2021" time="7:00 pm" name={event.title} address={event.address} />
                                    </div>
                                </React.Fragment>
                            ))}


                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Event;
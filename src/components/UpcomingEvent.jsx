import React, { useState } from 'react'
import BuyTicketModal from './Modals/BuyTicketModal';
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function UpcomingEvent(props) {
    //const [soldOut, setSoldOut] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const handleBuyTickets = () => {
        // TODO: HANDLE BUY TICKETS
    }
    const eventImageStyle = {
        width: '100%',
        height: '100%',
        //paddingTop: '56.25%',
        overflow: 'hidden',
    };

    const eventImageInnerStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    return (
        <>
            <div className="event">
                <div style={eventImageStyle}>
                    <img src={props.img} alt="" style={eventImageInnerStyle} />
                </div>
                {props.soldOut ? (
                    <span className="event__out">Sold out</span>
                ) : (
                    <button onClick={handleOpenModal} href="#modal-ticket" className="event__ticket open-modal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z" />
                        </svg> Buy ticket
                    </button>
                )}
                <a type="button" onClick={props.handleAddToFavorites} style={{
                    position: 'relative', zIndex: '1', position: 'absolute',
                    top: '8%',
                    right: '5px',
                    transform: '',
                }}>
                    {props.isSaved ? (
                        <FaStar style={{ color: '#FFCA28', width: '1.5em', height: '1.5em' }} />
                    ) : (
                        <FaRegStar style={{ color: '#FFCA28', width: '1.5em', height: '1.5em' }} />
                    )}
                </a>
                <span className="event__date">{props.date}</span>
                <span className="event__time">{props.time}</span>
                <h3 className="event__title"><Link to={`/event/${props.id}`}>{props.name}</Link></h3>
                <p className="event__address">{props.address}</p>
            </div>

            {isOpen &&
                <BuyTicketModal onCloseModal={() => setIsOpen(false)} />
            }
        </>
    )
}

export default UpcomingEvent
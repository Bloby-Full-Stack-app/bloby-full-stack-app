import React from 'react'

function Artist(props) {
    return (
            <a href="artist.html" className="artist">
                <div className="artist__cover">
                    <img src={props.img} alt="" />
                </div>
                <h3 className="artist__title">{props.name}</h3>
            </a>
    )
}

export default Artist
import React from 'react'

function Artist(props) {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <a href="artist.html" className="artist">
                <div className="artist__cover">
                    <img src={props.img} alt="" />
                </div>
                <h3 className="artist__title">{props.name}</h3>
            </a>
        </div>
    )
}

export default Artist
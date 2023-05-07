import React, { useState } from 'react'

function PitchInput({ pitch, onPitchChange }) {

    const styles = {
        range: {
            appearance: 'none',
            width: '100%',
            height: '6px',
            margin: '8px 8px',
            backgroundColor: '#ddd',
            borderRadius: '3px',
            '&::WebkitSliderThumb': {
                appearance: 'none',
                width: '18px',
                height: '18px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '50%',
                cursor: 'pointer',
                marginTop: '-6px',
            },
            '&::WebkitSliderRunnableTrack': {
                height: '6px',
                backgroundColor: '#ef3852',
                borderRadius: '3px',
            },
        },
        value: {
            display: 'inline-block',
            margin: '5px',
        },
    };

    const handleValueChange = (event) => {
        const newValue = parseFloat(event.target.value);
        onPitchChange(newValue);
    };

    return (
        <div className="slider-radio">
            <input type="range" min="0" max="10" step="0.5" value={pitch} onChange={handleValueChange} style={styles.range} />
            <svg width='20' height='20' fill="#FFF" xmlns='http://www.w3.org/2000/svg' style={{ marginRight: '4px' }}>
                <g fill="#FFF">
                    <path d='M9 2a1 1 0 1 1 2 0v16a1 1 0 1 1-2 0V2ZM1 9a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V9ZM14 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1ZM5 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5ZM18 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z' />
                </g>
            </svg>
            <div className="profile__meta">
                <span style={styles.value}>{pitch}</span>
            </div>
        </div>
    )
}

export default PitchInput
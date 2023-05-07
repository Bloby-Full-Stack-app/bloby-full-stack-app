import React, { useState } from 'react'
import { FaVolumeUp } from 'react-icons/fa'

function VolumeInput({ volume, onVolumeChange }) {
    const [value, setValue] = useState(volume);

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
        onVolumeChange(newValue);
      };

    return (
        <div className="slider-radio">
            <input type="range" min="0" max="100" step="1" value={volume} onChange={handleValueChange} style={styles.range} />
            <FaVolumeUp size="1.5em" color="#FFF" style={{ marginRight: '4px' }} />
            <div className="profile__meta">
                <span style={styles.value}>{volume}</span>
            </div>
        </div>
    )
}

export default VolumeInput
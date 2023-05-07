import React, { useState } from 'react'

function FadeInInput({ fadeIn, onFadeInChange }) {

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
        onFadeInChange(newValue);
      };

    return (
        <div className="slider-radio">
            <input type="range" min="0" max="10" step="0.1" value={fadeIn} onChange={handleValueChange} style={styles.range} />
            <svg width='25' height='20' fill='#222227' xmlns='http://www.w3.org/2000/svg' style={{ margin: '0px 4px' }}>
                <path opacity='.2' d='M1 20c-.552 0-1-.446-1-.998v-4.215a1 1 0 0 1 1-1h.294c2.74.005 4.094-.163 5.705-.937 1.931-.927 3.601-2.653 5.035-5.476 1.37-2.697 2.882-4.55 4.583-5.718C18.64.267 20.274-.014 23.547.001H24a1 1 0 0 1 1 1V19.01c0 .552-.448.99-1 .99H1Z' fill="#FFF" />
                <path d='M1 15.787a1 1 0 1 1 0-2h.294c2.74.005 4.094-.163 5.705-.937 1.931-.927 3.601-2.653 5.035-5.476 1.37-2.697 2.882-4.55 4.583-5.718C18.64.267 20.274-.014 23.547.001H24a1 1 0 1 1 0 2h-.462c-2.893-.013-4.197.211-5.79 1.304-1.402.962-2.702 2.558-3.93 4.975-1.626 3.199-3.607 5.247-5.953 6.373-1.962.942-3.55 1.14-6.574 1.134H1Z' fill="#FFF"/>
            </svg>
            <div className="profile__meta">
                <span style={styles.value}>{fadeIn}</span>
            </div>
        </div>
    )
}

export default FadeInInput
import React, { useState } from 'react'

function FadeOutInput({ fadeOut, onFadeOutChange }) {

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
        onFadeOutChange(newValue);
      };

    return (
        <div className="slider-radio">
            <input type="range" min="0" max="10" step="0.1" value={fadeOut} onChange={handleValueChange} style={styles.range} />
            <svg width='25' height='20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ marginRight: '4px' }}><path opacity='.3' d='M24 20c.552 0 1-.446 1-.998v-4.215a1 1 0 0 0-1-1h-.294c-2.74.005-4.094-.163-5.705-.937-1.931-.927-3.601-2.653-5.035-5.476-1.37-2.697-2.882-4.55-4.583-5.718C6.36.267 4.726-.014 1.453.001H1a1 1 0 0 0-1 1V19.01c0 .552.448.99 1 .99h23Z' fill="#FFF" /><path d='M24 15.787a1 1 0 1 0 0-2h-.294c-2.74.005-4.094-.163-5.705-.937-1.931-.927-3.601-2.653-5.035-5.476-1.37-2.697-2.882-4.55-4.583-5.718C6.36.267 4.726-.014 1.453.001H1a1 1 0 1 0 0 2h.462c2.893-.013 4.197.211 5.79 1.304 1.402.962 2.702 2.558 3.93 4.975 1.626 3.199 3.607 5.247 5.953 6.373 1.962.942 3.55 1.14 6.574 1.134H24Z' fill="#FFF" />
            </svg>
            <div className="profile__meta">
                <span style={styles.value}>{fadeOut}</span>
            </div>
        </div>
    )
}

export default FadeOutInput
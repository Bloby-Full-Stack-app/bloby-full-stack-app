import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'

function Waveform(props) {
    const waveformRef = useRef(null);
    const waveSurferRef = useRef({
        isPlaying: () => false,
    })
    const [currentTime, setCurrentTime] = useState('0:00');
    const [isPlaying, toggleIsPlaying] = useState(false)
    const [selectedRegion, setSelectedRegion] = useState(null)

    const handleRegionClick = (region, event) => {
        props.onRegionChange(region);
        setSelectedRegion(region)
    };

    useEffect(() => {
        waveSurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#EF3852',
            progressColor: '#555',
            barWidth: 1,
            barHeight: 0.5,
            cursorColor: '#F7F7FA',
            responsive: true,
            zoom: 1,
            plugins: [
                RegionsPlugin.create({
                    regions: [
                        props.hasRegion ? 
                        {
                            start: 0,
                            end: 50,
                            drag: true,
                            color: 'rgba(238, 56, 82, 0.1)',
                            borderWidth: 3,
                            handlesWidth: 10,
                            borderColor: '#FFF',
                            handleStyle: {
                                left: {
                                    'background-color': 'white'
                                },
                                right: {
                                    'background-color': 'white'
                                }
                            }
                        }
                        : {

                        }
                    ],
                })
            ],
        });
        //waveSurferRef.current.setWaveColor('#555');
        if (props.url) {
            waveSurferRef.current.load(props.url);

            waveSurferRef.current.on('audioprocess', () => {
                const currentTime = waveSurferRef.current.getCurrentTime();
                const formattedTime = formatTime(currentTime);
                setCurrentTime(formattedTime);
            });

            waveSurferRef.current.on('seek', () => {
                const newTime = waveSurferRef.current.getCurrentTime();
                const formattedTime = formatTime(newTime);
                setCurrentTime(formattedTime);
            });

            waveSurferRef.current.on('region-click', handleRegionClick);
        }

        return () => {
            waveSurferRef.current.destroy();
        };
    }, [props.url]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${formattedSeconds}`;
    }

    const regionStartTime = selectedRegion ? formatTime(selectedRegion.start) : '0:00';
    const regionEndTime = selectedRegion ? formatTime(selectedRegion.end) : '0:00';

    const handlePlayPauseClick = () => {
        if (waveSurferRef.current.isPlaying()) {
          waveSurferRef.current.pause();
        } else {
          // Set fade-in effect to the start of the audio
          waveSurferRef.current.setFadeIn(1);
    
          waveSurferRef.current.play();
        }
        toggleIsPlaying(waveSurferRef.current.isPlaying());
      };
    

    return (
        <>
            <div className="profile__meta" style={{ marginTop: '20px' }}>
                <span>{currentTime}</span>
                {selectedRegion && (
                    <span>
                        {regionStartTime} - {regionEndTime}
                    </span>
                )}
            </div>
            
            <div ref={waveformRef} style={{ marginTop: '20px', display: 'grid',gridTemplateColumns: '40px 1fr' }}>
            <button className="product__add" style={{ color: 'white', opacity: '1', position: 'relative', backgroundColor: 'transparent', border: '0px' }}
                onClick={() => {
                    waveSurferRef.current.playPause()
                    toggleIsPlaying(waveSurferRef.current.isPlaying())
                }}
                type="button"
            >{
                isPlaying ? <FaPauseCircle style={{width: '2.5em', height: '2.5em'}} /> : <FaPlayCircle style={{width: '2.5em', height: '2.5em'}} />
              }</button>
            </div>
        </>

    );
}

export default Waveform;







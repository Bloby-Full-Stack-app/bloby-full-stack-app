import React, { useState, useEffect } from 'react';
import { useAuthUser } from 'react-auth-kit';

const LiveStream = () => {
  const [api, setApi] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const authUser = useAuthUser();

  const domain = 'meet.jit.si';

  useEffect(() => {
    const options = {
      roomName: 'bwb-bfqi-vmg',
      width: '100%',
      height: 660,
      executeCommand : {executeCommand},
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {
        // overwrite interface properties
      },
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: authUser().username
      }
    };

    const jitsiApi = new window.JitsiMeetExternalAPI(domain, options);
    setApi(jitsiApi);

    const handleParticipantLeft = async (participant) => {
      console.log('handleParticipantLeft', participant);
      const data = await getParticipants();
    };

    const handleParticipantJoined = async (participant) => {
      console.log('handleParticipantJoined', participant);
      const data = await getParticipants();
    };

    const handleVideoConferenceJoined = async (participant) => {
      console.log('handleVideoConferenceJoined', participant);
      const data = await getParticipants();
    };

    const handleVideoConferenceLeft = () => {
      console.log('handleVideoConferenceLeft');
        window.location.href = '/';
    };

    const handleMuteStatus = (audio) => {
      console.log('handleMuteStatus', audio);
    };

    const handleVideoStatus = (video) => {
      console.log('handleVideoStatus', video);
    };

    const handleRecordingStopped = () => {
        console.log('Recording stopped');
        window.location.href = '/';
     };

    const getParticipants = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(jitsiApi.getParticipantsInfo());
        }, 500);
      });
    };

    jitsiApi.addEventListeners({
      readyToClose: handleClose,
      participantLeft: handleParticipantLeft,
      participantJoined: handleParticipantJoined,
      videoConferenceJoined: handleVideoConferenceJoined,
      videoConferenceLeft: handleVideoConferenceLeft,
      audioMuteStatusChanged: handleMuteStatus,
      videoMuteStatusChanged: handleVideoStatus,
      onRecordingStopped: handleRecordingStopped,
    });

    return () => {
      jitsiApi.dispose();
    };
  }, []);

  const handleClose = () => {
    console.log('handleClose');
  };

  const executeCommand = (command) => {
    api.executeCommand(command);
    if (command === 'hangup') {
        window.location.href = '/';
    }

    if (command === 'toggleAudio') {
      setIsAudioMuted(!isAudioMuted);
    }

    if (command === 'toggleVideo') {
      setIsVideoMuted(!isVideoMuted);
    }
    if (command === 'stopRecording') {
        window.location.href = '/';
    }
  };

  return (
    <>
    <main className="main">
			<div className="container-fluid">
      <div id='jitsi-iframe'></div>
      </div>
      </main>
    </>
  );
};

export default LiveStream;

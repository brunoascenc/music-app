import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';
import { PlayerContainer } from './PlayerStyles';

const MusicPlayer = () => {
  const trackSrc = useSelector((state) => state.playTrack.trackSource);

  return (
    <PlayerContainer trackUrl={trackSrc}>
      <AudioPlayer
        autoPlay
        src={trackSrc}
        className="player"
        showFilledVolume
      />
    </PlayerContainer>
  );
};

export default MusicPlayer;

import PlayerActionTypes from './player-types';

export const playTrack = (track) => ({
  type: PlayerActionTypes.PLAY_TRACK,
  payload: track,
});

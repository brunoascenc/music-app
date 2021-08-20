import PlayerActionTypes from './player-types';

const INITIAL_STATE = {
  trackSource: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayerActionTypes.PLAY_TRACK:
      return {
        ...state,
        trackSource: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;

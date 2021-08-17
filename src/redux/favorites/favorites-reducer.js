import FavoritesActionTypes from './favorites-types';
import { addTrackToList } from './favorites-utils';

const INITIAL_STATE = {
  trackList: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.ADD_TRACK:
      return {
        ...state,
        trackList: addTrackToList(state.trackList, action.payload),
      };
    case FavoritesActionTypes.REMOVE_TRACK:
      return {
        ...state,
        trackList: state.trackList.filter(
          (track) => track.id !== action.payload.id
        ),
      };
    case FavoritesActionTypes.CLEAR_LIST:
      return {
        ...state,
        trackList: [],
      };
    default:
      return state;
  }
};

export default favoritesReducer;

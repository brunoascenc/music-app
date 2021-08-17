import FavoritesActionTypes from './favorites-types';

export const addTrack = (track) => ({
  type: FavoritesActionTypes.ADD_TRACK,
  payload: track,
});

export const removeTrack = (track) => ({
  type: FavoritesActionTypes.REMOVE_TRACK,
  payload: track,
});

export const clearList = () => ({
  type: FavoritesActionTypes.CLEAR_LIST,
});

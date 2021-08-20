import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chartReducer from './chart/chart-reducer';
import favoritesReducer from './favorites/favorites-reducer';
import playerReducer from './player/player-reducer';
import searchReducer from './search/search-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  chart: chartReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  playTrack: playerReducer,
});

export default persistReducer(persistConfig, rootReducer);

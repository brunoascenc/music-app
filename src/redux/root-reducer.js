import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chartReducer from './chart/chart-reducer';
import searchReducer from './search/search-reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  chart: chartReducer,
  search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);

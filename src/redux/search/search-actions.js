import axios from 'axios';
import SearchActionTypes from './search-types';

export const fetchSearchStart = () => ({
  type: SearchActionTypes.FETCH_SEARCH_START,
});

export const fetchSearchSuccess = (search) => ({
  type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
  payload: search,
});

export const fetchSearchFailure = (message) => ({
  type: SearchActionTypes.FETCH_SEARCH_FAILURE,
  payload: message,
});

export const fetchSearchData = (search) => {
  return (dispatch) => {
    dispatch(fetchSearchStart());
    axios
      .get(
        ` https://afternoon-lowlands-23813.herokuapp.com/https://api.deezer.com/search?q=${search}`
      )
      .then((res) => {
        dispatch(fetchSearchSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchSearchFailure(err.message));
      });
  };
};

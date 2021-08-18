import ChartActionTypes from './chart-types';
import axios from 'axios';

export const fetchChartStart = () => ({
  type: ChartActionTypes.FETCH_CHART_START,
});

export const fetchChartSuccess = (chart) => ({
  type: ChartActionTypes.FETCH_CHART_SUCCESS,
  payload: chart,
});

export const fetchChartFailure = (message) => ({
  type: ChartActionTypes.FETCH_CHART_FAILURE,
  payload: message,
});

export const fetchTopChartStart = (pageLimit) => {
  return (dispatch) => {
    dispatch(fetchChartStart());
    axios
      .get(
        `https://afternoon-lowlands-23813.herokuapp.com/https://api.deezer.com/chart/0/tracks&index=0&limit=${pageLimit}`
      )
      .then((res) => {
        const data = res.data;
        const tracks = data.data;
        dispatch(fetchChartSuccess(tracks));
      })
      .catch((err) => {
        dispatch(fetchChartFailure(err.message));
      });
  };
};

import ChartActionTypes from './chart-types';

const INITIAL_STATE = {
  results: [],
  loading: false,
  error: undefined,
};

const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChartActionTypes.FETCH_CHART_START:
      return {
        ...state,
        loading: true,
      };
    case ChartActionTypes.FETCH_CHART_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case ChartActionTypes.FETCH_CHART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;

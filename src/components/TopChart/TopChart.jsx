import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopChartStart } from '../../redux/chart/chart-actions';
import Tracks from '../Tracks/Tracks';

const TopChart = () => {
  const dispatch = useDispatch();
  const chart = useSelector((state) => state.chart.results);

  useEffect(() => {
    dispatch(fetchTopChartStart());
  }, [dispatch]);

  return (
    <div>
      <h1>Top Chart</h1>
      <Tracks data={chart} />
    </div>
  );
};

export default TopChart;

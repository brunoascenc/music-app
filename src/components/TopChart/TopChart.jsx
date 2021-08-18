import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopChartStart } from '../../redux/chart/chart-actions';
import Tracks from '../Tracks/Tracks';

const TopChart = () => {
  const dispatch = useDispatch();
  const chart = useSelector((state) => state.chart.results);
  const loading = useSelector((state) => state.chart.loading);
  const [pageNumber, setPageNumber] = useState(10);

  useEffect(() => {
    dispatch(fetchTopChartStart(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div>
      <h1>Top Chart</h1>
      <Tracks pageNumber={setPageNumber} loading={loading} data={chart} />
    </div>
  );
};

export default TopChart;

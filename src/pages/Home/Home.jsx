import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopChartStart } from '../../redux/chart/chart-actions';
import Tracks from '../../components/Tracks/Tracks';

const Home = () => {
  const dispatch = useDispatch();
  const chart = useSelector((state) => state.chart.results);
  const loading = useSelector((state) => state.chart.loading);
  const [pageNumber, setPageNumber] = useState(30);

  useEffect(() => {
    dispatch(fetchTopChartStart(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className="container">
      <h2 className="section-title">Top Charts</h2>
      <Tracks pageNumber={setPageNumber} loading={loading} data={chart} />
    </div>
  );
};

export default Home;

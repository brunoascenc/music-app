import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopChartStart } from '../../redux/chart/chart-actions';
import Tracks from '../../components/Tracks/Tracks';
import { addTrack } from '../../redux/favorites/favorites-actions';
import { AiFillStar } from 'react-icons/ai';

const Home = () => {
  const dispatch = useDispatch();
  const chart = useSelector((state) => state.chart.results);
  const loading = useSelector((state) => state.chart.loading);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    dispatch(fetchTopChartStart(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className="container">
      <h2 className="section-title">Mais tocadas</h2>
      <Tracks
        pageNumber={setPageNumber}
        handleClick={addTrack}
        clickIcon={<AiFillStar />}
        loading={loading}
        data={chart}
      />
    </div>
  );
};

export default Home;

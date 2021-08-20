import React, { useEffect, useState } from 'react';
import Tracks from '../../components/Tracks/Tracks';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchData } from '../../redux/search/search-actions';
import { addTrack } from '../../redux/favorites/favorites-actions';
import { AiFillStar } from 'react-icons/ai';

const Search = (props) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const searchQuery = props.match.params.pathname;
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    dispatch(fetchSearchData(searchQuery, pageNumber));
  }, [dispatch, searchQuery, pageNumber]);

  return (
    <div className="container">
      <h2 className="section-title">Resultados</h2>
      <Tracks
        pageNumber={setPageNumber}
        handleClick={addTrack}
        clickIcon={<AiFillStar />}
        loading={loading}
        data={search}
      />
    </div>
  );
};

export default Search;

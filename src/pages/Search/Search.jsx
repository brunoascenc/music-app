import React, { useEffect, useState } from 'react';
import Tracks from '../../components/Tracks/Tracks';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchData } from '../../redux/search/search-actions';

const Search = (props) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const searchQuery = props.match.params.pathname;
  const [pageNumber, setPageNumber] = useState(10);

  useEffect(() => {
    dispatch(fetchSearchData(searchQuery, pageNumber));
  }, [dispatch, searchQuery, pageNumber]);

  return (
    <div>
      <Tracks pageNumber={setPageNumber} loading={loading} data={search} />
    </div>
  );
};

export default Search;

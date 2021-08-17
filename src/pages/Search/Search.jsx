import React, { useEffect } from 'react';
import Tracks from '../../components/Tracks/Tracks';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchData } from '../../redux/search/search-actions';

const Search = (props) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    dispatch(fetchSearchData(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div>
      <Tracks data={search.results} />
    </div>
  );
};

export default Search;

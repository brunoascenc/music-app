import React from 'react';
import { useSelector } from 'react-redux';
import { removeTrack } from '../../redux/favorites/favorites-actions';
import { AiFillDelete } from 'react-icons/ai';
import Tracks from '../../components/Tracks/Tracks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmptyLit = styled.div`
  a {
    color: ${(props) => props.theme.primaryColor};
  }
`;

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.trackList);

  return (
    <div className="container">
      <h2 className="section-title">Músicas Favoritas</h2>
      {favorites.length === 0 ? (
        <EmptyLit>
          <Link to="/">Adicione suas músicas favoritas</Link>
        </EmptyLit>
      ) : (
        <Tracks
          handleClick={removeTrack}
          data={favorites}
          clickIcon={<AiFillDelete />}
        />
      )}
    </div>
  );
};

export default Favorite;

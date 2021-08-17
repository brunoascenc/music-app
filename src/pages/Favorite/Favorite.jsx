import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTrack } from '../../redux/favorites/favorites-actions';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.trackList);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Minha playlist</h1>
      <ul>
        {favorites &&
          favorites.map((track) => {
            return (
              <li key={track.id}>
                {track.title}
                <br />
                artist: {track.artist.name}
                <img src={track.album.cover_medium} alt={track.album.title} />
                <a href={track.link}>Música completa</a>
                <audio controls>
                  <source src={track.preview} type="audio/mpeg" />
                </audio>
                <button onClick={() => dispatch(removeTrack(track))}>
                  Remover
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Favorite;

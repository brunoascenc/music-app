import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTrack } from '../../redux/favorites/favorites-actions';

const Tracks = ({ data, loading, pageNumber }) => {
  const dispatch = useDispatch();

  //infinite scroll
  const observer = useRef();
  const lastTrackElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          pageNumber((prevPageNumber) => prevPageNumber + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, pageNumber]
  );

  return (
    <ul>
      {data &&
        data.map((track, index) => {
          if (data.length === index + 1) {
            return (
              <li ref={lastTrackElement} key={track.id}>
                {track.title}
                <br />
                artist: {track.artist.name}
                <img src={track.album.cover_medium} alt={track.album.title} />
                <a href={track.link}>Música completa</a>
                <audio controls>
                  <source src={track.preview} type="audio/mpeg" />
                </audio>
                <button onClick={() => dispatch(addTrack(track))}>
                  Adicionar a lista de favoritos
                </button>
              </li>
            );
          } else {
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
                <button onClick={() => dispatch(addTrack(track))}>
                  Adicionar a lista de favoritos
                </button>
              </li>
            );
          }
        })}
      <div>{loading && 'Loading...'}</div>
    </ul>
  );
};

export default Tracks;

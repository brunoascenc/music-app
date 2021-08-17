import React from 'react';

const Tracks = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((track) => {
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
              <button>Adicionar a lista de favoritos</button>
            </li>
          );
        })}
    </ul>
  );
};

export default Tracks;

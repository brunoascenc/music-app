import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTrack } from '../../redux/favorites/favorites-actions';
import Deezer from '../../images/deezer-logo.png';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import {
  List,
  ListItem,
  Cover,
  TrackInfo,
  ActionLinks,
  PlayButton,
  Span,
} from '../../components/Tracks/TracksStyles';
import { playTrack } from '../../redux/player/player-actions';
import useTimeConvert from '../../hooks/useTimeConvert.js';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.trackList);
  const dispatch = useDispatch();
  const [timeConvert] = useTimeConvert();

  return (
    <div className="container">
      <h2 className="section-title">Músicas Favoritas</h2>
      <List>
        {favorites &&
          favorites.map((track) => {
            return (
              <ListItem key={track.id}>
                <Cover onClick={() => dispatch(playTrack(track.preview))}>
                  <div>
                    <img
                      src={track.album.cover_medium}
                      alt={track.album.title}
                    />
                    <PlayButton>
                      <BsFillPlayFill />
                    </PlayButton>
                  </div>
                  <TrackInfo>
                    <Span titleTrack>{track.title}</Span>
                    <Span>{track.artist.name}</Span>
                  </TrackInfo>
                </Cover>

                <ActionLinks>
                  <div>
                    <Span>{timeConvert(track.duration)}</Span>
                    <button onClick={() => dispatch(removeTrack(track))}>
                      <AiFillDelete />
                    </button>
                  </div>
                  <a className="deezer-link" href={track.link}>
                    <img src={Deezer} alt={track.link} />
                  </a>
                </ActionLinks>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default Favorite;

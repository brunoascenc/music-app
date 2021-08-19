import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTrack } from '../../redux/favorites/favorites-actions';
import Deezer from '../../images/deezer-logo.png';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  List,
  ListItem,
  Cover,
  TrackInfo,
  ActionLinks,
} from './FavoriteStyles';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.trackList);
  const dispatch = useDispatch();

  function timeConvert(time) {
    let hrs = ~~(time / 3600);
    let mins = ~~((time % 3600) / 60);
    let secs = ~~time % 60;

    let ret = '';
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  }

  return (
    <div className="container">
      <h2 className="section-title">Minha playlist</h2>
      <List>
        {favorites &&
          favorites.map((track) => {
            return (
              <ListItem key={track.id}>
                <Cover>
                  <img src={track.album.cover_medium} alt={track.album.title} />
                </Cover>
                <TrackInfo>
                  <span className="track-title">{track.title}</span>
                  <span>{track.artist.name}</span>
                </TrackInfo>

                <ActionLinks>
                  <div>
                    <span>{timeConvert(track.duration)}</span>
                    <button onClick={() => dispatch(removeTrack(track))}>
                      <AiOutlineDelete />
                    </button>
                  </div>
                  <a className="deezer-link" href={track.link}>
                    <img src={Deezer} alt={track.link} />
                  </a>
                </ActionLinks>
                {/* <audio controls>
                  <source src={track.preview} type="audio/mpeg" />
                </audio> */}
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default Favorite;

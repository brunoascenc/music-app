import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTrack } from '../../redux/favorites/favorites-actions';
import { AiFillStar } from 'react-icons/ai';
import Deezer from '../../images/deezer-logo.png';
import { List, ListItem, Cover, TrackInfo, ActionLinks } from './TracksStyles';

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
    <List>
      {data &&
        data.map((track, index) => {
          if (data.length === index + 1) {
            return (
              <ListItem ref={lastTrackElement} key={track.id}>
                <Cover>
                  <img src={track.album.cover_medium} alt={track.album.title} />
                </Cover>
                <TrackInfo>
                  <span className="track-title">{track.title}</span>
                  <span>{track.artist.name}</span>
                </TrackInfo>
                <ActionLinks>
                  <span>{timeConvert(track.duration)}</span>
                  {/* <audio controls>
                    <source src={track.preview} type="audio/mpeg" />
                  </audio> */}
                  <div>
                    <span>{timeConvert(track.duration)}</span>
                    <button onClick={() => dispatch(addTrack(track))}>
                      <AiFillStar />
                    </button>
                  </div>
                  <a className="deezer-link" href={track.link}>
                    <img src={Deezer} alt={track.link} />
                  </a>
                </ActionLinks>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={track.id}>
                <Cover>
                  <img src={track.album.cover_medium} alt={track.album.title} />
                  <TrackInfo>
                    <span className="track-title">{track.title}</span>
                    <span>{track.artist.name}</span>
                  </TrackInfo>
                </Cover>

                <ActionLinks>
                  <div>
                    <span>{timeConvert(track.duration)}</span>
                    <button onClick={() => dispatch(addTrack(track))}>
                      <AiFillStar />
                    </button>
                  </div>
                  <a className="deezer-link" href={track.link}>
                    <img src={Deezer} alt={track.link} />
                  </a>
                  {/* <audio controls>
                    <source src={track.preview} type="audio/mpeg" />
                  </audio> */}
                </ActionLinks>
              </ListItem>
            );
          }
        })}
      <div>{loading && 'Loading...'}</div>
    </List>
  );
};

export default Tracks;

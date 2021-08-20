import React from 'react';
import { useDispatch } from 'react-redux';
import { addTrack } from '../../redux/favorites/favorites-actions';
import { AiFillStar } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import Deezer from '../../images/deezer-logo.png';
import {
  List,
  ListItem,
  Cover,
  TrackInfo,
  ActionLinks,
  PlayButton,
  Span,
} from './TracksStyles';
import { playTrack } from '../../redux/player/player-actions';
import Spinner from '../Spinner/Spinner';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useTimeConvert from '../../hooks/useTimeConvert.js';

const Tracks = ({ data, loading, pageNumber }) => {
  const dispatch = useDispatch();
  const [lastTrackElement] = useInfiniteScroll(loading, pageNumber);
  const [timeConvert] = useTimeConvert();

  return (
    <List>
      {data &&
        data.map((track, index) => {
          if (data.length === index + 1) {
            return (
              <ListItem ref={lastTrackElement} key={track.id}>
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
          }
        })}
      <div>{loading && <Spinner />}</div>
    </List>
  );
};

export default Tracks;

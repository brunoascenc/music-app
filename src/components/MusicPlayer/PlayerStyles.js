import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.darkerBg};
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: solid 1px #0f0f0f;
  z-index: 1;

  .player {
    background: transparent;
  }
  .rhap_volume-filled {
    background: ${(props) =>
      props.trackUrl === '' ? '#757171' : props.theme.mainPurple};
  }
  .rhap_progress-filled {
    background-color: ${(props) => props.theme.mainPurple};
  }

  .rhap_time {
    color: #545359;
  }

  .rhap_button-clear {
    color: ${(props) => (props.trackUrl === '' ? '#242323' : '#d6c9c9')};
  }

  .rhap_volume-button,
  .rhap_repeat-button {
    color: ${(props) => (props.trackUrl === '' ? '#242323' : '#ad9e9e')};
  }

  .rhap_progress-bar-show-download,
  .rhap_volume-bar,
  .rhap_download-progress {
    background-color: #121111;
  }

  .rhap_volume-indicator,
  .rhap_progress-indicator {
    background: ${(props) =>
      props.trackUrl === '' ? '#757171' : props.theme.mainPurple};
  }
`;

import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px;
  margin-bottom: 200px;

  @media screen and (max-width: 1320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1320px) {
    border-bottom: solid 1px #0f0f0f;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 40%;
  left: 35%;

  opacity: 0;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 25px;
  color: #e0d7d7;
  transition: 0.2s ease-in-out;
  @media screen and (max-width: 565px) {
    top: 37%;
    left: 30%;
  }
`;

export const Cover = styled.div`
  display: flex;
  div {
    position: relative;
    &:hover {
      img {
        opacity: 0.3;
      }

      cursor: pointer;
      ${PlayButton} {
        opacity: 1;
      }
    }
  }
  img {
    width: 120px;
    border-radius: 12px;
    transition: 0.2s ease-in-out;
    margin-right: 23px;
    @media screen and (max-width: 565px) {
      width: 90px;
    }
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ActionLinks = styled(TrackInfo)`
  align-items: center;
  flex-direction: unset;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
    margin: 20px;
    @media screen and (max-width: 480px) {
      margin: 0;
    }
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 22px;
    margin-left: 15px;
    color: ${(props) => props.theme.mainPurple};
    margin-top: 1px;
    transition: 0.1s ease;
    &:hover {
      opacity: 0.6;
    }
  }
  img {
    width: 80px;
    border-radius: 12px;
  }
`;

export const Span = styled.span`
  width: ${(props) => (props.titleTrack ? '160px' : 'unset')};
  font-size: ${(props) => (props.titleTrack ? '15px' : '12px')};
  margin-bottom: ${(props) => (props.titleTrack ? '5px' : '0')};
  color: ${(props) => (props.titleTrack ? '#d3dbd5' : '#857676')};
  @media screen and (max-width: 480px) {
    font-size: ${(props) => (props.titleTrack ? '13px' : '10px')};
    width: ${(props) => (props.titleTrack ? '100px' : 'unset')};
  }
`;

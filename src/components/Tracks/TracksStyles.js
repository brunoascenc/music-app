import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 25px; */
  grid-row-gap: 60px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

export const Cover = styled.div`
  display: flex;
  img {
    width: 150px;
    border-radius: 14px;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
  .track-title {
    font-weight: bold;
    letter-spacing: 1px;
    width: 180px;
    font-size: 16px;
    margin-bottom: 5px;
  }
  span {
    font-size: 13px;
  }
`;

export const ActionLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    color: #8f79e8;
    font-size: 20px;
    margin-left: 5px;
    margin-top: 4px;
  }
  img {
    width: 90px;
  }

  span {
    font-size: 14px;
  }
`;

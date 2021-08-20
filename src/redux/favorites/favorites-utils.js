export const addTrackToList = (trackList, trackToAdd) => {
  const existingTrack = trackList.find((track) => track.id === trackToAdd.id);

  if (existingTrack) {
    alert('Música já está na sua lista');
    return trackList;
  } else {
    alert('Música salva!');
  }

  return [...trackList, { ...trackToAdd }];
};

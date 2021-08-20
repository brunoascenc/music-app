export const addTrackToList = (trackList, trackToAdd) => {
  const existingTrack = trackList.find((track) => track.id === trackToAdd.id);
  alert('Música salva');

  if (existingTrack) {
    return trackList;
  }

  return [...trackList, { ...trackToAdd }];
};

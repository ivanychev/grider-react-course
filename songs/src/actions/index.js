const SONG_SELECTED = "SONG_SELECTED";

const selectSong = (song) => {
  return {
    type: SONG_SELECTED,
    payload: song,
  };
};

export { selectSong };

import React from "react";
import SongListItem from "./SongListItem";

function SongList(props) {
  const stateSongs = props.songs;
  const singleSong = stateSongs.map((song) => (
    <SongListItem
      key={song.id}
      name={song.title}
      genre={song.genre}
      rating={song.rating}
    />
  ));
  return singleSong;
}

export default SongList;

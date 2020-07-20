import React from "react";
import SongListItem from "./SongListItem";

function SongList(props) {
  const stateSongs = props.songs;
  const singleSong = stateSongs.map((song) => (
    <SongListItem
      key={song.id}
      id={song.id}
      name={song.title}
      artist={song.artist}
      genre={song.genre}
      rating={song.rating}
      deleteSong={props.deleteSong}
    />
  ));
  return singleSong;
}

export default SongList;

import React from "react";

function SongListItem(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>{props.genres}</td>
      <td>{props.rating}</td>
    </tr>
  );
}

export default SongListItem;

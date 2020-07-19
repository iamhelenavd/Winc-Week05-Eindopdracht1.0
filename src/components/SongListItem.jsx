import React from "react";

function SongListItem(props) {
  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
      <td>{props.rating}</td>
      <td>
        <button onClick={() => props.deleteSong(props.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default SongListItem;

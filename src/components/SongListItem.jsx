import React from "react";

function SongListItem(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
      <td>{props.rating}</td>
      <td>
        <button onClick={handleClick}> Delete </button>
      </td>
    </tr>
  );
}

export default SongListItem;

/* onClick={props.handleRemove} */
/* onClick={() => props.handleRemove(props.id)} */

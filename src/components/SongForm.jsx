import React, { useState } from "react";

const SongForm = (props) => {
  const formChoises = {
    id: "null",
    title: "",
    artist: "",
    genre: "",
    rating: "",
  };
  const [song, setSong] = useState(formChoises);

  // Input change function SetSong

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSong({ ...song, [name]: value });
  };

  /*   const onSubmit = (event) => {
    console.log(setSong(formChoises));
  }; */

  const handleSubmit = (e) => {
    e.preventDefault(); //Stops defauls reloading behaviour
    console.log(song);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={song.title}
          onChange={handleInputChange} // on change handler that changes te input value
        />
      </label>

      <label>
        <input
          type="text"
          placeholder="artist"
          name="artist"
          value={song.artist}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <input
          type="text"
          placeholder="genre"
          name="genre"
          value={song.genre}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <input
          type="text"
          placeholder="rating"
          name="rating"
          value={song.rating}
          onChange={handleInputChange}
        />
      </label>
      <button> Add Song</button>
    </form>
  );
};

export default SongForm;

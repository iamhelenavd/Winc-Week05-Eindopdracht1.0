import React, { useState } from "react";

const SongForm = (props) => {
  const formChoices = {
    id: "null",
    title: "",
    artist: "",
    genre: "",
    rating: "",
  };
  const [song, setSong] = useState(formChoices);

  //  Input change function SetSong //////////////////////////

  function handleInputChange(event) {
    const value = event.target.value;
    setSong({
      ...song,
      [event.target.name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //Stops defauls reloading behaviour
    props.addSong(song);
    console.log(song);
    setSong(formChoices);
    const url = "https://lil-playlist-9a70b.firebaseio.com/Collections.json";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        key: song.id,
        name: song.title,
        artist: song.artist,
        genre: song.genre,
        rating: song.rating,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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

      <select
        placeholder="genre"
        name="genre"
        value={song.rating}
        onChange={handleInputChange}
      >
        <option value="">Genre</option>
        <option value="Pop">Pop</option>
        <option value="Jazz">Jazz</option>
        <option value="Klassiek">Klassiek</option>
        <option value="Anders">Anders</option>
      </select>

      <select
        placeholder="rating"
        name="rating"
        value={song.rating}
        onChange={handleInputChange}
      >
        <option value="">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button type="submit"> Add Song</button>
    </form>
  );
};
export default SongForm;

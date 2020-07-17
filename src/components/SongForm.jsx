import React, { useState } from "react";
/* useEffect */
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
    setSong(formChoises);
    const url = "https://lil-playlist-9a70b.firebaseio.com/Collections.json";
    const data = song.title;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*   useEffect(() => {
    formChoises();
  }, []); */

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
        <option value="klassiek">Pop</option>
        <option value="jazz">Jazz</option>
        <option value="klassiek">Klassiek</option>
        <option value="anders">Anders</option>
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
      </select>
      <button type="submit"> Add Song</button>
    </form>
  );
};
export default SongForm;

import React, { useState } from "react";
import SongForm from "./SongForm";
/* import SongList from "./SongList"; */

const SongOverview = () => {
  const SongsDataList = [
    {
      id: "0",
      Song: "oranges",
      Artist: "Lady Gaga",
      Genre: "Pop",
      Rating: "4",
    },
    { id: "0", Song: "Apples", Artist: "Lady Gaga", Genre: "Pop", Rating: "4" },
    {
      id: "0",
      Song: "Bananas",
      Artist: "Lady Gaga",
      Genre: "Pop",
      Rating: "4",
    },
  ];

  const [songs, setSongs] = useState(SongsDataList);

  // doe iets om aan te passen plus 1
  const addSong = (song) => {
    song.id = songs.length + 1;
    setSongs([...songs, song]);
  };

  // doe iets om deleten)

  return (
    <div>
      <header>
        <h1>Winc Lil'Liedjeslijst</h1>
      </header>
      <SongForm addSong={addSong} />
      <table>
        <tr className="song-header">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>
      </table>
      {/*       <SongList songs={songs} /> */}
    </div>
  );
};

export default SongOverview;

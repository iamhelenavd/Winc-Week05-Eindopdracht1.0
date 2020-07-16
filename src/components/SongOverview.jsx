import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

const SongOverview = () => {
  const SongsDataList = [
    {
      id: "1",
      title: "oranges",
      artist: "Lady Gaga",
      genre: "Pop",
      rating: "4",
    },
    {
      id: "2",
      title: "Bananas",
      artist: "Lady Gaga",
      genre: "Pop",
      rating: "4",
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
      <div>
        <SongForm addSong={addSong} />
        <table>
          <tbody>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
            <SongList songs={songs} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongOverview;

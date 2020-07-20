import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { useEffect } from "react";

const apiURL = "https://lil-playlist-9a70b.firebaseio.com/Collections.json";

const SongOverview = () => {
  const SongsDataList = [];
  const [songs, setSongs] = useState(SongsDataList);

  // GET SONGS from the resource API
  const getData = async () => {
    try {
      let response = await fetch(apiURL, { method: "GET" });
      let result = await response.json();
      const song = Object.keys(result).map((key) => ({
        id: key,
        title: result[key].name,
        artist: result[key].artist,
        genre: result[key].genre,
        rating: result[key].rating,
      }));
      setSongs(song);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((event) => {
    getData(event);
  }, []);

  // doe iets om aan te passen plus 1
  const addSong = (song) => {
    song.id = songs.length + 1;
    setSongs([...songs, song]);
  };

  // DELETE song resource API
  const handleDelete = async (id) => {
    try {
      const deleteURL = `https://lil-playlist-9a70b.firebaseio.com/Collections/${id}.json`;
      const response = await fetch(deleteURL, { method: "DELETE" });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  function deleteSong(id) {
    setSongs(songs.filter((song) => song.id !== id));
    handleDelete(id);
  }

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
              <th className="song-row__item">Delete</th>
            </tr>
            <SongList songs={songs} deleteSong={deleteSong} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongOverview;

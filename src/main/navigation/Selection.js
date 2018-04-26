import React from "react";
import "./Selection.css";

// map out genres, pass down on genrechange to dropdown list
const Selection = ({ genres, genre, onGenreChange }) => (
  <div className="selection">
    <label>Genre</label>
    <select value={genre} onChange={onGenreChange}>
      {genres.map( genre => (
        <option key={genre.id} value={genre.name}>{genre.name}</option>
      ))}
    </select>
  </div>
)

export default Selection;

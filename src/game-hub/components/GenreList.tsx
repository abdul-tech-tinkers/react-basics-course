import React from "react";
import useGenres from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Genre } from "../services/genres-service";
const GenreList = () => {
  let endpoint = "/genres";
  const { data: genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

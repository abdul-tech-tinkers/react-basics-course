import React, { useState, useEffect } from "react";
import gameService, { Game, GetGamesResponse } from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function GetAllGames() {
      try {
        let getGamesResponse = await gameService.getAll<GetGamesResponse>();
        setGames(getGamesResponse.data.results);
      } catch (error: any) {
        setError(error.message);
      }
    }
    GetAllGames();
  }, []);

  return { games, error };
};
export default useGames;

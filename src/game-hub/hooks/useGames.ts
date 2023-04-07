import React, { useState, useEffect } from "react";
import gameService, { Game, GetGamesResponse } from "../services/game-service";

const useGames = () => {
  ``;
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function GetAllGames() {
      try {
        setIsLoading(true);
        let getGamesResponse = await gameService.getAll<GetGamesResponse>();
        setGames(getGamesResponse.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    GetAllGames();
  }, []);

  return { games, error, isLoading };
};
export default useGames;

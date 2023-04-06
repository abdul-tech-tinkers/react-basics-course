import React, { useState, useEffect } from "react";
import gameService, { Game, GetGamesResponse } from "../services/game-service";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
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

  return (
    <>
      {error && <Text>Error Loading Games.</Text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

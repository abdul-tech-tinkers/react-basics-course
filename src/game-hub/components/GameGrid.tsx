import useGames from "../hooks/useGames";
import gameService, { Game, GetGamesResponse } from "../services/game-service";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { error, games } = useGames();

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

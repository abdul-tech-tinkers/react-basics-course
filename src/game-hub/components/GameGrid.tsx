import useGames from "../hooks/useGames";
import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  return (
    <>
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      {error && <Text>Error Loading Games.</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={5}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

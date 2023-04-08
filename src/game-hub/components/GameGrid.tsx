import useGames from "../hooks/useGames";
import {
  Box,
  Center,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  let endpoint = "/games";
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={5}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardContainer>
              {" "}
              <GameCardSkeleton key={Skeleton} />
            </GameCardContainer>
          ))}
        {error && <Text>Error Loading Games.</Text>}

        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

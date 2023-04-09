import useGames from "../hooks/useGames";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../services/genres-service";
import { Platform } from "../services/game-service";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  console.log("ordering" + gameQuery?.ordering);
  let endpoint = "/games";
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          "2xl": 3,
        }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {error && <Text>Error Loading Games.</Text>}

        {games.length === 0 && <Heading>No Games</Heading>}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

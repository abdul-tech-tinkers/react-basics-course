import useGames from "../hooks/useGames";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
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
          xl: 4,
          "2xl": 4,
        }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {error && <Text>Error Loading Games. {error.message}</Text>}

        {games?.results?.length === 0 && <Heading>No Games</Heading>}
        {games?.results?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

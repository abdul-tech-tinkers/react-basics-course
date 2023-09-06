import useGames from "../hooks/useGames";
import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  console.log("ordering" + gameQuery?.ordering);
  let endpoint = "/games";
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchGameCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner marginLeft={3} marginTop={2} />}
      >
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

          {games?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results?.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button marginLeft={3} marginTop={2} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameGrid;

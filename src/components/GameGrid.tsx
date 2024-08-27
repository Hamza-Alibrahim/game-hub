import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = Array.from({ length: 18 }, (_, i) => i);
  const fetchedGamesCount =
    data?.pages.reduce((totla, page) => totla + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner mt={5} />}
      >
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            "2xl": 5,
          }}
          p={2}
          spacing={5}
        >
          {isLoading && skeletons.map((s) => <GameSkeleton key={s} />)}
          {data?.pages.map((p, i) => (
            <React.Fragment key={i}>
              {p.results.map((g) => (
                <GameCard key={g?.id} {...g} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};
export default GameGrid;

import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatform";
import { Order } from "./OrderSelector";

interface Props {
  genre: Genre | null;
  curPlatform: Platform | null;
  order: Order | null;
  title: string;
}

const GameGrid = ({ genre, curPlatform, order, title }: Props) => {
  const { data, error, isLoading } = useGame(genre, curPlatform, order, title);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        "2xl": 5,
      }}
      spacing={5}
    >
      {isLoading && skeletons.map((s) => <GameSkeleton key={s} />)}
      {data.map((g) => (
        <GameCard key={g.id} {...g} />
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;

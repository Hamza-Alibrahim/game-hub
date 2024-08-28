import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading || !data) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        md: 2,
      }}
      spacing={2}
      mb={3}
    >
      {data.results.map((image) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
};
export default GameScreenShots;

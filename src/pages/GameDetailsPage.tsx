import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandabelText from "../components/ExpandabelText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner pl={2} />;

  if (error || !game) throw error;

  return (
    <Box pl={2}>
      <Heading>{game.name}</Heading>
      <ExpandabelText>{game.description_raw}</ExpandabelText>
      <GameAttributes game={game} />
    </Box>
  );
};
export default GameDetailsPage;

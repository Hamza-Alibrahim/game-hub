import { SimpleGrid, Badge, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "";

  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <Badge colorScheme={color} px={2} borderRadius="4px" fontSize="14px">
          {game.metacritic}
        </Badge>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
export default GameAttributes;

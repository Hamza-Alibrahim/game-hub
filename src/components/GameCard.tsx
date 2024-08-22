import {
  Card,
  HStack,
  Image,
  Badge,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import placeholderImage from "../assets/no-image-placeholder.webp";
import Emoji from "./Emoji";

const GameCard = (g: Game) => {
  const color = g.metacritic > 75 ? "green" : g.metacritic > 60 ? "yellow" : "";
  const image = g?.background_image
    ? getCroppedImageUrl(g.background_image, 600, 400)
    : placeholderImage;
  return (
    <Card borderRadius="10px" overflow="hidden" alignSelf="start">
      <Image src={image} />
      <CardBody>
        <HStack mb={2} align="center" justifyContent="space-between">
          <PlatformIconList
            platforms={g.parent_platforms.map((p) => p.platform)}
          />
          <Badge colorScheme={color} px={2} borderRadius="4px" fontSize="14px">
            {g.metacritic}
          </Badge>
        </HStack>
        <Heading fontSize="2xl" fontWeight="bold">
          {g.name}
        </Heading>
        <Emoji rating={g.rating_top} />
      </CardBody>
    </Card>
  );
};
export default GameCard;

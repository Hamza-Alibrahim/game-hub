import { List, ListItem, HStack, Image, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGenre from "../hooks/useGenre";
import useGameQuery from "../Store";

const GenreList = () => {
  const selectedGenre = useGameQuery((s) => s.selectedGenre);
  const setGenre = useGameQuery((s) => s.setGenre);
  const { data } = useGenre();

  return (
    <List>
      {data?.results.map((genre) => {
        return (
          <ListItem key={genre.id} py="5px">
            <HStack cursor="pointer" onClick={() => setGenre({ ...genre })}>
              <Image
                src={getCroppedImageUrl(genre.image_background, 150, 150)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontSize="large"
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};
export default GenreList;

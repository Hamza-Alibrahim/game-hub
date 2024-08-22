import { List, ListItem, HStack, Image, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  setGenre: (val: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setGenre, selectedGenre }: Props) => {
  const { data } = useGenre();

  return (
    <List>
      {data.map((genre) => {
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

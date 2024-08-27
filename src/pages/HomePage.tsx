import { Show, GridItem, Heading, HStack, Grid } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import OrderSelector from "../components/OrderSelector";
import PlatformsSelector from "../components/PlatformsSelector";
import useGameQuery from "../Store";

const MainPage = () => {
  const selectedGenre = useGameQuery((s) => s.selectedGenre);
  const curPlatform = useGameQuery((s) => s.curPlatform);
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" maxW="225px" pl="10px">
          <Heading fontSize="2xl" mb={3}>
            Genres
          </Heading>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading>
          {curPlatform?.name ? curPlatform.name : ""}{" "}
          {selectedGenre?.name ? selectedGenre.name : ""} Gaming
        </Heading>
        <HStack my={5} flexWrap="wrap">
          <PlatformsSelector />
          <OrderSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default MainPage;

import { Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformsSelector from "./components/PlatformsSelector";
import OrderSelector from "./components/OrderSelector";
import useGameQuery from "./Store";

const App = () => {
  const selectedGenre = useGameQuery((s) => s.selectedGenre);
  const curPlatform = useGameQuery((s) => s.curPlatform);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      px={5}
      pb="20px"
      transition="padding .5s"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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
        <HStack my={5}>
          <PlatformsSelector />
          <OrderSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default App;

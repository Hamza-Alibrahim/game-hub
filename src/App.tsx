import { useState } from "react";
import { Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformsSelector from "./components/PlatformsSelector";
import OrderSelector, { Order } from "./components/OrderSelector";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenre";

const App = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState<Genre | null>(null);
  const [curPlatform, setCurPlatform] = useState<Platform | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

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
        <Navbar setTitle={(val: string) => setTitle(val)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" maxW="225px" pl="10px">
          <Heading fontSize="2xl" mb={3}>
            Genres
          </Heading>
          <GenreList
            selectedGenre={genre}
            setGenre={(val: Genre) => setGenre(val)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading>
          {curPlatform?.name ? curPlatform.name : ""}{" "}
          {genre?.name ? genre.name : ""} Gaming
        </Heading>
        <HStack my={5}>
          <PlatformsSelector
            curPlatform={curPlatform}
            setCurPlatform={setCurPlatform}
          />
          <OrderSelector order={order} setOrder={setOrder} />
        </HStack>
        <GameGrid
          genre={genre}
          curPlatform={curPlatform}
          order={order}
          title={title}
        />
      </GridItem>
    </Grid>
  );
};
export default App;

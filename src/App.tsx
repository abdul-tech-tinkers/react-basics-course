import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./game-hub/components/NavBar";
import GameGrid from "./game-hub/components/GameGrid";
import GenreList from "./game-hub/components/GenreList";
import { useState } from "react";
import { Genre } from "./game-hub/hooks/useGenres";
import PlatformSelector from "./game-hub/components/PlatformSelector";
import { Platform } from "./game-hub/hooks/usePlatforms";
import SortSelector from "./game-hub/components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav   nav"
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

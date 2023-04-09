import axios from "axios";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./game-hub/components/NavBar";
import GameGrid from "./game-hub/components/GameGrid";
import GenreList from "./game-hub/components/GenreList";
import { useState } from "react";
import { Genre } from "./game-hub/services/genres-service";
import PlatformSelector from "./game-hub/components/PlatformSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

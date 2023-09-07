import React from "react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../../store";

const GenreList = () => {
  let endpoint = "/genres";
  const { data: genres, error, isLoading } = useGenres();
  const setGenreInStore = useGameQueryStore((s) => s.setGenreId);
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);

  if (error) {
    console.log(`error useGenres ${error}`);
    return <Text color="tomato">Error Loading Genres</Text>;
  }

  return (
    <>
      <Heading fontSize="2xl" marginX={5} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && <Spinner></Spinner>}
        {genres?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="nowrap"
                textAlign="left"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                onClick={() => setGenreInStore(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

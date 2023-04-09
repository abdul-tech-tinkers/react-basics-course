import React from "react";
import useGenres from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Genre } from "../services/genres-service";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCropppedImageUrl from "../services/image-url";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  let endpoint = "/genres";
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  return (
    <List>
      {isLoading && <Spinner></Spinner>}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

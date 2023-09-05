import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import { Platform } from "./usePlatforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  // ``;
  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function GetAllGames() {
  //     try {
  //       setLoading(true);
  //       let getGamesResponse = await gameService.getAll<GetGamesResponse>();
  //       setGames(getGamesResponse.data.results);
  //       console.log(getGamesResponse.data.results);
  //     } catch (error: any) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   GetAllGames();
  // }, []);

  // return { games, error, isLoading };

  // return useData<Game>({
  //   endpoint,
  //   requestConfig: {
  //     params: {
  //       genres: gameQuery?.genre?.id,
  //       platforms: gameQuery?.platform?.id,
  //       ordering: gameQuery?.ordering,
  //       search: gameQuery?.searchText,
  //     },
  //   },
  //   deps: [
  //     gameQuery?.genre?.id,
  //     gameQuery?.platform?.id,
  //     gameQuery?.ordering,
  //     gameQuery?.searchText,
  //   ],
  // });

  let endpoint = "/games";
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async () => {
      const response = await apiClient.get<FetchResponse<Game>>(endpoint, {
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.ordering,
          search: gameQuery?.searchText,
        },
      });
      return response?.data;
    },
  });
};
export default useGames;

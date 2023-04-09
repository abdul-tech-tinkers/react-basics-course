import { GameQuery } from "../../App";
import { Game, GetGamesResponse } from "../services/game-service";
import { Genre } from "../services/genres-service";
import useData from "./useData";
import { Platform } from "./usePlatforms";

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
  let endpoint = "/games";

  return useData<Game>({
    endpoint,
    requestConfig: {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.ordering,
      },
    },
    deps: [gameQuery?.genre?.id, gameQuery?.platform?.id, gameQuery?.ordering],
  });
};
export default useGames;

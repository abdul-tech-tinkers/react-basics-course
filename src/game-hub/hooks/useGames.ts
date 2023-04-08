import { Game, GetGamesResponse } from "../services/game-service";
import { Genre } from "../services/genres-service";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) => {
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
        genres: selectedGenre?.id,
      },
    },
    deps: [selectedGenre?.id],
  });
};
export default useGames;

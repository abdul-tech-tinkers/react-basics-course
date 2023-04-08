import { useEffect, useState } from "react";
import genresService, {
  Genre,
  GetGenreResponse,
} from "../services/genres-service";

const useGenres = () => {
  ``;
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function GetAllGenres() {
      try {
        setLoading(true);
        let getGenreResponse = await genresService.getAll<GetGenreResponse>();
        setGenres(getGenreResponse.data.results);
        console.log(getGenreResponse.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    GetAllGenres();
  }, []);
  return { genres, error, isLoading };
};
export default useGenres;

import { useEffect, useState } from "react";
import genresService, {
  Genre,
  GetGenreResponse,
} from "../services/genres-service";
import useData from "./useData";

const useGenres = () => {
  let endpoint = "/genres";
 return useData<Genre>({endpoint});
};
export default useGenres;

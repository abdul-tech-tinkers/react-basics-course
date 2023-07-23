import genresService, {
  Genre,
  FetchResponse,
} from "../services/genres-service";
import useData from "./useData";

import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery({
    queryKey: ["GetGenres"],
    queryFn: async () => {
      const response = await apiClient.get<FetchResponse<Genre>>("/genres");
      return response.data;
    },
  });
};
export default useGenres;

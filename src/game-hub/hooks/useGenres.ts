import genresService, {
  Genre,
  FetchResponse,
} from "../services/genres-service";

import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery({
    queryKey: ["GetGenres"],
    queryFn: async () => {
      const response = await apiClient.get<FetchResponse<Genre>>("/genres");
      return response.data;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
export default useGenres;

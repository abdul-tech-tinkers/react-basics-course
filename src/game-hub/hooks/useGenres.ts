import ApiClient from "../services/api-client";
import ms from "ms";

import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["GetGenres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
export default useGenres;

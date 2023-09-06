import ApiClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["GetGenres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
export default useGenres;

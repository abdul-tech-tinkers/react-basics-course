import ApiClient from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
export default useGenres;

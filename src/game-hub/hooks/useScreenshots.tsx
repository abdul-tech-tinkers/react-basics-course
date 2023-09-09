import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";
import { Trailer } from "../entities/Trailer";
import { AxiosRequestConfig } from "axios";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll({} as AxiosRequestConfig),
  });
};

export default useScreenshots;

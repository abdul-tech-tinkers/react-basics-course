import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";
import { Trailer } from "../entities/Trailer";
import { AxiosRequestConfig } from "axios";

const useGameTrailer = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["games", gameId],
    queryFn: () => apiClient.getAll({} as AxiosRequestConfig),
  });
};

export default useGameTrailer;

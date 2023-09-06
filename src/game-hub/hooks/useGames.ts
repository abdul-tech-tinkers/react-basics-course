import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import { Platform } from "./usePlatforms";
import ApiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new ApiClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam = 1 }) =>
      await apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.ordering,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      console.log(`all pages ${allPages.length}`);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
export default useGames;

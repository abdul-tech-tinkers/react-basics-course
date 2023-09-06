import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/genres");
const usePlatforms = () => {
  return useQuery({
    queryKey: ["getPlatforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
export default usePlatforms;

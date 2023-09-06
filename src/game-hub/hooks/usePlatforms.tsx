import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
  });
};
export default usePlatforms;

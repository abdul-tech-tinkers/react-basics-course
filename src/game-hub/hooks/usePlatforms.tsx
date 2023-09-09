import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/genres");
const usePlatforms = () => {
  return useQuery({
    queryKey: ["getPlatforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
export default usePlatforms;

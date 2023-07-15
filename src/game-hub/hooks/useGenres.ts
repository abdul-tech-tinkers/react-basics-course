import { useEffect, useState } from "react";
import genresService, {
  Genre,
  GetGenreResponse,
} from "../services/genres-service";
import useData from "./useData";

import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery({
    queryKey: ["GetGenres"],
    queryFn: async () => {
      const response = await apiClient.get<GetGenreResponse>("/genres");
      return response.data;
    },
  });
};
export default useGenres;

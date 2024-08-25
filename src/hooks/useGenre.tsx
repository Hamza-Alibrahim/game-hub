import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import gernres from "../data/gernres";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: gernres,
  });

export default useGenre;

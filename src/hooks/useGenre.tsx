import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResonse } from "../services/api-client";
import gernres from "../data/gernres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const fetchGenres = async () => {
    const res = await apiClient.get<FetchResonse<Genre>>("/genres");
    return res.data;
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: gernres,
  });
};
export default useGenre;

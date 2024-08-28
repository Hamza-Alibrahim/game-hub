import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import Trailers from "../entities/Trailers";

const useTrailers = (gameId: number) => {
  const apiCleint = new ApiClient<Trailers>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiCleint.getAll,
  });
};
export default useTrailers;

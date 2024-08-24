import { Genre } from "./useGenre";
import { Platform } from "./usePlatform";
import { Order } from "../components/OrderSelector";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

interface GameQuery {
  selectedGenre: Genre | null;
  curPlatform: Platform | null;
  order: Order | null;
  title: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.selectedGenre?.id,
          parent_platforms: gameQuery.curPlatform?.id,
          ordering: gameQuery.order?.val,
          search: gameQuery.title,
        },
      }),
  });
export default useGame;

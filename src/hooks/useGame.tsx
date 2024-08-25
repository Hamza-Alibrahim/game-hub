import { Platform } from "./usePlatform";
import ApiClient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

interface GameQuery {
  selectedGenreId?: number;
  curPlatformId?: number;
  orderVal?: string;
  title?: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.selectedGenreId,
          parent_platforms: gameQuery.curPlatformId,
          ordering: gameQuery.orderVal,
          search: gameQuery.title,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("1d"),
  });
export default useGame;

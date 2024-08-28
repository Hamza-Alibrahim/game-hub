import ApiClient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQuery from "../Store";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const { selectedGenre, curPlatform, order, title } = useGameQuery();
  const gameQuery = {
    selectedGenreId: selectedGenre?.id,
    curPlatformId: curPlatform?.id,
    orderVal: order?.val,
    title,
  };

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: curPlatform?.id,
          ordering: order?.val,
          search: title,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("1d"),
  });
};
export default useGames;

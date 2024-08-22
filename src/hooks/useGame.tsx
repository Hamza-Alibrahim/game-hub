import { Genre } from "./useGenre";
import { Platform } from "./usePlatform";
import useData from "./useData";
import { Order } from "../components/OrderSelector";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGame = (
  selectedGenre: Genre | null,
  curPlatform: Platform | null,
  order: Order | null,
  title: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: curPlatform?.id,
        ordering: order?.val,
        search: title,
      },
    },
    [selectedGenre?.id, curPlatform?.id, order?.val, title]
  );
export default useGame;

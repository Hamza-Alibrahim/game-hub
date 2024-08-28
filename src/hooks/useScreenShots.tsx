import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ScreenShot from "../entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const apiCLient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenShots", gameId],
    queryFn: apiCLient.getAll,
  });
};
export default useScreenShots;

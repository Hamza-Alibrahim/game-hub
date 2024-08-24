import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResonse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const fetchPlatforms = async () => {
    const res = await apiClient.get<FetchResonse<Platform>>(
      "/platforms/lists/parents"
    );
    return res.data;
  };

  return useQuery({
    queryKey: ["Platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};
export default usePlatform;
